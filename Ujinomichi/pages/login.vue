<template>
  <div class="min-h-screen flex flex-col bg-[#f9f7f2]">
    <!-- Barre supérieure verte -->

    <div class="flex-1 flex flex-col justify-center items-center px-4">
      <!-- Logo -->
      <NuxtLink to="/" class="block mb-4">
        <NuxtImg
          src="flower.png"
          alt="Logo Ujinomichi"
          class="h-12 w-12 mx-auto"
        />
      </NuxtLink>
      <h1 class="text-2xl font-bold text-[#333] text-center mt-2 mb-2">
        Connexion à votre<br />compte
      </h1>
      <hr class="w-16 border-t-2 border-[#6f785c] mx-auto mb-4" />
      <p class="text-[#6f785c] text-center mb-6">Bon retour parmi nous !</p>

      <form
        @submit.prevent="login"
        class="w-full max-w-xs flex flex-col gap-4"
        autocomplete="off"
      >
        <!-- Email -->
        <div>
          <label class="block text-sm text-[#6f785c] mb-1" for="email"
            >Email</label
          >
          <input
            id="email"
            name="email"
            v-model="email"
            type="email"
            class="w-full rounded-md border border-[#bfc1b4] bg-transparent px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#6f785c] text-gray-900"
            autocomplete="email"
          />
        </div>
        <!-- Mot de passe -->
        <div>
          <label class="block text-sm text-[#6f785c] mb-1" for="password"
            >Mot de passe</label
          >
          <input
            id="password"
            name="password"
            v-model="password"
            type="password"
            class="w-full rounded-md border border-[#bfc1b4] bg-transparent px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#6f785c] text-gray-900"
            autocomplete="current-password"
          />
          <div
            id="lost_password"
            class="text-xs text-right text-[#6f785c] mt-1 cursor-pointer hover:underline"
          >
            Mot de passe oublié ?
          </div>
        </div>
        <!-- Bouton principal -->
        <button
          type="submit"
          class="w-full bg-[#6f785c] text-white font-semibold py-2 rounded-md mt-2 hover:bg-[#555b45] transition"
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
        <button
          type="button"
          class="w-full flex items-center justify-center border border-[#bfc1b4] rounded-md py-2 bg-white text-[#333] font-semibold hover:bg-[#f1f1eb] transition"
        >
          <NuxtImg src="google-logo.png" alt="Google" class="h-5 w-5 mr-2" />
          Connectez-vous avec Google
        </button>
        <!-- Lien inscription -->
        <div class="text-center text-xs mt-3">
          Pas de compte ?
          <NuxtLink
            to="/register"
            class="text-[#6f785c] underline font-medium hover:text-[#555b45]"
            >Créez-le ici</NuxtLink
          >
        </div>
      </form>
    </div>
  </div>
</template>
<script setup lang="ts">
const email = ref("");
const password = ref("");
const success = ref(false);

async function login() {
  console.log(email.value);
  const res = await fetch("/api/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      email: email.value,
      password: password.value,
    }),
  });

  if (res.ok) {
    success.value = true;
    email.value = "";
    password.value = "";
  }
}
</script>
