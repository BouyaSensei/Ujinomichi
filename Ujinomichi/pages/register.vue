<template>
  <div class="min-h-screen flex flex-col bg-white">
    <!-- Barre verte en haut -->

    <!-- Contenu form -->
    <div class="flex-1 flex flex-col items-center justify-center px-4">
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

      <h1 class="text-[#4E5548] text-2xl font-bold text-center mt-2 mb-2">
        Création de votre<br />compte
      </h1>
      <hr class="w-64 border-t-2 border-[#4E5548] mx-auto my-4" />
      <p class="text-[#4E5548] text-center mb-6 w-64">
        Profitez de -30% sur votre première commande.
      </p>

      <form class="w-full max-w-xs flex flex-col gap-4">
        <!-- Email -->
        <div>
          <label class="block text-xs text-[#4E5548] mb-1" for="email"
            >Email</label
          >
          <input
            id="email"
            type="email"
            v-model="email"
            class="w-full rounded-md border border-[#4E5548] bg-transparent px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#878e6a] text-gray-900"
            autocomplete="email"
          />
        </div>
        <!-- Mot de passe -->
        <div>
          <label class="block text-xs text-[#4E5548] mb-1" for="password"
            >Mot de passe</label
          >
          <input
            id="password"
            type="password"
            v-model="password"
            class="w-full rounded-md border border-[#4E5548] bg-transparent px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#878e6a] text-gray-900"
            autocomplete="new-password"
          />
        </div>
        <!-- Confirmation bouton -->
        <button
          @click="handleSubmit"
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
        <!-- <button
          type="button"
          class="w-full flex items-center justify-center border border-[#878e6a] rounded-md py-2 bg-white text-[#484e4b] font-semibold hover:bg-[#f1f1eb] transition"
        >
          <NuxtImg src="google-logo.png" alt="Google" class="h-5 w-5 mr-2" />
          Inscrivez vous avec Google
        </button> !-->
        <!-- Lien connexion -->
        <div class="text-center text-xs mt-3">
          Déjà un compte ?
          <NuxtLink
            to="/login"
            class="text-[#7C8259] underline font-medium hover:text-[#727752]"
            >Connectez-vous</NuxtLink
          >
        </div>
      </form>
    </div>
  </div>
</template>
<script setup>
const email = ref();
const password = ref();
import { useToast } from "vue-toastification";
const toast = useToast();

async function handleSubmit(e) {
  e.preventDefault();
  console.log("Email:", email.value);
  console.log("Password:", password.value);
  await fetch("/api/auth/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email: email.value, password: password.value }),
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.message === "register successful") {
        toast.success("Inscription réussie !", { timeout: 2000 });
        useRouter().push("/login");
        navigateTo("/login");
      }
    })
    .catch((error) => {
      toast.error("Erreur lors de l'inscription.", { timeout: 2000 });
      console.error("Error:", error);
    });
}
</script>
