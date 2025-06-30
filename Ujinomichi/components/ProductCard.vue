<template>
  <div class="relative rounded-xl overflow-hidden group">
    <!-- Image produit -->
    <NuxtImg :src="img" :alt="title" class="w-full h-52 object-cover" />
    <!-- Bouton pour voir le produit version mobile -->
    <button
      class="absolute top-0 right-0 block md:hidden bg-[#4E5548] text-white px-3 py-1 rounded-bl-xl"
    >
      <NuxtLink
        :to="`/products/${id}`"
        class="text-[12px] text-white hover:underline"
        >Découvrir</NuxtLink
      >
    </button>
    <!-- Bouton pour voir le produit version pc -->
    <button
      class="absolute top-0 right-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[#4E5548] hover:bg-[#7C8259] text-white px-3 py-1 rounded-bl-xl"
    >
      <NuxtLink :to="`/products/${id}`" class="text-[14px] text-white m-2"
        >Découvrir</NuxtLink
      >
    </button>
    <!-- Overlay kaki avec opacité -->
    <div
      class="flex absolute items-center inset-x-0 bottom-0 bg-[#3A4034]/80 backdrop-blur-xs h-16 text-white px-2 py-1.5"
    >
      <div class="flex justify-between items-end w-full">
        <div>
          <div class="h-8 text-[12px] mt-1 font-semibold leading-tight">
            {{ title }}
          </div>
          <div class="text-[12px] mb-1 opacity-90">{{ price }} €</div>
        </div>
        <div class="flex items-center justify-center gap-1 my-1">
          <button
            @click="addToWishList"
            class="bg-[#7C8259] flex items-center justify-center size-7 md:size-8 p-1 rounded-full hover:bg-[#727752]"
          >
            <svg
              class="size-4 md:size-5"
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
          <button
            @click="addToBasket"
            class="bg-[#E6DBD0] p-1 rounded-full size-7 flex items-center justify-center md:size-8 hover:bg-[#EFE4D9]"
          >
            <svg
              class="size-4 md:size-5"
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
                  d="M7.5 18C8.32843 18 9 18.6716 9 19.5C9 20.3284 8.32843 21 7.5 21C6.67157 
                  21 6 20.3284 6 19.5C6 18.6716 6.67157 18 7.5 18Z"
                  stroke="#4E5548"
                  stroke-width="1.5"
                ></path>
                <path
                  d="M16.5 18.0001C17.3284 18.0001 18 18.6716 18 19.5001C18 20.3285 17.3284 
                  21.0001 16.5 21.0001C15.6716 21.0001 15 20.3285 15 19.5001C15 18.6716 15.6716 18.0001 16.5 18.0001Z"
                  stroke="#4E5548"
                  stroke-width="1.5"
                ></path>
                <path
                  d="M2.26121 3.09184L2.50997 2.38429H2.50997L2.26121 3.09184ZM2.24876 
                  2.29246C1.85799 2.15507 1.42984 2.36048 1.29246 2.75124C1.15507 3.14201 
                  1.36048 3.57016 1.75124 3.70754L2.24876 2.29246ZM4.58584 4.32298L5.20507 
                  3.89983V3.89983L4.58584 4.32298ZM5.88772 14.5862L5.34345 15.1022H5.34345L5.88772 
                  14.5862ZM20.6578 9.88275L21.3923 10.0342L21.3933 10.0296L20.6578 9.88275ZM20.158 
                  12.3075L20.8926 12.4589L20.158 12.3075ZM20.7345 6.69708L20.1401 7.15439L20.7345 
                  6.69708ZM19.1336 15.0504L18.6598 14.469L19.1336 15.0504ZM5.70808 
                  9.76V7.03836H4.20808V9.76H5.70808ZM2.50997 2.38429L2.24876 2.29246L1.75124 
                  3.70754L2.01245 3.79938L2.50997 2.38429ZM10.9375 16.25H16.2404V14.75H10.9375V16.25ZM5.70808 
                  7.03836C5.70808 6.3312 5.7091 5.7411 5.65719 5.26157C5.60346 4.76519 5.48705 4.31247 
                  5.20507 3.89983L3.96661 4.74613C4.05687 4.87822 4.12657 5.05964 4.1659 5.42299C4.20706 
                  5.8032 4.20808 6.29841 4.20808 7.03836H5.70808ZM2.01245 3.79938C2.68006 4.0341 3.11881 
                  4.18965 3.44166 4.34806C3.74488 4.49684 3.87855 4.61727 3.96661 4.74613L5.20507 
                  3.89983C4.92089 3.48397 4.54304 3.21763 4.10241 3.00143C3.68139 2.79485 3.14395 
                  2.60719 2.50997 2.38429L2.01245 3.79938ZM4.20808 9.76C4.20808 11.2125 4.22171 
                  12.2599 4.35876 13.0601C4.50508 13.9144 4.79722 14.5261 5.34345 15.1022L6.43198 
                  14.0702C6.11182 13.7325 5.93913 13.4018 5.83723 12.8069C5.72607 12.1578 5.70808 
                  11.249 5.70808 9.76H4.20808ZM10.9375 14.75C9.52069 14.75 8.53763 14.7482 
                  7.79696 14.6432C7.08215 14.5418 6.70452 14.3576 6.43198 14.0702L5.34345 
                  15.1022C5.93731 15.7286 6.69012 16.0013 7.58636 16.1283C8.45674 16.2518 
                  9.56535 16.25 10.9375 16.25V14.75ZM4.95808 6.87H17.0888V5.37H4.95808V6.87ZM19.9232
                   9.73135L19.4235 12.1561L20.8926 12.4589L21.3923 10.0342L19.9232 9.73135ZM17.0888 
                   6.87C17.9452 6.87 18.6989 6.871 19.2937 6.93749C19.5893 6.97053 19.8105 7.01643 
                   19.9659 7.07105C20.1273 7.12776 20.153 7.17127 20.1401 7.15439L21.329 6.23978C21.094 
                   5.93436 20.7636 5.76145 20.4632 5.65587C20.1567 5.54818 19.8101 5.48587 19.4604 
                   5.44678C18.7646 5.369 17.9174 5.37 17.0888 5.37V6.87ZM21.3933 10.0296C21.5625 
                   9.18167 21.7062 8.47024 21.7414 7.90038C21.7775 7.31418 21.7108 6.73617 21.329 
                   6.23978L20.1401 7.15439C20.2021 7.23508 20.2706 7.38037 20.2442 7.80797C20.2168 8.25191 
                   20.1002 8.84478 19.9223 9.73595L21.3933 10.0296ZM16.2404 16.25C17.0021 16.25 17.6413 
                   16.2513 18.1566 16.1882C18.6923 16.1227 19.1809 15.9794 19.6074 15.6318L18.6598 
                   14.469C18.5346 14.571 18.3571 14.6525 17.9744 14.6994C17.5712 14.7487 17.0397 
                   14.75 16.2404 14.75V16.25ZM19.4235 12.1561C19.2621 12.9389 19.1535 13.4593 
                   19.0238 13.8442C18.9007 14.2095 18.785 14.367 18.6598 14.469L19.6074 
                   15.6318C20.0339 15.2842 20.2729 14.8346 20.4453 14.3232C20.6111 13.8312 20.7388 
                   13.2049 20.8926 12.4589L19.4235 12.1561Z"
                  fill="#4E5548"
                ></path>
              </g>
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useToast } from "vue-toastification";
const props = defineProps(["img", "title", "price", "key", "id"]);
const authStore = useAuthStore();
const toast = useToast();
const addToBasket = () => {
  const userId = authStore.user.userId;
  const productQuantity = 1;
  const id = props.id;
  fetch("/api/basket/addToBasket", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ userId, id, productQuantity }),
  });
  toast.success("Produit ajouté au panier avec succès !");
};
const addToWishList = () => {
  const userId = authStore.user.userId;
  const id = props.id;
  fetch("/api/wishlist/addToWishList", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ userId, id }),
  });
  toast.success("Produit ajouté à la liste de souhaits avec succès !");
};
</script>
