<script setup lang="ts">
interface Source {
  url: string;
  title: string;
}

const props = defineProps({
  sources: {
    type: Array as PropType<Source[]>,
    required: true,
  },
});
</script>

<template>
  <p class="p-2 font-thin text-sm">
    Sources:
    <ProseA
      v-for="(source, index) in props.sources"
      :key="index"
      :href="source.url"
      :class="{ 'block pl-2': props.sources.length > 1 }"
    >
      {{ source.title }}
    </ProseA>
  </p>
</template>
