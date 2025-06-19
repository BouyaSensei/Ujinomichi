<template>
  <div class="max-w-6xl mx-auto px-4 py-6">
    <!-- Layout général responsive -->
    <div class="grid grid-cols-1 md:grid-cols-4 gap-6">
      <!-- Menu navigation -->
      <div class="space-y-3">
        <button
          v-for="item in sections"
          :key="item.key"
          @click="activeSection = item.key"
          class="flex items-center gap-3 w-full text-left px-3 py-2 rounded-md font-semibold md:block hidden"
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
          @click="logout"
          class="hidden md:block w-full bg-[#E9DECF] text-gray-800 font-semibold py-2 rounded shadow mt-4"
        >
          Déconnexion
        </button>
      </div>

      <!-- Contenu général -->
      <div class="md:col-span-3 space-y-6">
        <!-- Version mobile : accordéons -->
        <div class="md:hidden space-y-6">
          <Accordion
            v-for="item in sections"
            :key="item.key"
            :title="item.title"
            :icon-name="item.icon"
            @click="activeSection = item.key"
          >
            <component :is="sectionComponents[item.key]" />
          </Accordion>
          <button
            @click="logout"
            class="w-full bg-[#E9DECF] text-gray-800 font-semibold py-2 rounded shadow"
          >
            Déconnexion
          </button>
        </div>

        <!-- Desktop : contenu unique selon l'onglet -->
        <component
          :is="sectionComponents[activeSection]"
          class="hidden md:block"
        />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
import { NuxtImg } from "#components";
import Accordion from "~/components/Accordion.vue";

const activeSection = ref("settings");

const sections = [
  { key: "settings", title: "Paramètres de compte", icon: "settings" },
  { key: "orders", title: "Mes commandes", icon: "mes_commandes" },
  { key: "addresses", title: "Mes adresses", icon: "adresses" },
  { key: "wishlist", title: "Ma liste de souhait", icon: "wishlist" },
];

const sectionComponents = {
  settings: defineAsyncComponent(
    () => import("~/components/sections/AccountSettings.vue")
  ),
  orders: defineAsyncComponent(
    () => import("~/components/sections/OrderSection.vue")
  ),
  addresses: defineAsyncComponent(
    () => import("~/components/sections/AddressSection.vue")
  ),
  wishlist: defineAsyncComponent(
    () => import("~/components/sections/WishlistSection.vue")
  ),
};
const router = useRouter();
/*const email = ref("");
const phone_number = ref("");
const password = ref("");*/

const authStore = useAuthStore();
const userStore = useUserStore();
//console.log(authStore.isAuthenticated);
//console.log(authStore.user);
//console.log(authStore.checkAuth());
async function modify() {
  const data = {
    email: email.value,
    phone_number: phone_number.value,
    password: password.value,
  };
  await fetch("/api/user/modifyUser", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ data }),
  });
}
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
  userStore.getInfo();
});
</script>
