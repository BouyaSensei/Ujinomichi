<template>
  <div
    class="border rounded-md p-3 flex flex-col md:flex-row items-center justify-between gap-4 mb-2"
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
    <div class="flex flex-col md:flex-row gap-2 font-bold">
      <button
        v-on:click="addToBasket"
        class="text-xs md:text-sm bg-[#4E5548] hover:bg-[#7C8259] text-white px-3 py-1 rounded"
      >
        Ajouter au panier
      </button>
      <button
        v-on:click="removeToWishlist"
        class="text-xs md:text-sm bg-[#E6DBD0] hover:bg-[#EFE4D9] text-[#4E5548] px-3 py-1 rounded"
      >
        Supprimer de la liste de souhait
      </button>
    </div>
  </div>
</template>

<script setup>
import { useToast } from "vue-toastification";
const toast = useToast();
const props = defineProps({
  image: String,
  name: String,
  price: String,
  id: Number,
});

const userStore = useUserStore();

async function addToBasket() {
  const userId = userStore.id;
  const productQuantity = 1;
  const id = props.id;
  try {
    const response = await fetch("/api/basket/addToBasket", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userId, id, productQuantity }),
    });

    if (response.ok) {
      userStore.dropProductFromWishList(props.id);
      toast.success("Produit ajouté au panier avec succès !");
      return response.status;
    }
  } catch (error) {
    console.error("Error adding to basket");
  }
}
function removeToWishlist() {
  console.log(props.id);
  toast.success("Produit supprimé de la liste de souhaits avec succès !");
  userStore.dropProductFromWishList(props.id);
}
</script>
