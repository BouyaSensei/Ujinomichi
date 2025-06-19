<template>
  <div
    class="border rounded-md p-3 flex flex-col md:flex-row items-center justify-between gap-4"
  >
    <div class="flex items-center gap-4">
      <img
        :src="image"
        alt="Produit"
        class="w-14 h-14 md:w-20 md:h-20 rounded object-cover"
      />
      <div class="text-sm md:text-base">
        <p class="font-semibold">{{ name }}</p>
        <p class="font-bold">{{ price }} €</p>
      </div>
    </div>
    <div class="flex flex-col md:flex-row gap-2">
      <button
        v-on:click="addToBasket"
        class="text-xs md:text-sm bg-[#3E4233] text-white px-3 py-1 rounded"
      >
        Ajouter au panier
      </button>
      <button
        v-on:click="removeToWishlist"
        class="text-xs md:text-sm bg-[#E9DECF] text-black px-3 py-1 rounded"
      >
        Supprimer de la liste de souhait
      </button>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  image: String,
  name: String,
  price: String,
  id: Number,
});
const userStore = useUserStore();

function addToBasket() {
  const userId = userStore.id;
  const productQuantity = 1;
  const id = props.id;
  try {
    const response = fetch("/api/basket/addToBasket", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userId, id, productQuantity }),
    });
    if (response.ok) {
      removeToWishlist();
      return response.status;
    }
  } catch (error) {
    console.error("Error adding to basket");
  }
}
function removeToWishlist() {
  console.log(props.id);
  userStore.dropProductFromWishList(props.id);
}
</script>
