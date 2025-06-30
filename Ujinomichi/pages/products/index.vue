<template>
  <main class="bg-white">
    <!-- Fil d'Ariane -->
    <nav
      class="flex items-center justify-start text-[#4E5548] text-sm mt-6 mb-2 max-w-6xl mx-auto px-6 gap-2"
    >
      <NuxtLink to="/" class="hover:underline">Accueil</NuxtLink>
      <span>&gt;</span>
      <span class="text-[#4E5548] font-extrabold">Produits</span>
    </nav>

    <!-- Recherche & filtre prix -->
    <section class="max-w-6xl mx-auto px-4">
      <div class="flex flex-col md:flex-row md:items-center">
        <!-- Recherche -->
        <div class="flex-1 relative">
          <input
            v-model="searchTerm"
            type="text"
            placeholder="Recherche..."
            class="w-full border border-gray-300 rounded-full py-2 pl-4 pr-10 focus:outline-none"
          />

          <span class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
            <Icon name="lucide:search" size="20" />
          </span>
        </div>
        <!-- Prix -->
        <div
          class="flex flex-col items-center justify-center gap-2 min-w-[180px] my-4 ml-4"
        >
          <span class="font-semibold text-sm text-[#4E5548]">PRIX</span>
          <div class="flex items-center justify-center">
            <span class="text-xs">10$</span>
            <input
              type="range"
              min="10"
              max="150"
              class="w-32 mx-2 accent-[#4E5548]"
            />
            <span class="text-xs">150$</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Filtres catégories avec icônes -->
    <section class="max-w-6xl mx-auto px-4 mb-5 mt-3">
      <!-- Bouton réinitialiser -->
      <div class="flex justify-end mb-2" v-if="activeCategory">
        <button
          @click="activeCategory = null"
          class="text-xs text-[#4E5548] underline hover:text-[#7C8259] transition"
        >
          Réinitialiser les catégories
        </button>
      </div>

      <div class="grid grid-cols-2 sm:grid-cols-4 gap-2">
        <!-- THÉS -->
        <button
          @click="activeCategory = 'thé'"
          :class="[
            'flex items-center justify-center gap-2 py-2 rounded-md font-semibold shadow-sm transition-all duration-200',
            activeCategory === 'thé'
              ? 'outline-2 outline-[#4E5548] bg-[#E6DBD0] text-[#4E5548] shadow-md'
              : 'bg-[#E6DBD0] text-[#4E5548] hover:bg-[#EFE4D9] hover:-translate-y-1 hover:shadow-md',
          ]"
        >
          <NuxtImg
            src="/categorie/leaf.png"
            width="24"
            height="24"
            alt="Thés"
          />
          THÉS
        </button>

        <!-- DÉCOUVERTE -->
        <button
          @click="activeCategory = 'découverte'"
          :class="[
            'flex items-center justify-center gap-2 py-2 rounded-md font-semibold shadow-sm transition-all duration-200',
            activeCategory === 'découverte'
              ? 'outline-2 outline-[#4E5548] bg-[#E6DBD0] text-[#4E5548] shadow-md'
              : 'bg-[#E6DBD0] text-[#4E5548] hover:bg-[#EFE4D9] hover:-translate-y-1 hover:shadow-md',
          ]"
        >
          <NuxtImg
            src="/categorie/sparkles.png"
            width="24"
            height="24"
            alt="Découverte"
          />
          DÉCOUVERTE
        </button>

        <!-- ALCOOLS -->
        <button
          @click="activeCategory = 'alcool'"
          :class="[
            'flex items-center justify-center gap-2 py-2 rounded-md font-semibold shadow-sm transition-all duration-200',
            activeCategory === 'alcool'
              ? 'outline-2 outline-[#4E5548] bg-[#E6DBD0] text-[#4E5548] shadow-md'
              : 'bg-[#E6DBD0] text-[#4E5548] hover:bg-[#EFE4D9] hover:-translate-y-1 hover:shadow-md',
          ]"
        >
          <NuxtImg
            src="/categorie/hop.png"
            width="24"
            height="24"
            alt="Alcools"
          />
          ALCOOLS
        </button>

        <!-- SAISON -->
        <button
          @click="activeCategory = 'saisons'"
          :class="[
            'flex items-center justify-center gap-2 py-2 rounded-md font-semibold shadow-sm transition-all duration-200',
            activeCategory === 'saisons'
              ? 'outline-2 outline-[#4E5548] bg-[#E6DBD0] text-[#4E5548] shadow-md'
              : 'bg-[#E6DBD0] text-[#3E4233] hover:bg-[#d8cdbd] hover:-translate-y-1 hover:shadow-md',
          ]"
        >
          <NuxtImg
            src="/categorie/trees (2).png"
            width="24"
            height="24"
            alt="Saison"
          />
          SAISON
        </button>
      </div>
    </section>

    <!-- Hero / Bannière produits -->
    <!-- Hero / Bannière produits -->
    <section class="max-w-6xl mx-auto px-4 mb-6">
      <div class="relative rounded-lg overflow-hidden">
        <!-- Image en fond -->
        <NuxtImg
          src="/categorie/champ1.jpg"
          alt="découvrez produits"
          class="w-full h-48 md:h-52 object-cover absolute inset-0 z-0"
        />
        <!-- Overlay sombre -->
        <div class="absolute inset-0 bg-black/70 z-10"></div>
        <!-- Texte par-dessus -->
        <div
          class="relative z-20 p-6 md:p-8 flex flex-col justify-center h-48 md:h-52"
        >
          <h2 class="text-lg md:text-2xl font-bold text-white my-2">
            DÉCOUVREZ TOUT NOS PRODUITS
          </h2>
          <p
            class="text-xs md:text-base text-white opacity-70 leading-snug mb-2"
          >
            Élaborer avec soins par nos partenaires et leurs artisans. Nos
            produits sont garantis sans conservateurs artificiels, additifs ou
            colorants chimiques. En choisissant ces délicieuses boissons vous
            contribuez activement à la croissance de l’agriculture locale
            japonaise.
          </p>
        </div>
      </div>
    </section>

    <!-- Grille produits -->
    <section class="max-w-6xl mx-auto px-4 mb-10">
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
        <!-- Produits affichés -->
        <ProductCard
          v-for="prod in paginatedProducts"
          :key="prod.id"
          :id="prod.id"
          :title="prod.name"
          :img="prod.imageUrl"
          :price="prod.price"
        />

        <!-- Espaces vides pour combler la grille -->
        <div
          v-for="n in missingSlots"
          :key="'empty-' + n"
          class="h-[13rem] md:h-[15rem] rounded-xl invisible"
        ></div>
      </div>
    </section>

    <!-- Pagination modernisée -->
    <div class="flex justify-center my-8 gap-1 flex-wrap">
      <button
        v-for="page in totalPages"
        :key="page"
        @click="currentPage = page"
        class="w-9 h-9 rounded-full border border-[#4E5548] text-sm font-medium flex items-center justify-center transition-all duration-200 hover:bg-[#7C8259] hover:text-white hover:scale-105"
        :class="{
          'bg-[#3E4233] text-white shadow-md scale-105': page === currentPage,
          'text-[#3E4233] bg-white': page !== currentPage,
        }"
      >
        {{ page }}
      </button>
    </div>
  </main>
</template>

<script setup>
const productStore = useProductsStore();
await useAsyncData("products", () => productStore.fetchProducts());
onMounted(() => productStore.fetchProducts());

// Pagination

const currentPage = ref(1);
const itemsPerPage = 8;
const searchTerm = ref("");
const activeCategory = ref(null);
function normalize(str) {
  return str
    .normalize("NFD") // Sépare les accents
    .replace(/[\u0300-\u036f]/g, "") // Supprime les marques diacritiques
    .toLowerCase();
}
const missingSlots = computed(() => {
  const count = paginatedProducts.value.length;
  return count < itemsPerPage ? itemsPerPage - count : 0;
});

const filteredProducts = computed(() => {
  let results = productStore.products;

  // Recherche
  if (searchTerm.value.trim()) {
    const keyword = normalize(searchTerm.value.trim());
    results = results.filter((prod) => normalize(prod.name).includes(keyword));
  }

  // Catégorie

  if (activeCategory.value) {
    results = results.filter((prod) => prod.type === activeCategory.value);
  }

  return results;
});

const paginatedProducts = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage;
  return filteredProducts.value.slice(start, start + itemsPerPage);
});

const totalPages = computed(() => {
  return Math.ceil(filteredProducts.value.length / itemsPerPage);
});
watch(searchTerm, () => {
  currentPage.value = 1;
});
watch(activeCategory, () => {
  currentPage.value = 1;
});
</script>
