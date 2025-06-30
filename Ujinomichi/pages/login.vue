<template>
  <div class="min-h-screen flex flex-col bg-white">
    <!-- Barre supérieure verte -->

    <div class="flex-1 flex flex-col justify-center items-center px-4">
      <!-- Logo -->

      <svg
        class="size-11 mx-auto mb-2"
        xmlns="http://www.w3.org/2000/svg"
        width="48"
        height="48"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#7C8259"
        stroke-width="1.75"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <circle cx="12" cy="12" r="3" />
        <path
          d="M12 16.5A4.5 4.5 0 1 1 7.5 12 4.5 4.5 0 1 1 12 7.5a4.5 4.5 0 1 1 4.5 4.5 4.5 4.5 0 1 1-4.5 4.5"
        />
        <path d="M12 7.5V9" />
        <path d="M7.5 12H9" />
        <path d="M16.5 12H15" />
        <path d="M12 16.5V15" />
        <path d="m8 8 1.88 1.88" />
        <path d="M14.12 9.88 16 8" />
        <path d="m8 16 1.88-1.88" />
        <path d="M14.12 14.12 16 16" />
      </svg>

      <h1 class="text-2xl font-bold text-[#4E5548] text-center mt-2 mb-2">
        Connexion à votre<br />compte
      </h1>
      <hr class="w-64 border-t-2 border-[#7C8259] mx-auto my-4" />
      <p class="text-[#4E5548] text-center mb-6">Bon retour parmi nous !</p>

      <form
        @submit.prevent="login"
        class="w-full max-w-xs flex flex-col gap-4"
        autocomplete="off"
      >
        <!-- Email -->
        <div>
          <label class="block text-sm text-[#4E5548] mb-1" for="email"
            >Email</label
          >
          <input
            id="email"
            name="email"
            v-model="email"
            type="email"
            class="w-full rounded-md border border-[#4E5548] bg-transparent px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#6f785c] text-gray-900"
            autocomplete="email"
          />
        </div>
        <!-- Mot de passe -->
        <div>
          <label class="block text-sm text-[#4E5548] mb-1" for="password"
            >Mot de passe</label
          >
          <input
            id="password"
            name="password"
            v-model="password"
            type="password"
            class="w-full rounded-md border border-[#4E5548] bg-transparent px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#6f785c] text-gray-900"
            autocomplete="current-password"
          />
          <div
            id="lost_password"
            class="text-xs text-right text-[#4E5548] mt-1 cursor-pointer hover:underline"
          >
            Mot de passe oublié ?
          </div>
        </div>
        <div v-if="success === false" class="text-red-500 text-sm mt-2">
          Email ou mot de passe incorrect
        </div>
        <!-- Bouton principal -->
        <button
          type="submit"
          class="w-full bg-[#7C8259] text-white font-semibold py-2 rounded-md mt-2 hover:bg-[#727752] transition"
        >
          Confirmation
        </button>
        <!-- Ou séparateur -->
        <div class="flex items-center my-1">
          <div class="flex-1 border-t border-[#bfc1b4]"></div>
          <span class="mx-2 text-[#bfc1b4] text-sm">Ou</span>
          <div class="flex-1 border-t border-[#bfc1b4]"></div>
        </div>
        <!-- Google bouton -->
        <!--<button
          type="button"
          class="w-full flex items-center justify-center border border-[#bfc1b4] rounded-md py-2 bg-white text-[#333] font-semibold hover:bg-[#f1f1eb] transition"
        >
          <NuxtImg src="google-logo.png" alt="Google" class="h-5 w-5 mr-2" />
          Connectez-vous avec Google
        </button>
        -->
        <!-- Lien inscription -->
        <div class="text-center text-xs text-[#4E5548] mt-3">
          Pas de compte ?
          <NuxtLink
            to="/register"
            class="text-[#7C8259] underline font-medium hover:text-[#727752]"
            >Créez-le ici</NuxtLink
          >
        </div>
      </form>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useToast } from "vue-toastification";
const email = ref("");
const password = ref("");
const success = ref();
const router = useRouter();
const authStore = useAuthStore();
const toast = useToast();

async function login(e) {
  e.preventDefault();
  try {
    await authStore.login(email.value, password.value);
    console.log(toast);
    toast.success("Connexion réussie !", { timeout: 2000 });
    router.push("/dashboard_user");
  } catch (error) {
    success.value = false;
    toast.error("Connexion Echouée , vérifiez vos informations !", {
      timeout: 2000,
    });
    //console.log(error);
  }
}

if (authStore.isAuthenticated) {
  router.push("/dashboard_user");
  success.value = true;
}

if (authStore.isAuthenticated || success.value === true) {
  router.push("/dashboard_user");
}

onMounted(() => {
  authStore.checkAuth();
});
</script>
