interface User {
  id: number | null;
  email: null | string;
  phone_number: null | string;
  orders: null | Array<object>;
  wishlist: null | Array<object>;
  deliveryAddress: null | Array<object>;
  basketId: [] | Array<object>;
  basket: [] | Array<object>;
  token: string | null;
}

export const useUserStore = defineStore("user", {
  state(): User {
    return {
      id: null,
      email: null,
      phone_number: "",
      orders: null,
      wishlist: null,
      deliveryAddress: null,
      basketId: [],
      basket: [],
      token: useCookie("token").value as string | null,
    };
  },
  actions: {
    async getInfo() {
      // console.log(this.token);
      try {
        const response = await fetch("api/user/getUserInfo", {
          method: "POST",
          headers: { Authorization: `Bearer ${this.token}` },
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        this.id = data.id;
        this.email = data.email;
        this.phone_number = data.phoneNumber;
        this.orders = data.commandOrders;
        this.wishlist = data.wishlist;
        this.deliveryAddress = data.deliveryAddress;
        this.basketId = JSON.parse(data.basket);
        return "ok";
      } catch (error) {
        console.error("Error fetching user info:", error);
        throw new Error("Impossible de récupérer les informations utilisateur");
      }
    },
    async dropBasket() {
      try {
        const userId = this.id;
        const response = await fetch("api/basket/removeToBasket", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ userId }),
        });
      } catch (error) {}
    },
  },
});
