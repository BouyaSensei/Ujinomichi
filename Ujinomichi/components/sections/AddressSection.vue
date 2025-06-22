<template>
  <section
    class="bg-[#3E4233] text-white p-8 rounded-2xl shadow-lg max-w-4xl mx-auto space-y-6"
  >
    <h2 class="text-3xl font-bold text-center">🏎 Mes adresses</h2>

    <div
      v-if="addresses.length === 0"
      class="bg-[#2a2d24] text-[#E9DECF] text-center px-6 py-4 rounded-xl text-sm md:text-base"
    >
      Aucune adresse enregistrée. Cliquez sur
      <strong class="text-purple-400">+</strong> pour en ajouter une.
    </div>

    <div
      v-for="(address, index) in addresses"
      :key="address.id"
      class="bg-white rounded-xl overflow-hidden border border-gray-200 shadow-sm"
    >
      <div
        class="flex justify-between items-center px-5 py-4 bg-[#F9F6F1] cursor-pointer"
        @click="toggleOpen(index)"
      >
        <div
          class="flex items-center gap-2 text-gray-800 font-medium text-base"
        >
          🏷️ Adresse {{ index + 1 }}
          <span class="text-sm text-gray-500"
            >({{ address.country || "Pays non défini" }})</span
          >
        </div>
        <div class="flex items-center gap-4">
          <button
            @click.stop="removeAddress(index)"
            class="text-red-500 hover:text-red-700 text-sm font-semibold"
          >
            ✖ Supprimer
          </button>
          <span class="text-gray-500 text-xl">{{
            openIndexes.includes(index) ? "▾" : "▸"
          }}</span>
        </div>
      </div>

      <div
        v-show="openIndexes.includes(index)"
        class="px-6 pb-6 pt-4 bg-white space-y-6"
      >
        <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1"
              >Nom de l'adresse</label
            >
            <input
              v-model="address.name"
              type="text"
              placeholder="Ex : Maison"
              class="w-full rounded-md bg-[#F9F6F1] border border-gray-300 text-gray-800 placeholder-gray-500 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#9A8F7B]"
            />
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1"
              >Pays</label
            >
            <select
              v-model="address.country"
              class="w-full rounded-md bg-[#F9F6F1] border border-gray-300 text-gray-800 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#9A8F7B]"
            >
              <option disabled value="">Sélectionnez un pays</option>
              <option v-for="country in countryList" :key="country">
                {{ country }}
              </option>
            </select>
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1"
              >Ville</label
            >
            <input
              v-model="address.city"
              type="text"
              placeholder="Paris"
              class="w-full rounded-md bg-[#F9F6F1] border border-gray-300 text-gray-800 placeholder-gray-500 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#9A8F7B]"
            />
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1"
              >Région</label
            >
            <input
              v-model="address.region"
              type="text"
              placeholder="Île-de-France"
              class="w-full rounded-md bg-[#F9F6F1] border border-gray-300 text-gray-800 placeholder-gray-500 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#9A8F7B]"
            />
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1"
              >Code postal</label
            >
            <input
              v-model="address.postal"
              type="text"
              inputmode="numeric"
              @input="
                (e) =>
                  (address.postal = e.target.value
                    .replace(/\D/g, '')
                    .slice(0, 5))
              "
              placeholder="75000"
              class="w-full rounded-md bg-[#F9F6F1] border border-gray-300 text-gray-800 placeholder-gray-500 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#9A8F7B]"
            />
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1"
              >Téléphone</label
            >
            <input
              v-model="address.phone"
              type="text"
              inputmode="numeric"
              @input="
                (e) =>
                  (address.phone = e.target.value
                    .replace(/\D/g, '')
                    .slice(0, 10))
              "
              placeholder="06..."
              class="w-full rounded-md bg-[#F9F6F1] border border-gray-300 text-gray-800 placeholder-gray-500 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#9A8F7B]"
            />
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1"
              >Rue</label
            >
            <input
              v-model="address.street"
              type="text"
              placeholder="Rue Saint-Joseph"
              class="w-full rounded-md bg-[#F9F6F1] border border-gray-300 text-gray-800 placeholder-gray-500 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#9A8F7B]"
            />
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1"
              >Numéro (de rue)</label
            >
            <input
              v-model="address.number"
              type="text"
              inputmode="numeric"
              @input="
                (e) =>
                  (address.number = e.target.value
                    .replace(/\D/g, '')
                    .slice(0, 3))
              "
              placeholder="123"
              class="w-full rounded-md bg-[#F9F6F1] border border-gray-300 text-gray-800 placeholder-gray-500 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#9A8F7B]"
            />
          </div>
        </div>

        <div class="pt-4">
          <button
            @click="validateAddress(index)"
            class="w-full flex items-center justify-center gap-2 bg-[#E9DECF] text-black font-semibold text-base px-6 py-3 rounded-xl shadow hover:bg-[#d4c7b5] transition-all duration-200"
          >
            <span
              v-if="
                userStore.deliveryAddress.some(
                  (a) => a.id !== null && a.id === address.id
                )
              "
              >✏️ Mettre à jour cette adresse</span
            >
            <span v-else>✅ Valider cette adresse</span>
          </button>
        </div>
      </div>
    </div>

    <div class="flex flex-col md:flex-row gap-4 justify-center pt-4">
      <button
        v-if="openIndexes.length === 0"
        @click="addAddress"
        class="flex items-center justify-center gap-2 bg-[#E9DECF] text-black font-semibold text-base md:text-lg px-6 py-3 rounded-xl shadow hover:bg-[#d4c7b5] transition-all duration-200"
      >
        <span class="text-purple-600 text-xl">➕</span>
        Enregistrer une nouvelle adresse
      </button>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
import { v4 as uuidv4 } from "uuid";
const userStore = useUserStore();
const addresses = ref(userStore.deliveryAddress);

const openIndexes = ref([]);

const countryList = [
  "France",
  "Allemagne",
  "Belgique",
  "Espagne",
  "Italie",
  "Pays-Bas",
  "Portugal",
  "Suisse",
  "Suède",
  "Norvège",
  "Danemark",
  "Autriche",
  "Pologne",
  "République Tchèque",
  "Irlande",
  "Grèce",
  "Hongrie",
  "Luxembourg",
  "Roumanie",
  "Finlande",
  "Slovaquie",
  "Slovénie",
  "Estonie",
  "Lettonie",
  "Lituanie",
  "Chypre",
  "Bulgarie",
  "Croatie",
  "Malte",
  "Islande",
];

function addAddress() {
  const newIndex = addresses.value.length;
  addresses.value.push({
    id: null,
    name: "",
    country: "",
    city: "",
    region: "",
    postal: "",
    street: "",
    number: "",
    phone: "",
  });
  openIndexes.value.push(newIndex);
}

function removeAddress(index) {
  console.log(addresses.value[index]);
  fetch("api/address/removeAddressDelivery", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      userId: userStore.id,
      address: addresses.value[index],
    }),
  }).then((response) => response.json());

  addresses.value.splice(index, 1);
  openIndexes.value = openIndexes.value.filter((i) => i !== index);
}

function toggleOpen(index) {
  if (openIndexes.value.includes(index)) {
    openIndexes.value = openIndexes.value.filter((i) => i !== index);
  } else {
    openIndexes.value.push(index);
  }
}

async function submitAddresses(address, isUpdate = false) {
  try {
    console.log(address);
    const userId = userStore.id;
    const endpoint = isUpdate
      ? "/api/address/updateAddressDelivery"
      : "/api/address/addAddressDelivery";
    const res = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userId, addresses: address }),
    });

    if (res.ok) console.log("Adresses soumises.");
  } catch (err) {
    console.error("Erreur lors de la sauvegarde :", err);
  }
}

function validateAddress(index) {
  const address = addresses.value[index];
  const isUpdate = userStore.deliveryAddress.some(
    (a) => a.id !== null && a.id === address.id
  );

  if (isUpdate) {
    console.log("Mise à jour de l'adresse :", address);
  } else {
    address.id = uuidv4();
    console.log("Ajout d'une nouvelle adresse :", address);
  }

  openIndexes.value = openIndexes.value.filter((i) => i !== index);
  submitAddresses(address, isUpdate);
}
</script>
