interface User {
  id: number | null;
  email: null | string;
  phone_number: null | string;
  orders: null | Array<object>;
  wishlist: null | Array<object>;
  deliveryAddress: null | Array<object>;
  token: null | string;
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
      token: null,
    };
  },
  actions: {
    async getInfo() {
      // console.log(this.token);
      const response = await fetch("api/user/getUserInfo", {
        method: "POST",
        headers: { Authorization: `Bearer ${this.token}` },
      });

      if (response.ok) {
        response.json().then((data) => {
          this.id = data.id;
          this.email = data.email;
          this.phone_number = data.phoneNumber;
          this.orders = data.commandOrders;
          this.wishlist = data.wishlist;
          this.deliveryAddress = data.deliveryAddress;
        });
      } else {
        throw new Error("Error fetching user info");
      }
    },
  },
});
