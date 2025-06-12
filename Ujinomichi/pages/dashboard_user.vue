<template>
  <main class="max-w-4xl mx-auto px-4 py-6 space-y-6">
    <!-- Titre -->
    <h1 class="text-2xl font-semibold flex items-center gap-2">
      <Icon name="lucide:user" />
      Mon compte
    </h1>
    <hr class="border-gray-300" />

    <!-- Accordions -->
    <Accordion title="PARAMÈTRES DE COMPTE">
      <template #icon>
        <Icon name="lucide:settings" />
      </template>
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
    </Accordion>

    <Accordion title="MES COMMANDES">
      <template #icon>
        <Icon name="lucide:list" />
      </template>
      <div class="space-y-3">
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
      </div>
    </Accordion>

    <Accordion title="MES ADRESSES">
      <template #icon>
        <Icon name="lucide:map-pin" />
      </template>
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
    </Accordion>

    <Accordion title="MA LISTE DE SOUHAIT">
      <template #icon>
        <Icon name="lucide:gift" />
      </template>
      <div class="space-y-3">
        <WishlistCard image="/images/wish1.jpg" />
        <WishlistCard image="/images/wish2.jpg" />
      </div>
    </Accordion>

    <!-- Déconnexion -->
    <div class="pt-4">
      <button
        v-on:click="logout"
        class="w-full bg-[#E9DECF] text-gray-800 font-semibold py-2 rounded shadow"
      >
        Déconnexion
      </button>
    </div>
  </main>
</template>
<script setup lang="ts">
const router = useRouter();

const authStore = useAuthStore();
//console.log(authStore.isAuthenticated);
//console.log(authStore.user);
console.log(authStore.checkAuth());

async function logout() {
  authStore.logout();
  router.push("/login");
}

if (!authStore.isAuthenticated) {
  router.push("/login");
}
if (!useCookie("token").value) {
  router.push("/login");
}

onMounted(() => {
  authStore.checkAuth();
});
</script>
