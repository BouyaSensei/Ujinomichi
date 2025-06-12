<template>
  <img
    v-if="name"
    :src="`/icons/${name}.png`"
    :alt="alt"
    class="w-5 h-5 object-contain"
  />
</template>

<script setup>
defineProps({
  name: {
    type: String,
    required: true,
  },
  alt: {
    type: String,
    default: "",
  },
});
</script>
