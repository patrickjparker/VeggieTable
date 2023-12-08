<script setup lang="ts">
const props = defineProps({
  url: {
    type: String,
    default: "",
  },
});
</script>

<template>
  <span class="p-2 font-thin text-sm"
    >Source:
    <ProseA :href="props.url"
      ><ContentSlot :use="$slots.default" unwrap="p" /></ProseA
  ></span>
</template>
