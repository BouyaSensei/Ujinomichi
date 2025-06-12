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
        <p class="font-semibold">NOM PRODUIT</p>
        <p class="font-bold">00$</p>
      </div>
    </div>
    <div class="flex flex-col md:flex-row gap-2">
      <button
        class="text-xs md:text-sm bg-[#3E4233] text-white px-3 py-1 rounded"
      >
        Ajouter au panier
      </button>
      <button
        class="text-xs md:text-sm bg-[#E9DECF] text-black px-3 py-1 rounded"
      >
        Supprimer de la liste de souhait
      </button>
    </div>
  </div>
</template>

<script setup>
defineProps({
  image: String,
});
</script>
