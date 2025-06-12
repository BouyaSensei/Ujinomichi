<template>
  <div class="max-w-6xl mx-auto px-4 py-6">
    <!-- Version mobile : accordéons -->
    <div class="md:hidden space-y-6">
      <Accordion title="Paramètres de compte" iconName="settings">
        <section>
          <div class="space-y-3 border p-4 rounded-md">
            <input
              type="email"
              value="blopblip.37@gmail.com"
              class="w-full px-3 py-2 border rounded"
            />
            <input
              type="password"
              value="password"
              class="w-full px-3 py-2 border rounded"
            />
            <input
              type="tel"
              value="0624583216"
              class="w-full px-3 py-2 border rounded"
            />
            <div class="flex flex-col md:flex-row gap-2">
              <button
                class="w-full bg-[#3E4233] text-white py-2 rounded font-semibold"
              >
                Changer de mot de passe
              </button>
              <button
                class="w-full bg-[#E9DECF] text-gray-800 py-2 rounded font-semibold"
              >
                Supprimer le compte
              </button>
            </div>
          </div>
        </section>

        <template #chevron />
      </Accordion>

      <Accordion title="Mes commandes" iconName="mes_commandes">
        <OrderCard
          number="1"
          date="6 Juin, 2025"
          status="LIVRÉ"
          price="00$"
          image="/images/commande1.jpg"
        />
        <OrderCard
          number="2"
          date="10 Juin, 2025"
          status="LIVRÉ"
          price="00$"
          image="/images/commande2.jpg"
        />
        <template #chevron />
      </Accordion>

      <Accordion title="Mes adresses" iconName="adresses">
        <section>
          <div class="bg-[#3E4233] text-white p-4 rounded space-y-3">
            <select class="w-full bg-[#E9DECF] text-black px-2 py-1 rounded">
              <option>France</option>
            </select>
            <div class="flex flex-col md:flex-row gap-2">
              <input
                type="text"
                placeholder="Ville"
                value="Paris"
                class="flex-1 bg-[#E9DECF] px-2 py-1 rounded"
              />
              <input
                type="text"
                placeholder="Région"
                value="Ile de France"
                class="flex-1 bg-[#E9DECF] px-2 py-1 rounded"
              />
            </div>
            <input
              type="text"
              placeholder="Code postal"
              value="75000"
              class="w-full bg-[#E9DECF] px-2 py-1 rounded"
            />
            <div class="flex flex-col md:flex-row gap-2">
              <input
                type="text"
                placeholder="Nom de rue"
                value="Rue Saint-Joseph"
                class="flex-1 bg-[#E9DECF] px-2 py-1 rounded"
              />
              <input
                type="text"
                placeholder="Numéro"
                value="06"
                class="w-1/3 bg-[#E9DECF] px-2 py-1 rounded"
              />
            </div>
          </div>
        </section>
        <template #chevron />
      </Accordion>

      <Accordion title="Ma liste de souhait" iconName="wishlist">
        <WishlistCard image="/images/wish1.jpg" />
        <WishlistCard image="/images/wish2.jpg" />
        <template #chevron />
      </Accordion>
    </div>

    <!-- Version desktop : menu à gauche, contenu à droite -->
    <div class="hidden md:grid grid-cols-4 gap-6">
      <!-- MENU -->
      <div class="space-y-3">
        <button
          v-for="item in sections"
          :key="item.key"
          @click="activeSection = item.key"
          class="flex items-center gap-3 w-full text-left px-3 py-2 rounded-md font-semibold"
          :class="
            activeSection === item.key ? 'bg-gray-200' : 'hover:bg-gray-100'
          "
        >
          <NuxtImg
            :src="`/icons/${item.icon}.png`"
            :alt="item.title"
            width="20"
            height="20"
          />
          {{ item.title }}
        </button>
        <button
          v-on:click="logout"
          class="w-full bg-[#E9DECF] text-gray-800 font-semibold py-2 rounded shadow mt-4"
        >
          Déconnexion
        </button>
      </div>

      <!-- CONTENU -->
      <div class="col-span-3 space-y-6">
        <section v-if="activeSection === 'settings'">
          <h2 class="text-xl font-bold mb-2">Paramètres de compte</h2>
          <div class="space-y-3 border p-4 rounded-md">
            <input
              type="email"
              value="blopblip.37@gmail.com"
              class="w-full px-3 py-2 border rounded"
            />
            <input
              type="password"
              value="password"
              class="w-full px-3 py-2 border rounded"
            />
            <input
              type="tel"
              value="0624583216"
              class="w-full px-3 py-2 border rounded"
            />
            <div class="flex flex-col md:flex-row gap-2">
              <button
                class="w-full bg-[#3E4233] text-white py-2 rounded font-semibold"
              >
                Changer de mot de passe
              </button>
              <button
                class="w-full bg-[#E9DECF] text-gray-800 py-2 rounded font-semibold"
              >
                Supprimer le compte
              </button>
            </div>
          </div>
        </section>

        <section v-else-if="activeSection === 'orders'">
          <h2 class="text-xl font-bold mb-2">Mes commandes</h2>
          <OrderCard
            number="1"
            date="6 Juin, 2025"
            status="LIVRÉ"
            price="00$"
            image="/images/commande1.jpg"
          />
          <OrderCard
            number="2"
            date="10 Juin, 2025"
            status="LIVRÉ"
            price="00$"
            image="/images/commande2.jpg"
          />
        </section>

        <section v-else-if="activeSection === 'addresses'">
          <h2 class="text-xl font-bold mb-2">Mes adresses</h2>
          <div class="bg-[#3E4233] text-white p-4 rounded space-y-3">
            <select class="w-full bg-[#E9DECF] text-black px-2 py-1 rounded">
              <option>France</option>
            </select>
            <div class="flex flex-col md:flex-row gap-2">
              <input
                type="text"
                value="Paris"
                placeholder="Ville"
                class="flex-1 bg-[#E9DECF] px-2 py-1 rounded"
              />
              <input
                type="text"
                value="Ile de France"
                placeholder="Région"
                class="flex-1 bg-[#E9DECF] px-2 py-1 rounded"
              />
            </div>
            <input
              type="text"
              value="75000"
              placeholder="Code postal"
              class="w-full bg-[#E9DECF] px-2 py-1 rounded"
            />
            <div class="flex flex-col md:flex-row gap-2">
              <input
                type="text"
                value="Rue Saint-Joseph"
                placeholder="Rue"
                class="flex-1 bg-[#E9DECF] px-2 py-1 rounded"
              />
              <input
                type="text"
                value="06"
                placeholder="N°"
                class="w-1/3 bg-[#E9DECF] px-2 py-1 rounded"
              />
            </div>
          </div>
        </section>

        <section v-else-if="activeSection === 'wishlist'">
          <h2 class="text-xl font-bold mb-2">Ma liste de souhait</h2>
          <WishlistCard image="/images/wish1.jpg" />
          <WishlistCard image="/images/wish2.jpg" />
        </section>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { NuxtImg } from "#components";
import Accordion from "~/components/Accordion.vue";
import OrderCard from "~/components/OrderCard.vue";
import WishlistCard from "~/components/WishlistCard.vue";

const activeSection = ref("settings");

const sections = [
  { key: "settings", title: "Paramètres de compte", icon: "settings" },
  { key: "orders", title: "Mes commandes", icon: "mes_commandes" },
  { key: "addresses", title: "Mes adresses", icon: "adresses" },
  { key: "wishlist", title: "Ma liste de souhait", icon: "wishlist" },
];
const router = useRouter();

const authStore = useAuthStore();
//console.log(authStore.isAuthenticated);
//console.log(authStore.user);
console.log(authStore.checkAuth());

async function logout() {
  authStore.logout();
  router.push("/login");
  navigateTo("/login");
}
if (useCookie("token").value) {
  authStore.token = useCookie("token").value;
}
if (!authStore.isAuthenticated && !useCookie("token")) {
  router.push("/login");
  navigateTo("/login");
}
if (!useCookie("token").value) {
  router.push("/login");
  navigateTo("/login");
}

onMounted(() => {
  authStore.checkAuth();
});
</script>
