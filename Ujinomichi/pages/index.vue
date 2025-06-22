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
        <div class="absolute inset-0 bg-black opacity-50 z-10"></div>
        <!-- Contenu centré superposé -->
        <div
          class="absolute inset-0 flex flex-col items-center justify-center text-center z-20"
        >
          <h2
            class="text-white mx-2 text-3xl md:text-4xl lg:text-5xl font-bold mb-8 font-[Comic_Neue] tracking-widest drop-shadow-lg uppercase"
          >
            l'art de l'agriculture<br />japonaise
          </h2>
          <div class="flex gap-3">
            <NuxtLink to="/products" class="no-underline">
              <button
                class="px-8 py-3 rounded-full w-48 bg-[#E6DBD0] text-[#4E5548] font-bold text-base hover:bg-[#EFE4D9] transition"
              >
                Nos Produits
              </button>
            </NuxtLink>

            <button
              class="px-8 py-3 rounded-full bg-[#7C8259] text-white font-bold text-base hover:bg-[#727752] transition"
            >
              Nos Partenaires
            </button>
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

      <article class="h-256 md:h-128 lg:h-96 flex justify-center promotion">
        <ul
          class="grid md:grid-cols-2 lg:flex lg:flex-row justify-center items-center"
        >
          <li class="flex flex-col items-center justify-center size-64">
            <div
              class="relative size-32 flex items-center justify-center drop-shadow-lg"
            >
              <svg
                class="absolute inset-0 w-full h-full"
                width="150"
                height="150"
                viewBox="0 0 150 150"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="2"
                  y="2"
                  width="146"
                  height="146"
                  rx="73"
                  fill="#4E5548"
                  stroke="#4E5548"
                  stroke-width="4"
                />
              </svg>
              <NuxtImg
                src="wheat.png"
                alt="icon ingrédients locaux"
                class="size-16 object-contain z-10"
              />
            </div>
            <p
              class="mt-4 text-[#4E5548] text-xl font-bold text-center leading-tight uppercase"
            >
              ingrédients<br />locaux et bio
            </p>
          </li>
          <li class="flex flex-col items-center justify-center size-64">
            <div
              class="relative size-32 flex items-center justify-center drop-shadow-lg"
            >
              <svg
                class="absolute inset-0 w-full h-full"
                width="150"
                height="150"
                viewBox="0 0 150 150"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="2"
                  y="2"
                  width="146"
                  height="146"
                  rx="73"
                  fill="#4E5548"
                  stroke="#4E5548"
                  stroke-width="4"
                />
              </svg>
              <NuxtImg
                src="sun.png"
                alt="icon produits de saison"
                class="size-16 object-contain z-10"
              />
            </div>
            <p
              class="mt-4 text-[#4E5548] text-xl font-bold text-center leading-tight uppercase"
            >
              produits de<br />saison
            </p>
          </li>
          <li class="flex flex-col items-center justify-center size-64">
            <div
              class="relative size-32 flex items-center justify-center drop-shadow-lg"
            >
              <svg
                class="absolute inset-0 w-full h-full"
                width="150"
                height="150"
                viewBox="0 0 150 150"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="2"
                  y="2"
                  width="146"
                  height="146"
                  rx="73"
                  fill="#4E5548"
                  stroke="#4E5548"
                  stroke-width="4"
                />
              </svg>
              <NuxtImg
                src="trees_1.png"
                alt="icon biodiversité"
                class="size-16 object-contain z-10"
              />
            </div>
            <p
              class="mt-4 text-[#4E5548] text-xl font-bold text-center leading-tight uppercase"
            >
              respect de la<br />biodiversité
            </p>
          </li>
          <li class="flex flex-col items-center justify-center size-64">
            <div
              class="relative size-32 flex items-center justify-center drop-shadow-lg"
            >
              <svg
                class="absolute inset-0 w-full h-full"
                width="150"
                height="150"
                viewBox="0 0 150 150"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="2"
                  y="2"
                  width="146"
                  height="146"
                  rx="73"
                  fill="#4E5548"
                  stroke="#4E5548"
                  stroke-width="4"
                />
              </svg>
              <NuxtImg
                src="flask-conical-off.png"
                alt="icon sans additifs"
                class="size-16 object-contain z-10"
              />
            </div>
            <p
              class="mt-4 text-[#4E5548] text-xl font-bold text-center leading-tight uppercase"
            >
              sans additifs<br />ni conservateurs
            </p>
          </li>
        </ul>
      </article>
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
        class="text-2xl font-bold mb-8 text-[#4E5548] tracking-widest text-center"
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
            <button
              class="px-4 py-2 rounded-full bg-[#6a765a] text-white text-sm font-semibold hover:bg-[#5a644e] transition-colors duration-300"
            >
              Acheter
            </button>
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
            <p class="text-base font-medium leading-snug">
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
            <p class="text-base font-medium leading-snug">
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
              class="text-2xl font-extrabold uppercase"
              style="letter-spacing: 0.05em"
            >
              Coffrets découvertes
            </h3>
            <p class="text-base md:text-lg font-medium leading-snug mb-2">
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
            <p class="text-base md:text-lg font-medium leading-snug">
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
            <h2 class="text-2xl font-bold mb-6 text-white tracking-widest">
              QUI SOMMES-NOUS ?
            </h2>
            <div class="text-left text-[#faf8f4] space-y-5">
              <p class="font-bold text-md lg:text-lg">
                Une approche transparente et responsable
              </p>
              <p class="text-sm lg:text-md">
                Cette plateforme est née d’une collaboration directe avec des
                producteurs locaux japonais et des associations agricoles
                régionales, dans le but de vous offrir des boissons
                authentiques, directement issues de l’agriculture japonaise.
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
            class="text-2xl font-bold text-[#393E38] tracking-widest text-center py-6"
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
  </div>
</template>
<script setup lang="ts">
//import verifyToken from "@/middlewares/verifyToken";

const authStore = useAuthStore();

const produits = ref([]);
async function fetchProduits() {
  const res = await fetch("/api/getLastProduct");
  produits.value = await res.json();
  //console.log(produits.value);
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
