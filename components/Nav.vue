<script setup lang="ts">
const props = defineProps({
  navigation: {
    type: Array,
    required: true,
  },
});
defineEmits(["mouseenter"]);
</script>

<template>
  <ul class="flex">
    <li
      v-for="link of props.navigation"
      :key="link._path"
      class="px-2 hover:bg-slate-200 h-full flex items-center"
      @mouseenter="$emit('mouseenter', link)"
    >
      <NuxtLink :to="`/blog${link._path}`">
        {{ link.title }}
      </NuxtLink>
    </li>
  </ul>
</template>
