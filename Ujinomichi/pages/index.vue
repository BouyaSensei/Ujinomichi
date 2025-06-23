<template>
  <div class="mainContainer">
    <section id="introSection">
      <article class="relative w-full h-[800px] overflow-hidden">
        <!-- Image de fond -->
        <NuxtImg
          src="/home.jpg"
          alt="Logo"
          class="w-full h-full object-cover"
          fill
          style="z-index: 0"
        />
        <!-- Overlay sombre -->
        <div class="absolute inset-0 bg-black opacity-40 z-10"></div>
        <!-- Contenu centré superposé -->
        <div
          class="absolute inset-0 flex flex-col items-center justify-center text-center z-20"
        >
          <h2
            class="text-white mx-2 text-3xl md:text-4xl font-bold mb-8 tracking-widest drop-shadow-lg uppercase"
          >
            l'art de l'agriculture<br />japonaise
          </h2>
          <div class="flex gap-3">
            <NuxtLink to="/products" class="no-underline">
              <button
                class="px-8 py-3 rounded-full bg-[#E6DBD0] text-[#4E5548] font-bold text-base hover:bg-[#EFE4D9] transition"
              >
                Nos Produits
              </button>
            </NuxtLink>
            <NuxtLink to="#partenaires" class="no-underline">
              <button
                class="px-8 py-3 rounded-full bg-[#7C8259] text-white font-bold text-base hover:bg-[#727752] transition"
              >
                Nos Partenaires
              </button>
            </NuxtLink>
          </div>
        </div>
      </article>
    </section>
    <section id="promotionSection">
      <div class="overflow-hidden bg-[#4E5548] h-12 flex items-center">
        <div class="marquee flex whitespace-nowrap">
          <span class="font-bold text-[#7C8259] uppercase tracking-widest">
            des produits issus directement de l'agriculture japonaise
          </span>
          <NuxtImg src="/flower.png" class="inline h-7 w-7 mx-4 align-middle" />
          <span class="font-bold text-[#7C8259] uppercase tracking-widest">
            des produits issus directement de l'agriculture japonaise
          </span>
          <NuxtImg src="/flower.png" class="inline h-7 w-7 mx-4 align-middle" />
          <span class="font-bold text-[#7C8259] uppercase tracking-widest">
            des produits issus directement de l'agriculture japonaise
          </span>
          <NuxtImg src="/flower.png" class="inline h-7 w-7 mx-4 align-middle" />
          <!-- Répète autant que nécessaire pour la fluidité -->
          <span class="font-bold text-[#7C8259] uppercase tracking-widest">
            des produits issus directement de l'agriculture japonaise
          </span>
          <NuxtImg src="/flower.png" class="inline h-7 w-7 mx-4 align-middle" />
          <span class="font-bold text-[#7C8259] uppercase tracking-widest">
            des produits issus directement de l'agriculture japonaise
          </span>
          <NuxtImg src="/flower.png" class="inline h-7 w-7 mx-4 align-middle" />
          <span class="font-bold text-[#7C8259] uppercase tracking-widest">
            des produits issus directement de l'agriculture japonaise
          </span>
          <NuxtImg src="/flower.png" class="inline h-7 w-7 mx-4 align-middle" />
          <span class="font-bold text-[#7C8259] uppercase tracking-widest">
            des produits issus directement de l'agriculture japonaise
          </span>
          <NuxtImg src="/flower.png" class="inline h-7 w-7 mx-4 align-middle" />
          <span class="font-bold text-[#7C8259] uppercase tracking-widest">
            des produits issus directement de l'agriculture japonaise
          </span>
          <NuxtImg src="/flower.png" class="inline h-7 w-7 mx-4 align-middle" />
          <span class="font-bold text-[#7C8259] uppercase tracking-widest">
            des produits issus directement de l'agriculture japonaise
          </span>
          <NuxtImg src="/flower.png" class="inline h-7 w-7 mx-4 align-middle" />
          <span class="font-bold text-[#7C8259] uppercase tracking-widest">
            des produits issus directement de l'agriculture japonaise
          </span>
          <NuxtImg src="/flower.png" class="inline h-7 w-7 mx-4 align-middle" />
        </div>
      </div>

      <div class="overflow-hidden bg-[#4E5548] h-12 flex items-center">
        <div class="marquee flex whitespace-nowrap">
          <span class="font-bold text-[#7C8259] uppercase tracking-widest">
            des produits issus directement de l'agriculture japonaise
          </span>
          <NuxtImg src="/flower.png" class="inline h-7 w-7 mx-4 align-middle" />
          <span class="font-bold text-[#7C8259] uppercase tracking-widest">
            des produits issus directement de l'agriculture japonaise
          </span>
          <NuxtImg src="/flower.png" class="inline h-7 w-7 mx-4 align-middle" />
          <span class="font-bold text-[#7C8259] uppercase tracking-widest">
            des produits issus directement de l'agriculture japonaise
          </span>
          <NuxtImg src="/flower.png" class="inline h-7 w-7 mx-4 align-middle" />
          <!-- Répète autant que nécessaire pour la fluidité -->
          <span class="font-bold text-[#7C8259] uppercase tracking-widest">
            des produits issus directement de l'agriculture japonaise
          </span>
          <NuxtImg src="/flower.png" class="inline h-7 w-7 mx-4 align-middle" />
          <span class="font-bold text-[#7C8259] uppercase tracking-widest">
            des produits issus directement de l'agriculture japonaise
          </span>
          <NuxtImg src="/flower.png" class="inline h-7 w-7 mx-4 align-middle" />
          <span class="font-bold text-[#7C8259] uppercase tracking-widest">
            des produits issus directement de l'agriculture japonaise
          </span>
          <NuxtImg src="/flower.png" class="inline h-7 w-7 mx-4 align-middle" />
          <span class="font-bold text-[#7C8259] uppercase tracking-widest">
            des produits issus directement de l'agriculture japonaise
          </span>
          <NuxtImg src="/flower.png" class="inline h-7 w-7 mx-4 align-middle" />
          <span class="font-bold text-[#7C8259] uppercase tracking-widest">
            des produits issus directement de l'agriculture japonaise
          </span>
          <NuxtImg src="/flower.png" class="inline h-7 w-7 mx-4 align-middle" />
          <span class="font-bold text-[#7C8259] uppercase tracking-widest">
            des produits issus directement de l'agriculture japonaise
          </span>
          <NuxtImg src="/flower.png" class="inline h-7 w-7 mx-4 align-middle" />
          <span class="font-bold text-[#7C8259] uppercase tracking-widest">
            des produits issus directement de l'agriculture japonaise
          </span>
          <NuxtImg src="/flower.png" class="inline h-7 w-7 mx-4 align-middle" />
        </div>
      </div>
    </section>
    <!-- Section produit du moment-->
    <section
      id="SelectionSection"
      class="w-full flex flex-col items-center py-8"
    >
      <h2
        class="text-3xl font-bold mb-8 mx-4 text-[#4E5548] tracking-widest text-center"
      >
        NOS PRODUITS DU MOMENT
      </h2>
      <div
        class="w-full flex items-center flex-col justify-center md:flex md:flex-row gap-8"
      >
        <!-- Card produit -->
        <div
          v-for="produit in produits"
          :key="produit.id"
          class="group w-full max-w-[260px] mx-4 flex flex-col items-center text-center bg-white rounded-2xl shadow-md overflow-hidden transition-transform duration-300 hover:-translate-y-1"
        >
          <!-- Image du produit -->
          <div class="relative w-full h-40">
            <NuxtImg
              :src="produit.imageUrl"
              :alt="produit.name"
              class="w-full h-full object-cover"
            />
          </div>

          <!-- Icône flottante entre image et texte -->
          <div class="relative -mt-6 z-10">
            <div
              class="backdrop-blur-sm bg-white/70 p-2 rounded-full shadow-md"
            >
              <img
                :src="getIconByType(produit.type)"
                :alt="produit.type"
                class="w-6 h-6"
              />
            </div>
          </div>

          <!-- Texte descriptif -->
          <div class="p-4 pt-2">
            <h3 class="text-base font-bold text-[#4E5548] mb-1">
              {{ produit.name }}
            </h3>
            <p class="text-sm text-[#6a765a] mb-3">
              {{
                produit.description || "Une expérience authentique et raffinée."
              }}
            </p>
            <span class="block text-sm font-medium text-[#4a524a] mb-2"
              >{{ produit.price }} €</span
            >
            <NuxtLink
              :to="{ name: 'products-id', params: { id: produit.id } }"
              class="px-4 py-2 rounded-full bg-[#6a765a] text-white text-sm font-semibold hover:bg-[#5a644e] transition-colors duration-300"
            >
              Acheter</NuxtLink
            >
          </div>
        </div>
      </div>
    </section>
    <section id="ProduitsSection" class="px-4 py-10 w-full max-w-7xl mx-auto">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <!-- Coffrets de saison : grande carte à gauche -->
        <div
          class="md:col-span-2 relative rounded-xl overflow-hidden h-[290px] flex items-end"
        >
          <NuxtImg
            src="coffret_saison.jpg"
            alt="Coffrets de saison"
            class="absolute inset-0 w-full h-full object-cover"
          />
          <div class="absolute inset-0 bg-black/50"></div>
          <div class="relative z-10 p-6 text-white">
            <h3
              class="text-2xl font-extrabold mb-2 uppercase"
              style="letter-spacing: 0.05em"
            >
              Coffrets de saison
            </h3>
            <p class="text-sm lg:text-md leading-snug mb-2">
              Ces coffrets ont été soigneusement élaborés avec nos partenaires.
              Les boissons qu’ils contiennent sont exclusivement issues des
              récoltes de saison.
            </p>
          </div>
        </div>

        <!-- Coffrets thés : à droite, plus petite -->
        <div
          class="relative rounded-xl overflow-hidden h-[290px] flex items-end"
        >
          <NuxtImg
            src="coffret_the.jpg"
            alt="Coffrets thés"
            class="absolute inset-0 w-full h-full object-cover"
          />
          <div class="absolute inset-0 bg-black/45"></div>
          <div class="relative z-10 p-6 text-white">
            <h3
              class="text-2xl font-extrabold mb-2 uppercase"
              style="letter-spacing: 0.05em"
            >
              Coffrets thés
            </h3>
            <p class="text-sm lg:text-md leading-snug mb-2">
              Laissez-vous emporter par les arômes délicats des thés les plus
              raffinés de notre collection.
            </p>
          </div>
        </div>
      </div>

      <!-- Deuxième ligne : coffrets découvertes + alcools -->
      <div class="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
        <!-- Coffrets découvertes -->
        <div
          class="relative rounded-xl overflow-hidden h-[290px] flex items-end"
        >
          <NuxtImg
            src="coffret_decouverte.jpg"
            alt="Coffrets découvertes"
            class="absolute inset-0 w-full h-full object-cover"
          />
          <div class="absolute inset-0 bg-black/50"></div>
          <div class="relative z-10 p-6 text-white">
            <h3
              class="text-2xl font-extrabold mb-2 uppercase"
              style="letter-spacing: 0.05em"
            >
              Coffrets découvertes
            </h3>
            <p class="text-sm lg:text-md leading-snug mb-2">
              Aux côtés de nos partenaires producteurs, nous avons conçu ces
              coffrets uniques mettant à l’honneur nos boissons incontournables.
            </p>
          </div>
        </div>
        <!-- Coffrets alcools -->
        <div
          class="relative rounded-xl overflow-hidden h-[290px] flex items-end"
        >
          <NuxtImg
            src="coffret_alcool.jpg"
            alt="Coffrets alcools"
            class="absolute inset-0 w-full h-full object-cover"
          />
          <div class="absolute inset-0 bg-black/45"></div>
          <div class="relative z-10 p-6 text-white">
            <h3
              class="text-2xl font-extrabold mb-2 uppercase"
              style="letter-spacing: 0.05em"
            >
              Coffrets alcools
            </h3>
            <p class="text-sm lg:text-md mb-2 leading-snug">
              Partez à la découverte des saveurs authentiques des alcools locaux
              grâce à nos coffrets, spécialement conçus pour les amateurs de
              boissons d’exception.
            </p>
          </div>
        </div>
      </div>
    </section>
    <!-- Section : Qui sommes nous ? -->
    <section
      class="w-full bg-[#4E5548] my-6 overflow-hidden flex flex-col items-center md:h-165"
    >
      <div class="lg:w-full lg:max-w-300 relative">
        <!-- Bloc image + texte -->
        <div class="md:flex md:flew-row md:h-165 md:px-4 md:py-4">
          <!-- image -->
          <div class="flex-1 min-h-[270px] relative">
            <NuxtImg
              src="nous.jpg"
              alt="Un verre de matcha sur une table en bois"
              class="absolute inset-0 w-full h-full object-cover md:rounded-xl"
            />
          </div>
          <!-- texte -->
          <div
            class="flex-1 px-10 my-8 mx-auto md:my-0 md:top-0 md:h-108 flex flex-col justify-center"
          >
            <h2 class="text-3xl font-bold mb-6 text-white tracking-widest">
              QUI SOMMES-NOUS ?
            </h2>
            <div class="text-left text-[#faf8f4] space-y-5">
              <p class="font-bold text-md lg:text-lg">
                Une approche transparente et responsable
              </p>
              <p class="text-sm lg:text-md">
                Cette plateforme est née d’une collaboration directe avec
                l'agriculture japonaise et ses associations agricoles
                régionales, dans le but de vous offrir des boissons
                authentiques.
              </p>
              <p class="text-sm lg:text-md">
                Nous avons souhaité créer un point d’entrée unique pour les
                consommateurs français, facilitant l’accès à des produits
                japonais de qualité et en soutenant les brasseurs et
                cultivateurs locaux.
              </p>
              <p class="text-sm lg:text-md">
                En choisissant nos produits, vous soutenez directement ces
                producteurs japonais, vous contribuez à soutenir une agriculture
                responsable et locale, tout en découvrant le meilleur de la
                production japonaise.
              </p>
            </div>
          </div>
        </div>
        <!-- Bloc partenaire -->
        <div
          class="bg-[#ffffff] mb-4 w-full md:w-full md:max-w-200 md:absolute md:right-0 md:bottom-0 md:rounded-lg md:outline-22 outline-[#4E5548]"
        >
          <h2
            id="partenaires"
            class="text-3xl font-bold text-[#393E38] tracking-widest text-center py-6"
          >
            NOS PARTENAIRES
          </h2>
          <div class="grid grid-cols-1 md:grid-cols-3">
            <!-- Carte Zen-Noh -->
            <div
              class="flex items-center justify-center h-24 hover:shadow-xl transition-all duration-200 hover:-translate-y-2"
            >
              <NuxtImg
                src="zennoh.png"
                alt="Zen-Noh"
                class="h-8 w-auto object-contain"
              />
            </div>
            <!-- Carte Japanese Sake -->
            <div
              class="flex items-center justify-center h-24 hover:shadow-xl transition-all duration-200 hover:-translate-y-2"
            >
              <NuxtImg
                src="japanese-sake.png"
                alt="Japanese Sake"
                class="h-12 w-auto object-contain"
              />
            </div>
            <!-- Carte JOAA -->
            <div
              class="flex items-center justify-center h-24 hover:shadow-xl transition-all duration-200 hover:-translate-y-2"
            >
              <NuxtImg
                src="joaa.png"
                alt="JOAA"
                class="h-12 w-auto object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Section Avantages "De la ferme à votre verre !" -->
    <section
      id="AvantagesSection"
      class="grid grid-cols-1 place-items-center text-center mx-auto my-16"
    >
      <div class="w-full md:max-w-256">
        <!-- Titre + texte -->
        <div class="mx-6 md:mx-2">
          <h2 class="text-3xl font-bold text-[#393E38] mb-6 md:text-left">
            DE LA FERME À VOTRE VERRE !
          </h2>
          <p class="mb-4 md:text-left">
            Nos produits possèdent une qualité supérieur dû à la qualité de
            leurs conception, ils contiennent zéro additifs ni conservateurs
            chimiques. De plus ils garantissent la croissance de la ruralité et
            de l’agriculture japonaise.
          </p>
        </div>
        <!-- Les Avantages -->
        <div
          class="grid grid-cols-1 gap-2 place-items-center text-white md:grid-cols-3"
        >
          <!-- Avantage "respect de l'environnement" -->
          <div
            class="flex flex-col justify-center items-center p-9 w-full max-w-156 bg-[#393E38] md:h-128 md:rounded-lg md:m"
          >
            <svg
              class="size-16 m-4"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <circle
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="#ffffff"
                  stroke-width="1.5"
                ></circle>
                <path
                  d="M6 4.71053C6.78024 5.42105 8.38755 7.36316 8.57481 9.44737C8.74984 11.3955 10.0357 12.9786 12 13C12.7549 13.0082 13.5183 
                12.4629 13.5164 11.708C13.5158 11.4745 13.4773 11.2358 13.417 11.0163C13.3331 10.7108 13.3257 10.3595 13.5 10C14.1099 8.74254 
                15.3094 8.40477 16.2599 7.72186C16.6814 7.41898 17.0659 7.09947 17.2355 6.84211C17.7037 6.13158 18.1718 4.71053 17.9377 4"
                  stroke="#ffffff"
                  stroke-width="1.5"
                ></path>
                <path
                  d="M22 13C21.6706 13.931 21.4375 16.375 17.7182 16.4138C17.7182 16.4138 14.4246 16.4138 13.4365 18.2759C12.646 19.7655 13.1071 
                21.3793 13.4365 22"
                  stroke="#ffffff"
                  stroke-width="1.5"
                ></path>
              </g>
            </svg>
            <h3 class="md:text-xl">RESPECT DE L’ENVIRONNEMENT</h3>
          </div>
          <!-- Avantage "soutien à l'économie locale" -->
          <div
            class="flex flex-col justify-center items-center p-9 w-full max-w-156 bg-[#393E38] md:h-128 md:rounded-lg"
          >
            <svg
              class="size-16 m-4"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  d="M10.1497 8.80219L9.70794 9.40825L10.1497 8.80219ZM12 3.10615L11.4925 3.65833C11.7794 3.9221 12.2206 3.9221 12.5075 
                3.65833L12 3.10615ZM13.8503 8.8022L14.2921 9.40826L13.8503 8.8022ZM12 9.67598L12 10.426H12L12 9.67598ZM10.5915 8.19612C9.90132 
                7.69298 9.16512 7.08112 8.60883 6.43627C8.03452 5.77053 7.75 5.18233 7.75 4.71476H6.25C6.25 5.73229 6.82845 6.66885 7.47305 
                7.41607C8.13569 8.18419 8.97435 8.87349 9.70794 9.40825L10.5915 8.19612ZM7.75 4.71476C7.75 3.65612 8.27002 3.05231 8.8955 
                2.84182C9.54754 2.62238 10.5199 2.76435 11.4925 3.65833L12.5075 2.55398C11.2302 1.37988 9.70254 0.987559 8.41707 1.42016C7.10502 
                1.8617 6.25 3.09623 6.25 4.71476H7.75ZM14.2921 9.40826C15.0257 8.8735 15.8643 8.18421 16.527 7.41608C17.1716 6.66886 17.75 5.73229 
                17.75 4.71475H16.25C16.25 5.18234 15.9655 5.77055 15.3912 6.43629C14.8349 7.08113 14.0987 7.69299 13.4085 8.19613L14.2921 9.40826ZM17.75 
                4.71475C17.75 3.09622 16.895 1.8617 15.5829 1.42016C14.2975 0.987559 12.7698 1.37988 11.4925 2.55398L12.5075 3.65833C13.4801 2.76435 14.4525 
                2.62238 15.1045 2.84181C15.73 3.0523 16.25 3.65612 16.25 4.71475H17.75ZM9.70794 9.40825C10.463 9.95869 11.0618 10.426 12 10.426L12 
                8.92598C11.635 8.92598 11.4347 8.81074 10.5915 8.19612L9.70794 9.40825ZM13.4085 8.19613C12.5653 8.81074 12.365 8.92598 12 8.92598L12 
                10.426C12.9382 10.426 13.537 9.9587 14.2921 9.40826L13.4085 8.19613Z"
                  fill="#ffffff"
                ></path>
                <path
                  d="M5 20.3884H7.25993C8.27079 20.3884 9.29253 20.4937 10.2763 20.6964C12.0166 21.0549 13.8488 21.0983 15.6069 20.8138C16.4738 20.6734 
                17.326 20.4589 18.0975 20.0865C18.7939 19.7504 19.6469 19.2766 20.2199 18.7459C20.7921 18.216 21.388 17.3487 21.8109 16.6707C22.1736 
                16.0894 21.9982 15.3762 21.4245 14.943C20.7873 14.4619 19.8417 14.462 19.2046 14.9433L17.3974 16.3084C16.697 16.8375 15.932 17.3245 
                15.0206 17.4699C14.911 17.4874 14.7962 17.5033 14.6764 17.5172M14.6764 17.5172C14.6403 17.5214 14.6038 17.5254 14.5668 17.5292M14.6764 
                17.5172C14.8222 17.486 14.9669 17.396 15.1028 17.2775C15.746 16.7161 15.7866 15.77 15.2285 15.1431C15.0991 14.9977 14.9475 14.8764 14.7791 
                14.7759C11.9817 13.1074 7.62942 14.3782 5 16.2429M14.6764 17.5172C14.6399 17.525 14.6033 17.5292 14.5668 17.5292M14.5668 17.5292C14.0434 
                17.5829 13.4312 17.5968 12.7518 17.5326"
                  stroke="#ffffff"
                  stroke-width="1.5"
                  stroke-linecap="round"
                ></path>
                <rect
                  x="2"
                  y="14"
                  width="3"
                  height="8"
                  rx="1.5"
                  stroke="#ffffff"
                  stroke-width="1.5"
                ></rect>
              </g>
            </svg>
            <h3 class="md:text-xl">SOUTIEN À L’ÉCONOMIE LOCALE</h3>
          </div>
          <!-- Avantage "Zéro produits chimiques" -->
          <div
            class="flex flex-col justify-center items-center p-9 w-full max-w-156 bg-[#393E38] md:h-128 md:rounded-lg"
          >
            <svg
              class="size-16 m-4"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M17.3859 2.64323C17.7411 2.43012 17.8562 1.96943 17.6431 1.61424C17.43 1.25906 16.9693 1.14388 16.6141 1.35699L14.2687 
                2.76426C13.582 2.43471 12.8126 2.25011 12 2.25011C11.1874 2.25011 10.418 2.43471 9.73131 2.76426L7.38587 1.35699C7.03069 
                1.14388 6.56999 1.25906 6.35688 1.61424C6.14377 1.96943 6.25894 2.43012 6.61413 2.64323L8.37676 3.70081C7.37449 4.65692 
                6.75 6.00559 6.75 7.50011V7.79077C6.49339 7.92641 6.25088 8.08518 6.02526 8.2643C5.95652 8.19683 5.87356 8.14157 5.77854 
                8.10356L3.77854 7.30356C3.39396 7.14973 2.95748 7.33679 2.80364 7.72137C2.64981 8.10596 2.83687 8.54244 3.22146 8.69628L4.99257 
                9.40472C4.52263 10.1351 4.25 11.0045 4.25 11.9376V13.2501H2C1.58579 13.2501 1.25 13.5859 1.25 14.0001C1.25 14.4143 1.58579 
                14.7501 2 14.7501H4.25V15.0001C4.25 16.2791 4.55983 17.4858 5.10854 18.5491L3.22146 19.304C2.83687 19.4578 2.64981 19.8943 
                2.80364 20.2789C2.95748 20.6634 3.39396 20.8505 3.77854 20.6967L5.77854 19.8967C5.83233 19.8752 5.88225 19.8481 5.92792 19.8164C7.34764 
                21.6039 9.53996 22.7501 12 22.7501C14.46 22.7501 16.6524 21.6039 18.0721 19.8164C18.1177 19.8481 18.1677 19.8752 18.2215 19.8967L20.2215 
                20.6967C20.606 20.8505 21.0425 20.6634 21.1964 20.2789C21.3502 19.8943 21.1631 19.4578 20.7785 19.304L18.8915 18.5491C19.4402 
                17.4858 19.75 16.2791 19.75 15.0001V14.7501H22C22.4142 14.7501 22.75 14.4143 22.75 14.0001C22.75 13.5859 22.4142 13.2501 22 
                13.2501H19.75V11.9376C19.75 11.0045 19.4774 10.1351 19.0074 9.40472L20.7785 8.69628C21.1631 8.54244 21.3502 8.10596 21.1964 
                7.72137C21.0425 7.33679 20.606 7.14973 20.2215 7.30356L18.2215 8.10356C18.1264 8.14157 18.0435 8.19683 17.9747 8.2643C17.7491 
                8.08518 17.5066 7.92641 17.25 7.79077V7.50011C17.25 6.00559 16.6255 4.65692 15.6232 3.70081L17.3859 2.64323ZM5.75 15.0001V11.9376C5.75 
                10.1772 7.17709 8.75011 8.9375 8.75011H15.0625C16.8229 8.75011 18.25 10.1772 18.25 11.9376V15.0001C18.25 18.1981 15.8482 20.8351 12.75 
                21.2056V15.0001C12.75 14.5859 12.4142 14.2501 12 14.2501C11.5858 14.2501 11.25 14.5859 11.25 15.0001V21.2056C8.15183 20.8351 5.75 18.1981 
                5.75 15.0001ZM12 3.75011C14.0037 3.75011 15.6404 5.32165 15.7447 7.2994C15.522 7.26693 15.2942 7.25011 15.0625 7.25011H8.9375C8.70578 
                7.25011 8.47799 7.26693 8.25528 7.2994C8.35958 5.32165 9.99627 3.75011 12 3.75011Z"
                  fill="#ffffff"
                ></path>
              </g>
            </svg>
            <h3 class="md:text-xl">ZÉRO PRODUITS CHIMIQUES</h3>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script setup lang="ts">
//import verifyToken from "@/middlewares/verifyToken";

const authStore = useAuthStore();

const produits = ref([]);
async function fetchProduits() {
  const res = await fetch("/api/getLastProduct");
  produits.value = await res.json();
}

function getIconByType(type: string) {
  switch (type?.toLowerCase()) {
    case "thé":
      return "tea.svg";
    case "découverte":
      return "discovery.svg";
    case "alcool":
      return "alcool.svg";
    default:
      return "season.svg";
  }
}

onMounted(fetchProduits);
</script>
<style></style>
