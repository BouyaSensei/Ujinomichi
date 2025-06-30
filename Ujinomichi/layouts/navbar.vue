<template>
  <nav class="navbar bg-[#4E5548]">
    <div
      class="headerContainer bg-[#7C8259] text-white p-4 flex justify-center items-center"
    >
      <h1>contact@ujinomichi.fr - 01 86 45 23 90</h1>
    </div>

    <article class="">
      <div
        class="flex justify-evenly md:justify-around items-center h-20 px-4 md:px-10"
      >
        <!-- Logo -->
        <NuxtLink to="/">
          <h2 class="text-white nanumfont uppercase tracking-widest text-4xl">
            Ujinomichi
          </h2>
        </NuxtLink>

        <!-- Desktop menu -->
        <div class="hidden md:flex items-center gap-6">
          <!--<div class="relative w-64">
            <input
              type="text"
              class="w-full h-10 pl-5 pr-10 rounded-full bg-white focus:outline-none text-gray-800 text-base"
              placeholder="Recherche..."
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="cursor-pointer h-6 w-6 text-gray-500 absolute right-3 top-1/2 -translate-y-1/2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2.5"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 104.5 4.5a7.5 7.5 0 0012.15 12.15z"
              />
            </svg>
          </div> -->
          <button class="text-white hover:scale-90 transition duration-150">
            <NuxtLink to="/basket">
              <svg
                class="size-8 mt-1"
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
                    d="M8.9211 7.29287C9.31164 7.15483 9.74013 7.35953 9.87817 7.75007C10.1874 8.62497 
                      11.0218 9.25 12.0003 9.25C12.9788 9.25 13.8133 8.62497 14.1225 7.75007C14.2605 
                      7.35953 14.689 7.15483 15.0796 7.29287C15.4701 7.43091 15.6748 7.8594 15.5368 
                      8.24993C15.0223 9.70541 13.6343 10.75 12.0003 10.75C10.3664 10.75 8.97835 9.70541 
                      8.46391 8.24993C8.32587 7.8594 8.53057 7.43091 8.9211 7.29287ZM12.3607 5.5H11.6395C10.0137 
                      5.5 8.93165 5.50267 8.11211 5.60393C7.33378 5.70009 6.97502 5.86728 6.72326 6.07623C6.47149 
                      6.28517 6.24105 6.60698 6.00309 7.35425C5.75254 8.14109 5.5505 9.20417 5.25088 
                      10.8021C4.8309 13.042 4.54933 14.5634 4.49931 15.7093C4.4511 16.8139 4.63619 
                      17.2835 4.89607 17.5966C5.15595 17.9097 5.58337 18.1782 6.67789 18.3344C7.81341 
                      18.4964 9.36063 18.5 11.6395 18.5H12.3607C14.6397 18.5 16.1869 18.4964 17.3224 
                      18.3344C18.4169 18.1782 18.8443 17.9097 19.1042 17.5966C19.3641 17.2835 19.5492 
                      16.8139 19.501 15.7093C19.451 14.5634 19.1694 13.042 18.7494 10.8021C18.4498 9.20417 
                      18.2477 8.14109 17.9972 7.35425C17.7592 6.60698 17.5288 6.28517 17.277 6.07623C17.0253 
                      5.86728 16.6665 5.70009 15.8882 5.60393C15.0686 5.50267 13.9865 5.5 12.3607 5.5ZM5.7653 
                      4.92196C4.65441 5.84393 4.36179 7.40452 3.77657 10.5257C2.95365 14.9146 2.54219 17.1091 
                      3.74181 18.5545C4.94143 20 7.17414 20 11.6395 20H12.3607C16.8261 20 19.0588 20 20.2585 
                      18.5545C21.4581 17.1091 21.0466 14.9146 20.2237 10.5257C19.6385 7.40452 19.3459 5.84393 
                      18.235 4.92196C17.1241 4 15.5363 4 12.3607 4H11.6395C8.46398 4 6.8762 4 5.7653 4.92196Z"
                    fill="#ffffff"
                  ></path>
                </g>
              </svg>
            </NuxtLink>
          </button>
          <NuxtLink
            to="/login"
            class="text-white hover:scale-90 transition duration-150"
          >
            <svg
              class="size-7"
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
                  cy="6"
                  r="4"
                  stroke="#ffffff"
                  stroke-width="1.75"
                ></circle>
                <path
                  d="M20 17.5C20 19.9853 20 22 12 22C4 22 4 19.9853 4 17.5C4 15.0147 7.58172 13 12 
                  13C16.4183 13 20 15.0147 20 17.5Z"
                  stroke="#ffffff"
                  stroke-width="1.75"
                ></path>
              </g>
            </svg>
          </NuxtLink>
        </div>

        <!-- Burger mobile -->
        <button class="md:hidden text-white" @click="menuOpen = !menuOpen">
          <svg
            class="h-9 w-9"
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
                d="M20 7L4 7"
                stroke="#ffffff"
                stroke-width="1.5"
                stroke-linecap="round"
              ></path>
              <path
                d="M20 12L4 12"
                stroke="#ffffff"
                stroke-width="1.5"
                stroke-linecap="round"
              ></path>
              <path
                d="M20 17L4 17"
                stroke="#ffffff"
                stroke-width="1.5"
                stroke-linecap="round"
              ></path>
            </g>
          </svg>
        </button>
      </div>

      <!-- Nouveau menu mobile amélioré -->
      <transition name="fade">
        <div
          v-if="menuOpen"
          class="md:hidden absolute w-full bg-[#4E5548] px-6 pb-6 space-y-5 z-40"
        >
          <div class="border-1 border-white"></div>
          <!--
          <div class="relative w-full">
            <input
              type="text"
              class="w-full h-10 pl-5 pr-10 rounded-full bg-white focus:outline-none text-gray-800 text-base"
              placeholder="Recherche..."
            />

            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="cursor-pointer h-6 w-6 text-gray-500 absolute right-3 top-1/2 -translate-y-1/2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2.5"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 104.5 4.5a7.5 7.5 0 0012.15 12.15z"
              />
            </svg>
          </div>
        -->

          <div class="flex justify-center gap-12">
            <NuxtLink to="/">
              <button
                class="flex size-12 items-center justify-center text-white hover:scale-90 transition duration-150"
              >
                <svg
                  class="size-9"
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
                      d="M2 12.2039C2 9.91549 2 8.77128 2.5192 7.82274C3.0384 6.87421 3.98695 
                      6.28551 5.88403 5.10813L7.88403 3.86687C9.88939 2.62229 10.8921 2 12 2C13.1079
                       2 14.1106 2.62229 16.116 3.86687L18.116 5.10812C20.0131 6.28551 20.9616 6.87421
                        21.4808 7.82274C22 8.77128 22 9.91549 22 12.2039V13.725C22 17.6258 22 19.5763 
                        20.8284 20.7881C19.6569 22 17.7712 22 14 22H10C6.22876 22 4.34315 22 3.17157 
                        20.7881C2 19.5763 2 17.6258 2 13.725V12.2039Z"
                      stroke="#ffffff"
                      stroke-width="2"
                    ></path>
                    <path
                      d="M15 18H9"
                      stroke="#ffffff"
                      stroke-width="2"
                      stroke-linecap="round"
                    ></path>
                  </g>
                </svg>
              </button>
            </NuxtLink>
            <NuxtLink to="/basket">
              <button
                class="flex size-12 items-center justify-center text-white hover:scale-90 transition duration-150"
              >
                <svg
                  class="size-11 mt-1"
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
                      d="M8.9211 7.29287C9.31164 7.15483 9.74013 7.35953 9.87817 7.75007C10.1874 8.62497 
                      11.0218 9.25 12.0003 9.25C12.9788 9.25 13.8133 8.62497 14.1225 7.75007C14.2605 
                      7.35953 14.689 7.15483 15.0796 7.29287C15.4701 7.43091 15.6748 7.8594 15.5368 
                      8.24993C15.0223 9.70541 13.6343 10.75 12.0003 10.75C10.3664 10.75 8.97835 9.70541 
                      8.46391 8.24993C8.32587 7.8594 8.53057 7.43091 8.9211 7.29287ZM12.3607 5.5H11.6395C10.0137 
                      5.5 8.93165 5.50267 8.11211 5.60393C7.33378 5.70009 6.97502 5.86728 6.72326 6.07623C6.47149 
                      6.28517 6.24105 6.60698 6.00309 7.35425C5.75254 8.14109 5.5505 9.20417 5.25088 
                      10.8021C4.8309 13.042 4.54933 14.5634 4.49931 15.7093C4.4511 16.8139 4.63619 
                      17.2835 4.89607 17.5966C5.15595 17.9097 5.58337 18.1782 6.67789 18.3344C7.81341 
                      18.4964 9.36063 18.5 11.6395 18.5H12.3607C14.6397 18.5 16.1869 18.4964 17.3224 
                      18.3344C18.4169 18.1782 18.8443 17.9097 19.1042 17.5966C19.3641 17.2835 19.5492 
                      16.8139 19.501 15.7093C19.451 14.5634 19.1694 13.042 18.7494 10.8021C18.4498 9.20417 
                      18.2477 8.14109 17.9972 7.35425C17.7592 6.60698 17.5288 6.28517 17.277 6.07623C17.0253 
                      5.86728 16.6665 5.70009 15.8882 5.60393C15.0686 5.50267 13.9865 5.5 12.3607 5.5ZM5.7653 
                      4.92196C4.65441 5.84393 4.36179 7.40452 3.77657 10.5257C2.95365 14.9146 2.54219 17.1091 
                      3.74181 18.5545C4.94143 20 7.17414 20 11.6395 20H12.3607C16.8261 20 19.0588 20 20.2585 
                      18.5545C21.4581 17.1091 21.0466 14.9146 20.2237 10.5257C19.6385 7.40452 19.3459 5.84393 
                      18.235 4.92196C17.1241 4 15.5363 4 12.3607 4H11.6395C8.46398 4 6.8762 4 5.7653 4.92196Z"
                      fill="#ffffff"
                    ></path>
                  </g>
                </svg>
              </button>
            </NuxtLink>
            <NuxtLink
              to="/login"
              class="flex size-12 items-center justify-center text-white hover:scale-90 transition duration-150"
            >
              <svg
                class="size-9"
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
                    cy="6"
                    r="4"
                    stroke="#ffffff"
                    stroke-width="2"
                  ></circle>
                  <path
                    d="M20 17.5C20 19.9853 20 22 12 22C4 22 4 19.9853 4 17.5C4 15.0147 7.58172 13 12 
                  13C16.4183 13 20 15.0147 20 17.5Z"
                    stroke="#ffffff"
                    stroke-width="2"
                  ></path>
                </g>
              </svg>
            </NuxtLink>
          </div>
        </div>
      </transition>
    </article>
  </nav>
</template>

<script setup>
import { ref } from "vue";
const menuOpen = ref(false);
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
