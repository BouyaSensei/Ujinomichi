<template>
  <div class="footerContainer">
    <footer class="bg-[#e8dfd5] pt-10 pb-2 w-full">
      <!-- Bandeau d’avantages -->
      <div
        class="flex flex-col md:flex-row justify-center items-center gap-10 mb-12"
      >
        <!-- Suivi livraison -->
        <div class="flex flex-col items-center">
          <NuxtImg
            src="livraison.png"
            alt="Livraison"
            class="h-16 w-auto mb-3"
          />
          <span class="text-center text-[#393E38] font-bold text-lg"
            >SUIVI DE LIVRAISON<br />DISPONIBLE</span
          >
        </div>
        <!-- Emballages durables -->
        <div class="flex flex-col items-center">
          <NuxtImg
            src="recyclage.png"
            alt="Emballage durable"
            class="h-16 w-auto mb-3"
          />
          <span class="text-center text-[#393E38] font-bold text-lg"
            >EMBALLAGES<br />DURABLES</span
          >
        </div>
        <!-- Paiement sécurisé -->
        <div class="flex flex-col items-center">
          <NuxtImg
            src="paiement-securise.png"
            alt="Paiement sécurisé"
            class="h-16 w-auto mb-3"
          />
          <span class="text-center text-[#393E38] font-bold text-lg"
            >PAIEMENT SÉCURISÉ<br />ET RAPIDE</span
          >
        </div>
      </div>

      <!-- Bloc principal -->
      <div
        class="max-w-6xl mx-auto flex flex-col md:flex-row gap-8 md:gap-0 justify-between px-4 md:px-0 mb-6"
      >
        <!-- Colonne Infos -->
        <div class="flex-1 flex flex-col md:flex-row text-center gap-10">
          <!-- Compagnie -->
          <div>
            <h4 class="font-bold text-[#393E38] mb-2">COMPAGNIE</h4>
            <p class="text-[#393E38] text-base mb-1">
              Uji no Michi<br />
              12 Rue de la Tradition,<br />
              75001 Paris, France
            </p>
            <a
              href="mailto:contact@ujinomichi.fr"
              class="text-[#393E38] underline"
              >contact@ujinomichi.fr</a
            >
          </div>
          <!-- Paiement -->
          <div>
            <h4 class="font-bold text-[#393E38] mb-2">PAIEMENT</h4>
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
          <!-- Legal -->
          <div>
            <h4 class="font-bold text-[#393E38] mb-2">LEGAL</h4>
            <ul class="text-[#393E38] space-y-1">
              <li><a href="#" class="underline">Mentions Legales</a></li>
              <li>
                <a href="#" class="underline">Politique de confidentialité</a>
              </li>
              <li>
                <a href="#" class="underline">Politique de remboursement</a>
              </li>
            </ul>
          </div>
        </div>
        <!-- Newsletter -->
        <div class="flex-1 flex items-center justify-center">
          <form
            class="w-full max-w-md bg-[#494d42] rounded-2xl px-7 py-8 flex flex-col gap-5"
          >
            <h3
              class="text-center text-xl font-extrabold text-[#faf8f4] mb-2 tracking-widest"
              style="font-family: 'Comic Sans MS', 'Caveat', cursive"
            >
              NE MANQUEZ PAS NOS NOUVEAUX<br />ARRIVAGES ET PROMOTIONS
            </h3>
            <input
              type="email"
              placeholder="Adresse email"
              class="rounded-xl w-full px-4 py-3 bg-white text-[#393E38] placeholder-[#bdbdbd] font-semibold focus:outline-none"
            />
            <button
              type="submit"
              class="rounded-xl w-full px-4 py-3 bg-[#e8dfd5] text-[#393E38] font-bold text-lg transition-colors hover:bg-[#cac2b4]"
            >
              JE M’INSCRIS !
            </button>
            <span class="block text-xs text-[#bdbdbd] text-center"
              >En confirmant, vous approuvez notre politique de
              confidentialité.</span
            >
          </form>
        </div>
      </div>

      <!-- Bas de footer -->
      <div class="text-center text-[#393E38] text-sm mt-3">
        &copy; 2025 Uji no Michi. Tous droits réservés.
      </div>
    </footer>
  </div>
</template>
