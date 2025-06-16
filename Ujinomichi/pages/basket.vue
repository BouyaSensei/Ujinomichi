<template>
  <main class="max-w-6xl mx-auto px-2 py-6">
    <!-- Titre -->
    <h1 class="flex items-center text-2xl font-semibold gap-2 mb-6">
      <NuxtImg
        src="/icons/icone_panier.png"
        alt="Panier"
        width="32"
        height="32"
      />
      Mon panier
    </h1>
    <hr class="border-gray-300 mb-6" />

    <!-- Panier vide -->
    <div v-if="cart.length === 0" class="flex flex-col items-center py-12">
      <NuxtImg
        src="/icons/icone_panier_vide.svg"
        alt="Panier vide"
        width="120"
        height="120"
      />
      <p class="mt-6 text-xl font-medium text-[#3E4233] text-center">
        Votre panier<br />est vide
      </p>
    </div>

    <!-- Panier rempli -->
    <div v-else class="grid md:grid-cols-2 gap-6">
      <!-- Colonne gauche : liste produits -->
      <div v-if="cart.length" class="grid md:grid-cols-2 gap-6">
        <!-- Colonne gauche : liste produits -->
        <div>
          <div
            v-for="(item, index) in cart"
            :key="index"
            class="flex items-center gap-4 mb-6"
          >
            <NuxtImg
              :src="item.imageUrl"
              alt="Produit"
              class="rounded w-24 h-24 object-cover"
            />
            <div class="flex-1">
              <div class="text-sm font-bold text-[#3E4233] uppercase mb-1">
                {{ item.name }}
              </div>
              <div class="text-[#3E4233] font-semibold text-base mb-2">
                {{ item.price }} €
              </div>

              <!-- Quantité inline -->
              <div class="flex items-center gap-2">
                <button
                  @click="decrement(index)"
                  class="w-8 h-8 flex items-center justify-center rounded bg-[#3E4233] text-white font-bold text-xl"
                >
                  -
                </button>
                <span class="w-8 text-center font-bold text-[#3E4233]">
                  {{ item.quantity }}
                </span>
                <button
                  @click="increment(index)"
                  class="w-8 h-8 flex items-center justify-center rounded bg-[#3E4233] text-white font-bold text-xl"
                >
                  +
                </button>
              </div>
            </div>

            <!-- Supprimer -->
            <button
              @click="removeFromCart(index)"
              class="p-2 rounded border border-gray-300 hover:bg-gray-100"
            >
              <NuxtImg
                src="/icons/supprimer.png"
                alt="Supprimer"
                width="22"
                height="22"
              />
            </button>
          </div>
        </div>

        <!-- Colonne droite (si tu veux un résumé) -->
        <div>
          <!-- contenu résumé, total, code promo, etc. -->
        </div>

        <!-- Bouton global "Vider le panier" -->
        <div class="md:col-span-2">
          <button
            @click="clearCart"
            class="bg-[#E9DECF] text-[#3E4233] font-semibold px-4 py-2 rounded shadow"
          >
            Vider le panier
          </button>
        </div>
      </div>

      <!-- Colonne droite : récapitulatif -->
      <div class="border rounded-md p-4 bg-white space-y-4">
        <div class="flex justify-between">
          <span>Produits</span><span>00$</span>
        </div>
        <div class="flex justify-between">
          <span>Livraison</span><span>00$</span>
        </div>
        <div class="flex justify-between">
          <span>Promotions</span><span>00$</span>
        </div>
        <div class="flex items-center gap-2">
          <input
            type="text"
            placeholder="Votre code promo"
            class="flex-1 border rounded px-2 py-1"
          />
          <button class="bg-[#3E4233] text-white rounded px-4 py-2">
            Appliquer
          </button>
        </div>
        <div class="flex justify-between font-semibold text-lg border-t pt-2">
          <span>TOTAL</span><span>00$</span>
        </div>
        <button
          class="w-full bg-[#E9DECF] text-[#3E4233] font-semibold py-2 rounded shadow"
        >
          Passer la commande
        </button>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";
const userStore = useUserStore();
const { basketId } = storeToRefs(userStore); // on rend reactive
const { basket } = storeToRefs(userStore); // on rend reactive

onBeforeMount(async () => {
  if (!userStore.id) {
    await userStore.getInfo();
    //console.log(basketId.value);

    for (const product of basketId.value) {
      try {
        const res = await fetch(`/api/getSingleProductById/`, {
          method: "POST",
          body: JSON.stringify(product.productId),
        });
        const data = await res.json();

        console.log(product);
        data.quantity = product.productQuantity;
        console.log(data);
        basket.value.push(data);
      } catch (error) {
        console.error(
          `Erreur lors de la récupération du produit ${product.productId}:`,
          error
        );
      }
    }
  }
});

onMounted(() => {
  userStore.getInfo();
});

// Basket réactif
const cart = computed(() => basket.value || []);
const quantity = ref(1);
function increment() {
  quantity.value++;
}
function decrement() {
  if (quantity.value > 1) quantity.value--;
}
function removeFromCart(index: number) {
  basket.value?.splice(index, 1);
}
function clearCart() {
  basket.value = [];
}
</script>
