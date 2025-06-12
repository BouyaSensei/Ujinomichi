<template>
  <div
    class="border rounded-md p-3 flex flex-col md:flex-row items-center justify-between gap-4"
  >
    <div class="flex items-center gap-4">
      <img
        :src="image"
        alt="Commande"
        class="w-14 h-14 md:w-20 md:h-20 rounded object-cover"
      />
      <div class="text-sm md:text-base">
        <p class="font-semibold">COMMANDE #{{ number }}</p>
        <p>{{ date }}</p>
        <p class="text-green-600 font-medium">{{ status }}</p>
      </div>
    </div>
    <div class="text-right space-y-1">
      <p class="font-bold text-sm md:text-base">{{ price }}</p>
      <button
        class="text-xs md:text-sm text-white bg-gray-700 px-3 py-1 rounded"
      >
        Voir la commande
      </button>
    </div>
  </div>
</template>

<script setup>
defineProps({
  number: String,
  date: String,
  status: String,
  price: String,
  image: String,
});
</script>
