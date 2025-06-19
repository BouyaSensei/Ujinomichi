<template>
  <main class="bg-white min-h-screen pb-8">
    <!-- Fil d'Ariane -->
    <nav
      class="flex items-center text-sm gap-1 px-4 pt-4 text-gray-500 max-w-6xl mx-auto"
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
      class="max-w-6xl mx-auto px-4 mt-4 flex flex-col md:flex-row gap-8 items-start"
    >
      <!-- Image -->
      <NuxtImg
        :src="product?.imageUrl || cookieProduct.imageUrl"
        alt="Image produit"
        class="w-full md:w-[32%] sm:w-[32%] xs:w-[25%] max-w-xs h-auto rounded-xl object-cover"
      />

      <!-- Infos produit -->
      <div class="w-full md:w-1/2 space-y-3 text-[#3E4233]">
        <h1 class="text-2xl md:text-3xl font-extrabold uppercase">
          {{ product?.name || cookieProduct.name }}
        </h1>

        <h2 class="text-sm font-semibold border-b border-[#3E4233] pb-1">
          Description produit
        </h2>
        <p class="text-sm text-gray-700">
          {{ product?.description || cookieProduct.description }}
        </p>

        <div class="font-bold text-xl">
          {{ product?.price || cookieProduct.price }} €
        </div>

        <!-- Stock -->
        <p
          v-if="product?.stockQuantity > 0 || cookieProduct.stockQuantity > 0"
          class="text-green-600"
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

        <!-- Boutons -->

        <div v-if="authStore.isAuthenticated" class="flex flex-wrap gap-2 mt-2">
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
          -->
        </div>

        <!-- Quantité + favoris -->
        <div class="flex items-center gap-4 mt-3">
          <div class="relative group inline-block">
            <!-- Le bouton -->
            <div
              v-if="authStore.isAuthenticated"
              class="relative group inline-block"
            >
              <!-- Bouton wishlist -->
              <button
                v-on:click="addToWishList"
                class="bg-[#f5dfe9] text-white/90 p-2 rounded-full hover:bg-[#ececec] transition focus:outline-none focus:ring-2 focus:ring-[#3E4233]"
                aria-describedby="tooltip-wishlist"
              >
                <BaseIcon name="wishlist" size="16" />
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

          <div
            class="flex items-center text-sm border rounded overflow-hidden w-fit"
          >
            <!-- Bouton - -->
            <button
              @click="decrement"
              class="px-2 bg-[#E9DECF] hover:bg-[#d2c8b8] transition"
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
              class="w-12 text-center border-l border-r outline-none appearance-none [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
            />

            <!-- Bouton + -->
            <button
              @click="increment"
              class="px-2 bg-[#E9DECF] hover:bg-[#d2c8b8] transition"
            >
              +
            </button>
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
      <h2 class="text-center font-bold text-[#3E4233] uppercase mb-6 text-lg">
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
};
const addToWishList = () => {
  const userId = authStore.user.userId;
  fetch("/api/wishlist/addToWishList", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ userId, id }),
  });
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
});
//console.log(productCookie.value.products);
//console.log(toRaw(productCookie.value.products)); // Objet brut
//console.log(JSON.stringify(productCookie.value.products)); // JSON lisible
</script>
