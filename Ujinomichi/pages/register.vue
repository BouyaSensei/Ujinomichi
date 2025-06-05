<template>
  <div class="min-h-screen flex flex-col bg-white">
    <!-- Barre verte en haut -->
    <div class="h-8 w-full bg-[#878e6a] flex items-center justify-center">
      <span class="text-white text-sm font-semibold"
        >contact@ujinomichi.fr</span
      >
    </div>
    <!-- Nav/logo (à remplacer par ton vrai composant navbar si tu veux) -->
    <nav class="bg-[#484e4b] flex items-center justify-between px-4 py-4">
      <NuxtLink to="/">
        <h1
          class="text-white font-extrabold text-2xl tracking-widest font-[Caveat,Comic_Sans_MS,cursive]"
        >
          UJINOMICHI
        </h1>
      </NuxtLink>
      <button class="md:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-10 w-10 text-white"
          fill="none"
          stroke="currentColor"
          stroke-width="3"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>
    </nav>
    <!-- Contenu form -->
    <div class="flex-1 flex flex-col items-center px-4 pb-8">
      <NuxtImg src="/flower.png" alt="Fleur" class="h-10 w-10 mt-8 mb-5" />
      <h2 class="text-[#484e4b] text-2xl font-extrabold text-center mb-1">
        Création de votre<br />compte
      </h2>
      <hr class="w-24 border-t-2 border-[#484e4b] mx-auto mb-4" />
      <p class="text-[#484e4b] text-center mb-6">
        Profitez de -30% sur votre première commande.
      </p>

      <form class="w-full max-w-xs flex flex-col gap-4">
        <!-- Prénom -->
        <div>
          <label class="block text-xs text-[#878e6a] mb-1" for="prenom"
            >Prénom</label
          >
          <input
            id="prenom"
            type="text"
            class="w-full rounded-md border border-[#878e6a] bg-transparent px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#878e6a] text-gray-900"
            autocomplete="given-name"
          />
        </div>
        <!-- Email -->
        <div>
          <label class="block text-xs text-[#878e6a] mb-1" for="email"
            >Email</label
          >
          <input
            id="email"
            type="email"
            class="w-full rounded-md border border-[#878e6a] bg-transparent px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#878e6a] text-gray-900"
            autocomplete="email"
          />
        </div>
        <!-- Mot de passe -->
        <div>
          <label class="block text-xs text-[#878e6a] mb-1" for="password"
            >Mot de passe</label
          >
          <input
            id="password"
            type="password"
            class="w-full rounded-md border border-[#878e6a] bg-transparent px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#878e6a] text-gray-900"
            autocomplete="new-password"
          />
        </div>
        <!-- Confirmation bouton -->
        <button
          type="submit"
          class="w-full bg-[#484e4b] text-white font-semibold py-2 rounded-md mt-2 hover:bg-[#363e40] transition"
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
          class="w-full flex items-center justify-center border border-[#878e6a] rounded-md py-2 bg-white text-[#484e4b] font-semibold hover:bg-[#f1f1eb] transition"
        >
          <NuxtImg src="google-logo.png" alt="Google" class="h-5 w-5 mr-2" />
          Inscrivez vous avec Google
        </button>
        <!-- Lien connexion -->
        <div class="text-center text-xs mt-3">
          Déjà un compte ?
          <NuxtLink
            to="/login"
            class="text-[#484e4b] underline font-medium hover:text-[#363e40]"
            >Connectez-vous</NuxtLink
          >
        </div>
      </form>
    </div>
  </div>
</template>
