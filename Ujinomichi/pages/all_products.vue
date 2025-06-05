<template>
  <div class="bg-[#f8f6ee] min-h-screen flex flex-col">
    <!-- Top bar -->
    <div
      class="bg-[#989467] w-full py-1 flex justify-center text-xs text-white font-semibold"
    >
      contact@ujinomichi.fr
    </div>

    <!-- Header -->
    <header class="flex items-center justify-between bg-[#39382b] py-3 px-4">
      <span class="text-white font-bold text-xl tracking-widest"
        >UJINOMICHI</span
      >
      <button>
        <svg width="32" height="32" fill="none" viewBox="0 0 24 24">
          <path stroke="#fff" stroke-width="2" d="M4 7h16M4 12h16M4 17h16" />
        </svg>
      </button>
    </header>

    <!-- Breadcrumb -->
    <nav class="flex items-center text-xs text-gray-600 px-4 mt-2">
      <span class="mr-1">&lt;</span>
      <span
        >Accueil &gt; Produits &gt; This &gt;
        <span class="font-semibold text-black">Produit</span></span
      >
    </nav>

    <!-- Produit -->
    <main class="px-4 flex-1">
      <div class="mt-4 rounded-xl overflow-hidden">
        <NuxtImg
          src="/img1.png"
          alt="Produit"
          class="w-full h-auto object-cover"
        />
      </div>
      <h1 class="mt-4 text-2xl font-extrabold tracking-widest text-[#39382b]">
        TITRE PRODUIT
      </h1>
      <p class="mt-2 text-[#39382b] text-sm">
        Description produit<br />
        Aqgfdjhzhazeiuezheghdzi, luziedhuzu zzfzefzefzeziufzueihujn
        uozefluihuzefuhiejhejehfe
      </p>
      <!-- Stock/avis/quantité -->
      <div class="flex items-center mt-3 gap-3">
        <span class="text-xs text-[#989467] font-bold">OOS</span>
        <div class="flex items-center text-gray-400 text-sm">
          <span>☆☆☆☆☆</span>
          <span class="ml-1 text-xs">0 Avis</span>
        </div>
      </div>
      <!-- Bouton quantité -->
      <div class="flex items-center mt-3 gap-2">
        <button class="bg-[#39382b] text-white px-2 py-1 rounded-full">
          -
        </button>
        <span class="text-[#39382b] font-bold">1</span>
        <button class="bg-[#39382b] text-white px-2 py-1 rounded-full">
          +
        </button>
        <button
          class="ml-2 flex items-center gap-1 px-3 py-1 bg-[#989467] text-white rounded-md"
        >
          <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
            <path stroke="#fff" stroke-width="2" d="M6 6h15l-1.5 9h-13z" />
            <circle cx="9" cy="21" r="1" fill="#fff" />
            <circle cx="18" cy="21" r="1" fill="#fff" />
          </svg>
          Ajouter
        </button>
      </div>

      <!-- Produits similaires -->
      <h2 class="mt-8 text-2xl font-extrabold tracking-widest text-[#39382b]">
        PRODUITS SIMILAIRES
      </h2>
      <div class="mt-4 flex flex-col gap-6">
        <!-- Produit similaire 1 -->
        <div class="rounded-xl overflow-hidden relative">
          <NuxtImg
            src="/img1.png"
            alt="Produit similaire"
            class="w-full h-auto object-cover"
          />
          <button
            class="absolute bottom-3 left-1/2 -translate-x-1/2 bg-[#39382b] text-white px-6 py-2 rounded-md font-bold text-sm shadow"
          >
            DÉCOUVRIR
          </button>
        </div>
        <!-- Produit similaire 2 -->
        <div class="rounded-xl overflow-hidden relative">
          <NuxtImg
            src="/img2.png"
            alt="Produit similaire"
            class="w-full h-auto object-cover"
          />
          <button
            class="absolute bottom-3 left-1/2 -translate-x-1/2 bg-[#39382b] text-white px-6 py-2 rounded-md font-bold text-sm shadow"
          >
            DÉCOUVRIR
          </button>
        </div>
      </div>
    </main>

    <!-- Newsletter -->
    <section class="bg-[#39382b] text-white py-8 px-4 mt-8 rounded-t-3xl">
      <h3 class="font-bold text-center text-lg tracking-widest mb-3">
        NE MANQUEZ PAS NOS NOUVEAUX ARRIVAGES ET PROMOTIONS
      </h3>
      <form class="flex flex-col gap-3 items-center">
        <input
          type="email"
          placeholder="Adresse email"
          class="rounded-md px-4 py-2 w-full max-w-xs text-[#39382b] outline-none"
        />
        <button
          class="bg-[#989467] px-6 py-2 rounded-md font-bold w-full max-w-xs text-white"
        >
          JE M'INSCRIS !
        </button>
      </form>
      <p class="mt-2 text-xs text-center text-gray-200">
        En continuant, vous acceptez notre politique de confidentialité.
      </p>
    </section>

    <!-- Avantages -->
    <section class="bg-[#f8f6ee] px-4 py-6 flex flex-col gap-3">
      <div class="flex items-center bg-[#e3e1d2] p-3 rounded-xl gap-3 shadow">
        <span class="bg-[#989467] p-2 rounded-md">
          <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path
              stroke="#39382b"
              stroke-width="2"
              d="M7 17v-6a5 5 0 0110 0v6"
            />
            <rect width="20" height="4" x="2" y="17" fill="#39382b" />
          </svg>
        </span>
        <span class="font-semibold text-[#39382b]"
          >SUIVI DE LIVRAISON DISPONIBLE</span
        >
      </div>
      <div class="flex items-center bg-[#e3e1d2] p-3 rounded-xl gap-3 shadow">
        <span class="bg-[#989467] p-2 rounded-md">
          <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path
              stroke="#39382b"
              stroke-width="2"
              d="M12 4l-6 6h4v6h4v-6h4z"
            />
          </svg>
        </span>
        <span class="font-semibold text-[#39382b]">EMBALLAGES DURABLES</span>
      </div>
      <div class="flex items-center bg-[#e3e1d2] p-3 rounded-xl gap-3 shadow">
        <span class="bg-[#989467] p-2 rounded-md">
          <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="9" stroke="#39382b" stroke-width="2" />
            <path stroke="#39382b" stroke-width="2" d="M9 12l2 2 4-4" />
          </svg>
        </span>
        <span class="font-semibold text-[#39382b]"
          >PAIEMENT SÉCURISÉ ET RAPIDE</span
        >
      </div>
    </section>

    <!-- Footer -->
    <footer class="bg-[#e3e1d2] px-4 py-8 text-[#39382b] text-sm">
      <div class="flex flex-col md:flex-row md:justify-between gap-8">
        <div>
          <div class="font-bold uppercase tracking-widest mb-2">Compagnie</div>
          <div>
            Uji no Michi<br />12 Rue de la Tradition,<br />75001 Paris,
            France<br />contact@ujinomichi.fr
          </div>
        </div>
        <div>
          <div class="font-bold uppercase tracking-widest mb-2">Legal</div>
          <div>
            <a href="#" class="hover:underline block">Mentions Legales</a>
            <a href="#" class="hover:underline block"
              >Politique de confidentialité</a
            >
            <a href="#" class="hover:underline block"
              >Politique de remboursement</a
            >
          </div>
        </div>
        <div class="flex items-center gap-2 mt-4 md:mt-0">
          <img src="/paypal.png" alt="Google Pay" class="h-8" />

          <img src="/visa.png" alt="Visa" class="h-8" />
          <img src="/mastercard.png" alt="Mastercard" class="h-8" />
        </div>
      </div>
      <div class="mt-4 text-xs text-center text-[#989467]">
        © 2025 Uji no Michi. Tous droits réservés.
      </div>
    </footer>
  </div>
</template>
