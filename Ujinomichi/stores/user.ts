interface User {
  id: number | null;
  email: null | string;
  phone_number: null | string;
  orders: null | Array<object>;
  wishlistId: string;
  wishlist: [] | Array<object>;
  deliveryAddress: [] | Array<object>;
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
      wishlist: [],
      wishlistId: "",
      deliveryAddress: [],
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
        this.wishlistId = data.wishlist;
        this.deliveryAddress = data.deliveryAddress;
        this.basketId = JSON.parse(data.basket);
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

    async dropProductFromBasket(productId: number) {
      const userId = this.id;

      try {
        const response = await fetch("api/basket/removeProductToBasket", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ productId, userId }),
        });
        if (response.ok) {
          return response.status;
        }
      } catch (error) {}
    },
    async incrementProductBasket(productId: number) {
      const userId = this.id;

      try {
        const response = await fetch("api/basket/incrementProductToBasket", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ userId, productId }),
        });
        if (response.ok) {
          return response.status;
        }
      } catch (error) {}
    },
    async decrementProductBasket(productId: number) {
      const userId = this.id;

      try {
        const response = await fetch("api/basket/decrementProductToBasket", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ userId, productId }),
        });
        if (response.ok) {
          return response.status;
        }
      } catch (error) {}
    },

    async getWishList() {
      const wishId = JSON.parse(this.wishlistId);

      try {
        wishId.forEach(async (element: any) => {
          const product = element.productId;
          const response = await fetch("/api/getSingleProductById", {
            method: "POST",
            body: JSON.stringify({ product }),
          });
          if (response.ok) {
            const data: object = await response.json();
            if (
              !this.wishlist.filter((element) => element.id === data.id).length
            ) {
              this.wishlist.push(data);
            }
          }
        });
        // console.log(this.wishlist);
      } catch (error) {
        console.error("Error fetching wishlist", error);
        throw new Error(
          "Impossible de récupérer les informations de la liste de souhait"
        );
      }
    },
    async dropProductFromWishList(productId: number) {
      try {
        const response = await fetch("/api/wishlist/deleteToWishList", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ userId: this.id, productId: productId }),
        });
        if (response.ok) {
          this.wishlist = this.wishlist.filter(
            (element) => element.id !== productId
          );
        }
      } catch (error) {}
    },
  },
});
