<template>
  <div class="bg-[#3E4233] text-white p-4 rounded-md space-y-4">
    <label class="block">
      <span class="block text-sm font-medium mb-1">Pays</span>
      <select
        v-model="country"
        class="w-full bg-[#E9DECF] text-black px-3 py-2 rounded-md border border-gray-300"
      >
        <option>France</option>
        <option>Allemagne</option>
        <option>Belgique</option>
        <option>Espagne</option>
        <option>Italie</option>
        <option>Pays-Bas</option>
        <option>Portugal</option>
        <option>Royaume-Uni</option>
        <option>Suisse</option>
        <option>Suède</option>
        <option>Norvège</option>
        <option>Danemark</option>
        <option>Finlande</option>
        <option>Autriche</option>
        <option>Pologne</option>
        <option>République Tchèque</option>
        <option>Irlande</option>
        <option>Grèce</option>
        <option>Hongrie</option>
        <option>Luxembourg</option>
      </select>
    </label>

    <div class="flex flex-col md:flex-row gap-4">
      <label class="flex-1">
        <span class="block text-sm font-medium mb-1">Ville</span>
        <input
          v-model="city"
          type="text"
          placeholder="Paris"
          class="w-full bg-[#E9DECF] text-black px-3 py-2 rounded-md border border-gray-300"
        />
      </label>
      <label class="flex-1">
        <span class="block text-sm font-medium mb-1">Région</span>
        <input
          v-model="region"
          type="text"
          placeholder="Île-de-France"
          class="w-full bg-[#E9DECF] text-black px-3 py-2 rounded-md border border-gray-300"
        />
      </label>
    </div>

    <label class="block">
      <span class="block text-sm font-medium mb-1">Code postal</span>
      <input
        v-model="postal"
        type="text"
        placeholder="75000"
        class="w-full bg-[#E9DECF] text-black px-3 py-2 rounded-md border border-gray-300"
      />
    </label>

    <div class="flex flex-col md:flex-row gap-4">
      <label class="flex-1">
        <span class="block text-sm font-medium mb-1">Rue</span>
        <input
          v-model="street"
          type="text"
          placeholder="Avenue des Champs-Élysées"
          class="w-full bg-[#E9DECF] text-black px-3 py-2 rounded-md border border-gray-300"
        />
      </label>
      <label class="md:w-1/3">
        <span class="block text-sm font-medium mb-1">Numéro</span>
        <input
          v-model="number"
          type="text"
          placeholder="123"
          class="w-full bg-[#E9DECF] text-black px-3 py-2 rounded-md border border-gray-300"
        />
      </label>
    </div>

    <div class="flex justify-center">
      <button
        class="mt-4 bg-[#E9DECF] text-black px-4 py-2 rounded-md font-semibold border border-gray-300 hover:bg-[#d3c2ab] transition-colors duration-300"
      >
        Modifier l'adresse de livraison
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const country = ref("France");
const city = ref("Paris");
const region = ref("Ile de France");
const postal = ref("75000");
const street = ref("Rue Saint-Joseph");
const number = ref("06");
</script>
