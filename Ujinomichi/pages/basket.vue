<template>
  <main class="max-w-6xl mx-auto px-2 py-6">
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

    <div v-else class="grid md:grid-cols-2 gap-6">
      <div v-if="cart.length" class="grid md:grid-cols-2 gap-6">
        <div>
          <div
            v-for="(item, index) in cart"
            :key="item.id"
            class="flex items-center gap-4 mb-6"
          >
            <NuxtImg
              :src="item.imageUrl"
              alt="Produit"
              class="rounded w-24 h-24 object-cover"
            />
            <div class="flex-1">
              <div class="text-sm font-bold text-[#3E4233] uppercase mb-1">
                <NuxtLink
                  :to="`/products/${item.id}`"
                  class="hover:text-[#3E4233] hover:underline transition duration-300"
                >
                  {{ item.name }}
                </NuxtLink>
              </div>

              <div class="text-[#3E4233] font-semibold text-base mb-2">
                {{ itemTotal(item) }} €
              </div>

              <div class="flex items-center gap-2">
                <button
                  @click="decrement(index, item.id)"
                  class="w-8 h-8 flex items-center justify-center rounded bg-[#3E4233] text-white font-bold text-xl"
                >
                  -
                </button>
                <span class="w-8 text-center font-bold text-[#3E4233]">
                  {{ item.quantity }}
                </span>
                <button
                  @click="increment(index, item.id)"
                  class="w-8 h-8 flex items-center justify-center rounded bg-[#3E4233] text-white font-bold text-xl"
                >
                  +
                </button>
              </div>
            </div>

            <button
              @click="removeFromCart(index, item.id)"
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

        <div></div>

        <div class="md:col-span-2">
          <button
            @click="clearCart"
            class="bg-[#E9DECF] text-[#3E4233] font-semibold px-4 py-2 rounded shadow"
          >
            Vider le panier
          </button>
        </div>
      </div>

      <div class="border rounded-md p-4 bg-white space-y-4">
        <div class="flex justify-between">
          <span>Produits</span><span>{{ totalProducts }} €</span>
        </div>
        <div class="flex justify-between">
          <span>Livraison</span><span>00 €</span>
        </div>
        <div class="flex justify-between">
          <span>Promotions</span><span>00 €</span>
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
          <span>TOTAL</span><span>{{ totalProducts }} €</span>
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
const authStore = useAuthStore();
const { basketId } = storeToRefs(userStore);
const basket = ref([]);
const router = useRouter();

await useAsyncData("token", () => authStore.checkAuth());
await useAsyncData("basketId", () => userStore.getInfo());

onBeforeMount(async () => {
  if (!userStore.id) {
    await userStore.getInfo().catch((error) => {
      console.log(error);
      router.push("/login");
      navigateTo("/login");
    });
  }

  if (basket.value.length === 0) {
    try {
      const uniqueProductIds = Array.from(
        new Set(basketId.value.map((item) => item.productId))
      );

      for (const productId of uniqueProductIds) {
        const res = await fetch(`/api/getSingleProductById/`, {
          method: "POST",
          body: JSON.stringify(productId),
        });
        const data = await res.json();

        const totalQuantity = basketId.value
          .filter((item) => item.productId === productId)
          .reduce((sum, item) => sum + item.productQuantity, 0);

        basket.value.push({ ...data, quantity: totalQuantity });
      }
    } catch (error) {
      console.error("Erreur lors du chargement du panier :", error);
    }
  }
});

const cart = computed(() => basket.value || []);
const totalProducts = computed(() => {
  return cart.value
    .reduce((sum, item) => sum + item.quantity * item.price, 0)
    .toFixed(2);
});

function itemTotal(item) {
  return Math.round(item.quantity * item.price * 100) / 100;
}

function increment(index: number, productId: number) {
  basket.value[index].quantity++;
  userStore.incrementProductBasket(productId);
}

function decrement(index: number, productId: number) {
  basket.value[index].quantity--;
  if (basket.value[index].quantity <= 0) {
    userStore.dropProductFromBasket(productId);
    basket.value.splice(index, 1);
  } else {
    userStore.decrementProductBasket(productId);
  }
}

function removeFromCart(index: number, productId: number) {
  userStore.dropProductFromBasket(productId);
  basket.value.splice(index, 1);
}

function clearCart() {
  basket.value = [];
  userStore.dropBasket();
}
</script>
