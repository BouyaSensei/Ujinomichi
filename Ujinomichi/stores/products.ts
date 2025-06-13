interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  stockQuantity: number;
  type: string;
}

export const useProductsStore = defineStore("products", {
  state: () => ({
    products: [] as Product[],
  }),
  actions: {
    async fetchProducts() {
      await $fetch<Product[]>("/api/getAllProduct").then((products) => {
        this.products = products;
      });
    },
  },
});
