<template>
  <div class="relative rounded-xl overflow-hidden shadow-md group">
    <!-- Image produit -->
    <NuxtImg :src="img" :alt="title" class="w-full h-52 object-cover" />

    <!-- Overlay kaki avec opacité -->
    <div
      class="absolute inset-x-0 bottom-0 bg-[#3A4034]/90 text-white px-2 py-1.5"
    >
      <div class="flex justify-between items-end">
        <div>
          <div class="text-[10px] font-semibold leading-tight">{{ title }}</div>
          <div class="text-[10px] opacity-80">{{ price }} €</div>
        </div>
        <div class="flex items-center gap-1">
          <button
            @click="addToWishList"
            class="bg-[#6b7261] p-1 rounded-full hover:bg-[#818a75]"
          >
            <NuxtImg
              src="/categorie/heart (1).png"
              width="13"
              height="13"
              alt="wishlist"
            />
          </button>
          <button
            @click="addToBasket"
            class="bg-white p-1 rounded-full hover:bg-gray-200"
          >
            <NuxtImg
              src="/categorie/shopping-cart.png"
              width="13"
              height="13"
              alt="add to cart"
            />
          </button>
        </div>
        <NuxtLink
          :to="`/products/${id}`"
          class="text-[10px] text-blue-500 hover:underline"
          >Voir plus</NuxtLink
        >
      </div>
    </div>
  </div>
</template>

<script setup>
import { useToast } from "vue-toastification";
const props = defineProps(["img", "title", "price", "key", "id"]);
const authStore = useAuthStore();
const toast = useToast();
const addToBasket = () => {
  const userId = authStore.user.userId;
  const productQuantity = 1;
  const id = props.id;
  fetch("/api/basket/addToBasket", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ userId, id, productQuantity }),
  });
  toast.success("Produit ajouté au panier avec succès !");
};
const addToWishList = () => {
  const userId = authStore.user.userId;
  const id = props.id;
  fetch("/api/wishlist/addToWishList", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ userId, id }),
  });
  toast.success("Produit ajouté à la liste de souhaits avec succès !");
};
</script>
