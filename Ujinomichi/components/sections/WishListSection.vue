<template>
  <div class="space-y-3">
    <WishlistCard
      v-for="product in userStore.wishlist"
      :image="product.imageUrl"
      :name="product.name"
      :price="product.price"
      :id="product.id"
    />
  </div>
</template>

<script setup>
import WishlistCard from "~/components/WishlistCard.vue";
const userStore = useUserStore();
//console.log(userStore.wishlist);

//awaitAsyncData("wishlist", () => userStore.getWishList());
await useAsyncData("wishlist", () => userStore.getWishList());
</script>
