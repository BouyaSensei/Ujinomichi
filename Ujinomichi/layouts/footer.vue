<template>
  <div class="footerContainer">
    <footer class="bg-[#E6DBD0] pt-10 pb-2 w-full">
      <!-- Bandeau d’avantages -->
      <div
        class="flex flex-col md:flex-row justify-center items-center gap-10 pb-12"
      >
        <!-- Suivi livraison -->
        <div class="flex flex-col items-center w-64">
          <NuxtImg
            src="livraison.png"
            alt="Livraison"
            class="h-16 w-auto mb-3"
          />
          <span class="text-center text-[#4E5548] font-bold text-lg"
            >SUIVI DE LIVRAISON<br />DISPONIBLE</span
          >
        </div>
        <!-- Emballages durables -->
        <div class="flex flex-col items-center w-64">
          <NuxtImg
            src="recyclage.png"
            alt="Emballage durable"
            class="h-16 w-auto mb-3"
          />
          <span class="text-center text-[#4E5548] font-bold text-lg"
            >EMBALLAGES<br />DURABLES</span
          >
        </div>
        <!-- Paiement sécurisé -->
        <div class="flex flex-col items-center w-64">
          <NuxtImg
            src="paiement-securise.png"
            alt="Paiement sécurisé"
            class="h-16 w-auto mb-3"
          />
          <span class="text-center text-[#4E5548] font-bold text-lg"
            >PAIEMENT SÉCURISÉ<br />ET RAPIDE</span
          >
        </div>
      </div>

      <!-- Bloc principal -->
      <div class="max-w-6xl flex flex-col gap-6 justify-center mx-auto">
        <!-- Newsletter -->
        <div
          class="flex h-96 bg-[#4E5548] rounded-2xl items-center justify-center mx-6"
        >
          <form class="w-full max-w-4xl px-7 py-8 flex flex-col gap-5">
            <h2
              class="text-center text-2xl font-bold text-[#faf8f4] mb-2 tracking-widest md:text-3xl"
            >
              NE MANQUEZ PAS NOS NOUVEAUX<br />ARRIVAGES ET PROMOTIONS
            </h2>
            <input
              type="email"
              placeholder="Adresse email"
              class="rounded-xl w-full px-4 py-3 bg-white text-[#393E38] placeholder-[#bdbdbd] font-semibold focus:outline-none"
            />
            <button
              type="submit"
              class="rounded-xl w-full px-4 py-3 bg-[#E6DBD0] text-[#4E5548] font-bold text-lg transition-colors hover:bg-[#cac2b4]"
            >
              JE M’INSCRIS !
            </button>
            <span class="block text-xs text-[#bdbdbd] text-center"
              >En confirmant, vous approuvez notre politique de
              confidentialité.</span
            >
          </form>
        </div>
        <!-- Colonne Infos -->
        <div
          class="flex-1 flex pt-6 md:py-6 flex-col items-center text-center justify-center gap-10 md:flex-row"
        >
          <!-- Compagnie -->
          <div class="w-48 md:h-44">
            <h4 class="font-bold text-[#4E5548] mb-2">COMPAGNIE</h4>
            <p class="text-[#4E5548] text-base mb-1">
              Uji no Michi<br />
              12 Rue de la Tradition,<br />
              75001 Paris, France
            </p>
            <a
              href="mailto:contact@ujinomichi.fr"
              class="text-[#4E5548] underline"
              >contact@ujinomichi.fr</a
            >
          </div>
          <!-- Legal -->
          <div class="w-48 h-44">
            <h4 class="font-bold text-[#4E5548] mb-2">LEGAL</h4>
            <ul class="text-[#4E5548] space-y-1">
              <li><a href="#" class="underline">Mentions Legales</a></li>
              <li>
                <a href="#" class="underline">Politique de confidentialité</a>
              </li>
              <li>
                <a href="#" class="underline">Politique de remboursement</a>
              </li>
            </ul>
          </div>
          <!-- Paiement -->
          <div class="w-48 pb-18 md:h-44">
            <h4 class="font-bold text-[#4E5548] mb-2">PAIEMENT</h4>
            <div class="flex items-center justify-center gap-2">
              <NuxtImg src="paypal.png" alt="PayPal" class="h-8 w-auto" />
              <NuxtImg
                src="mastercard.png"
                alt="Mastercard"
                class="h-8 w-auto"
              />
              <NuxtImg src="visa.png" alt="Visa" class="h-8 w-auto" />
            </div>
          </div>
        </div>
      </div>
      <!-- Bas de footer -->
      <div class="text-center text-[#4E5548] text-sm mt-3">
        &copy; 2025 Uji no Michi. Tous droits réservés.
      </div>
    </footer>
  </div>
</template>
