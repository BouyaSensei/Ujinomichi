<template>
  <div class="space-y-3" v-if="userStore.wishlist.length > 0">
    <WishlistCard
      v-for="product in userStore.wishlist"
      :image="product.imageUrl"
      :name="product.name"
      :price="product.price"
      :id="product.id"
    />
  </div>
  <div v-else>
    <p class="text-center text-gray-500">Votre liste de souhaits est vide.</p>
  </div>
</template>

<script setup>
import WishlistCard from "~/components/WishlistCard.vue";
const userStore = useUserStore();
console.log(userStore.wishlist);

//awaitAsyncData("wishlist", () => userStore.getWishList());
await useAsyncData("wishlist", () => userStore.getWishList());
</script>
