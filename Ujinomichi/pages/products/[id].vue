<template>
  <main class="bg-white pb-12">
    <!-- Fil d'Ariane -->
    <nav
      class="flex items-center justify-start text-sm gap-1 px-4 pt-4 text-gray-500 max-w-6xl mx-auto"
    >
      <NuxtLink to="/" class="hover:underline">Accueil</NuxtLink>
      <span>›</span>
      <NuxtLink to="/products" class="hover:underline">Produits</NuxtLink>
      <span>›</span>
      <span class="text-black font-semibold capitalize">{{
        product?.name || cookieProduct.name || "Produit"
      }}</span>
    </nav>

    <!-- Section principale produit -->
    <section
      class="max-w-6xl mx-auto px-4 mt-4 flex flex-col md:flex-row gap-4 md:gap-8 items-center md:items-start"
    >
      <!-- Image -->
      <NuxtImg
        :src="product?.imageUrl || cookieProduct.imageUrl"
        alt="Image produit"
        class="w-full md:w-[32%] sm:w-[32%] xs:w-[25%] max-w-xs h-auto rounded-xl object-cover"
      />

      <!-- Infos produit -->
      <div class="w-full md:w-1/2 space-y-3 text-[#4E5548]">
        <h1 class="text-2xl md:text-3xl font-extrabold uppercase">
          {{ product?.name || cookieProduct.name }}
        </h1>

        <h2 class="text-md font-semibold border-b border-[#4E5548] pb-1">
          Description produit
        </h2>
        <p class="text-sm text-[#4E5548]">
          {{ product?.description || cookieProduct.description }}
        </p>

        <div class="flex font-bold text-xl">
          {{ product?.price || cookieProduct.price }} €
          <!-- Stock -->
          <p
            v-if="product?.stockQuantity > 0 || cookieProduct.stockQuantity > 0"
            class="text-[#7C8259] ml-4 font-bold"
          >
            En stock
          </p>
          <p
            v-else-if="
              (product?.stockQuantity > 1 && product?.stockQuantity <= 10) ||
              (cookieProduct.stockQuantity > 1 &&
                cookieProduct.stockQuantity <= 10)
            "
            class="text-orange-600"
          >
            Peu de stock
          </p>
          <p v-else class="text-red-600">en Rupture de stock</p>
        </div>

        <!-- Étoiles -->
        <!--  <div class="flex items-center gap-1 text-xs text-gray-600">
          <span class="font-bold text-[#3E4233]">OOS</span>
          <Icon
            name="lucide:star"
            v-for="n in 5"
            :key="n"
            size="14"
            class="text-gray-300"
          />
          <span>00 Avis</span>
        </div> -->

        <!-- Bouton quantité -->
        <div
          class="flex items-center text-sm border rounded overflow-hidden w-fit"
        >
          <!-- Bouton - -->
          <button
            @click="decrement"
            class="px-3 h-8 bg-[#E6DBD0] hover:bg-[#EFE4D9] font-bold text-lg transition"
          >
            -
          </button>

          <!-- Input quantité -->
          <input
            v-model="quantity"
            @input="onInputQuantity"
            type="number"
            min="1"
            max="10"
            class="w-16 h-8 text-center border-l text-lg font-bold border-r outline-none appearance-none [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
          />

          <!-- Bouton + -->
          <button
            @click="increment"
            class="px-3 h-8 bg-[#E6DBD0] hover:bg-[#EFE4D9] font-bold text-lg transition"
          >
            +
          </button>
        </div>
        <!-- Favoris + Ajouter au panier -->
        <div class="flex items-center gap-2 mt-3">
          <div v-if="authStore.isAuthenticated" class="flex flex-wrap gap-2">
            <button
              @click="addToBasket"
              class="bg-[#3E4233] text-white rounded px-4 py-2 text-sm font-semibold transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg hover:bg-[#4b4f3d]"
            >
              Ajouter au panier
            </button>

            <!-- Bouton d'achat direct -->
            <!--
          <button
            class="bg-[#E9DECF] text-[#3E4233] rounded px-4 py-2 text-sm font-semibold"
          >
            Acheter directement
          </button>
          --></div>
          <div class="relative group inline-block">
            <!-- Le bouton -->
            <div
              v-if="authStore.isAuthenticated"
              class="relative group inline-block"
            >
              <!-- Bouton wishlist -->
              <button
                v-on:click="addToWishList"
                class="bg-[#4E5548] text-white/90 size-9 flex items-center justify-center rounded-full hover:bg-[#7C8259] transition focus:outline-none focus:ring-2 focus:ring-[#3E4233]"
                aria-describedby="tooltip-wishlist"
              >
                <svg
                  class="size-5"
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
                      d="M5.62436 4.4241C3.96537 5.18243 2.75 6.98614 2.75 9.13701C2.75 11.3344 
                  3.64922 13.0281 4.93829 14.4797C6.00072 15.676 7.28684 16.6675 8.54113 
                  17.6345C8.83904 17.8642 9.13515 18.0925 9.42605 18.3218C9.95208 18.7365 
                  10.4213 19.1004 10.8736 19.3647C11.3261 19.6292 11.6904 19.7499 12 19.7499C12.3096 
                  19.7499 12.6739 19.6292 13.1264 19.3647C13.5787 19.1004 14.0479 18.7365 14.574 
                  18.3218C14.8649 18.0925 15.161 17.8642 15.4589 17.6345C16.7132 16.6675 17.9993 
                  15.676 19.0617 14.4797C20.3508 13.0281 21.25 11.3344 21.25 9.13701C21.25 6.98614 
                  20.0346 5.18243 18.3756 4.4241C16.9023 3.75065 14.9662 3.85585 13.0725 
                  5.51217L14.5302 6.9694C14.8232 7.26224 14.8233 7.73711 14.5304 8.03006C14.2376 
                  8.323 13.7627 8.32309 13.4698 8.03025L11.4698 6.03097L11.4596 6.02065C9.40166 
                  3.88249 7.23607 3.68739 5.62436 4.4241ZM12 4.45873C9.68795 2.39015 7.09896 2.10078 
                  5.00076 3.05987C2.78471 4.07283 1.25 6.42494 1.25 9.13701C1.25 11.8025 2.3605 13.836 
                  3.81672 15.4757C4.98287 16.7888 6.41022 17.8879 7.67083 18.8585C7.95659 19.0785 8.23378 
                  19.292 8.49742 19.4998C9.00965 19.9036 9.55954 20.3342 10.1168 20.6598C10.6739 20.9853 
                  11.3096 21.2499 12 21.2499C12.6904 21.2499 13.3261 20.9853 13.8832 20.6598C14.4405 20.3342 
                  14.9903 19.9036 15.5026 19.4998C15.7662 19.292 16.0434 19.0785 16.3292 18.8585C17.5898 
                  17.8879 19.0171 16.7888 20.1833 15.4757C21.6395 13.836 22.75 11.8025 22.75 9.13701C22.75 
                  6.42494 21.2153 4.07283 18.9992 3.05987C16.901 2.10078 14.3121 2.39015 12 4.45873Z"
                      fill="#ffffff"
                    ></path>
                  </g>
                </svg>
              </button>

              <!-- Tooltip -->

              <div
                id="tooltip-wishlist"
                class="absolute left-1/2 -translate-x-1/2 mt-2 whitespace-nowrap text-xs px-3 py-1 rounded bg-[#3E4233] text-white opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition duration-200 z-10"
              >
                Ajouter à la liste de souhait
              </div>
            </div>
            <div v-else>
              Veuillez vous connecter pour ajouter à la liste de souhait ou au
              panier
            </div>

            <!-- Tooltip -->
            <div
              class="absolute left-1/2 -translate-x-1/2 mt-2 whitespace-nowrap text-xs px-3 py-1 rounded bg-[#3E4233] text-white opacity-0 group-hover:opacity-100 transition duration-200 z-10"
            >
              Ajouter à la liste de souhait
            </div>
          </div>
        </div>

        <!-- Miniatures autres photos (optionnel) -->
        <!-- <div class="flex gap-2 mt-4">
          <NuxtImg
            v-for="n in 3"
            :key="n"
            :src="product?.imageUrl"
            class="w-20 h-20 rounded object-cover border"
          /> 
        </div> -->
      </div>
    </section>

    <!-- Produits similaires -->
    <section class="max-w-6xl mx-auto px-4 mt-10">
      <h2
        class="text-center font-bold text-[#3E4233] uppercase mt-8 mb-12 mx-4 text-3xl"
      >
        Produits similaires
      </h2>
      <div
        class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
        v-if="similarProducts !== null"
      >
        <ProductCard
          v-for="item in similarProducts"
          :key="item.id"
          :title="item.name"
          :img="item.imageUrl"
          :price="item.price"
          :id="item.id"
        />
      </div>
      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4" v-else>
        <ProductCard
          v-for="item in cookieSimilarProducts"
          :key="item.id"
          :title="item.name"
          :img="item.imageUrl"
          :price="item.price"
          :id="item.id"
        />
      </div>
    </section>
  </main>
</template>

<script setup>
import { useRoute } from "vue-router";
import { useToast } from "vue-toastification";
const toast = useToast();
const id = useRoute().params.id;

const route = useRoute();
const productStore = useProductsStore();
const quantity = ref(1);
const authStore = useAuthStore();
const increment = () => {
  if (quantity.value < 10) quantity.value++;
};

const decrement = () => {
  if (quantity.value > 1) quantity.value--;
};
const addToBasket = () => {
  const userId = authStore.user.userId;
  const productQuantity = quantity.value;
  fetch("/api/basket/addToBasket", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ userId, id, productQuantity }),
  });
  toast.success("Produit ajouté au panier avec succès !");
};
const addToWishList = () => {
  const userId = authStore.user.userId;
  fetch("/api/wishlist/addToWishList", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ userId, id }),
  });
  toast.success("Produit ajouté à la liste de souhaits avec succès !");
};
// Optionnel : forcer limite si on tape un chiffre
const onInputQuantity = (event) => {
  const value = parseInt(event.target.value);
  if (isNaN(value)) {
    quantity.value = 1;
  } else {
    quantity.value = Math.max(1, Math.min(10, value));
  }
};

const product = computed(() =>
  productStore.products.find((p) => String(p.id) === route.params.id)
);

const similarProducts = computed(() => {
  if (!product.value || !product.value.type) return null;

  return productStore.products
    .filter(
      (p) => p.type === product.value.type && String(p.id) !== route.params.id
    )
    .slice(0, 4);
});

import { toRaw } from "vue";

const cookieSimilarProducts = ref([]);
const cookieProduct = ref({});
const productCookie = useCookie("product-data", {
  maxAge: 60 * 60 * 24, // 24h
});

if (product.value !== undefined) {
  // console.log("Product found:", product.value);
  productCookie.value = JSON.stringify({
    products: product.value,
    similarProducts: similarProducts.value,
  });
} else {
  cookieProduct.value = toRaw(productCookie.value.products);
  //console.log(cookieProduct.value);
  cookieSimilarProducts.value.push(...productCookie.value.similarProducts);
}
onMounted(() => {
  authStore.checkAuth();
  productStore.fetchProducts();
});
//console.log(productCookie.value.products);
//console.log(toRaw(productCookie.value.products)); // Objet brut
//console.log(JSON.stringify(productCookie.value.products)); // JSON lisible
</script>
