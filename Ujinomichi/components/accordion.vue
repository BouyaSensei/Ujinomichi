<template>
  <div class="border-b">
    <div class="block md:hidden">
      <button
        @click="open = !open"
        class="w-full flex items-center justify-between py-3 font-semibold text-left group"
      >
        <div class="flex items-center gap-2">
          <NuxtImg
            v-if="iconName"
            :src="`/icons/${iconName}.png`"
            :alt="title"
            width="20"
            height="20"
            class="object-contain"
          />
          {{ title }}
        </div>
        <NuxtImg
          :src="`/icons/${open ? 'chevron-up' : 'chevron-down'}.png`"
          alt="toggle"
          width="20"
          height="20"
          class="object-contain"
        />
      </button>

      <transition name="fade">
        <div v-if="open" class="pt-2">
          <slot />
        </div>
      </transition>
    </div>

    <!-- Desktop version always visible -->
    <div class="hidden md:block pt-2">
      <slot />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { NuxtImg } from "#components";

defineProps({
  title: String,
  iconName: String,
});

const open = ref(false);
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: scaleY(0.95);
}
</style>
