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
  <ul class="flex flex-wrap">
    <li
      v-for="link of props.navigation"
      :key="link._path"
      class="hover:bg-slate-200 h-full flex items-center whitespace-nowrap"
      @mouseenter="$emit('mouseenter', link)"
    >
      <NuxtLink :to="link._path" class="px-2 py-1">
        {{ link.title }}
      </NuxtLink>
    </li>
  </ul>
</template>
