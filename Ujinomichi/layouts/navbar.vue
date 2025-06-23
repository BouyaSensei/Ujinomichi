<template>
  <nav class="navbar bg-[#4E5548]">
    <div
      class="headerContainer bg-[#7C8259] text-white p-4 flex justify-center items-center"
    >
      <h1>contact@ujinomichi.fr - 01 86 45 23 90</h1>
    </div>

    <article>
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
                class="h-7 w-7"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                viewBox="0 0 24 24"
              >
                <circle cx="9" cy="20" r="1.5" />
                <circle cx="17" cy="20" r="1.5" />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M5 6h2l3.6 7.59a1 1 0 00.95.41H19a1 1 0 00.98-.8l1.5-8.5A1 1 0 0020.5 4H7"
                />
              </svg>
            </NuxtLink>
          </button>
          <NuxtLink
            to="/login"
            class="text-white hover:scale-90 transition duration-150"
          >
            <svg
              class="h-7 w-7"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              viewBox="0 0 24 24"
            >
              <circle cx="12" cy="8" r="4" />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M4 20c0-4 8-4 8-4s8 0 8 4"
              />
            </svg>
          </NuxtLink>
        </div>

        <!-- Burger mobile -->
        <button class="md:hidden text-white" @click="menuOpen = !menuOpen">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-8 w-8"
            fill="none"
            stroke="currentColor"
            stroke-width="3"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      <!-- Nouveau menu mobile amélioré -->
      <transition name="fade">
        <div v-if="menuOpen" class="md:hidden bg-[#363e40] px-6 py-6 space-y-5">
          <NuxtLink
            to="/"
            class="block text-center text-white uppercase font-bold text-xl tracking-wider"
            >Accueil</NuxtLink
          >
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
          <div class="flex justify-center gap-10">
            <NuxtLink to="/basket">
              <button class="text-white hover:scale-90 transition duration-150">
                <svg
                  class="h-7 w-7"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                >
                  <circle cx="9" cy="20" r="1.5" />
                  <circle cx="17" cy="20" r="1.5" />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M5 6h2l3.6 7.59a1 1 0 00.95.41H19a1 1 0 00.98-.8l1.5-8.5A1 1 0 0020.5 4H7"
                  />
                </svg>
              </button>
            </NuxtLink>
            <NuxtLink
              to="/login"
              class="text-white hover:scale-90 transition duration-150"
            >
              <svg
                class="h-7 w-7"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                viewBox="0 0 24 24"
              >
                <circle cx="12" cy="8" r="4" />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M4 20c0-4 8-4 8-4s8 0 8 4"
                />
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
