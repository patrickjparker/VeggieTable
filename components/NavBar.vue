<script setup lang="ts">
interface Directory {
  title: string;
  _path: string;
  children: Directory[] | undefined;
}

const hoveredItem: Ref<null | Directory> = ref(null);

const subNavigation = computed(() => {
  if (!hoveredItem.value?.children) {
    return [];
  }
  return hoveredItem.value.children.filter(
    (item) => item._path !== hoveredItem.value?._path
  );
});
</script>

<template>
  <div class="w-screen shadow-md z-10">
    <nav class="flex justify-center w-full" @mouseleave="hoveredItem = null">
      <ContentNavigation v-slot="{ navigation }">
        <Nav
          class="h-12"
          :navigation="navigation"
          @mouseenter="(item) => (hoveredItem = item)"
        />
        <Nav
          v-if="subNavigation.length > 0"
          class="absolute w-full bg-white left-0 top-12 justify-center h-min-8 shadow-md"
          :navigation="subNavigation"
        />
      </ContentNavigation>
      <slot />
    </nav>
  </div>
</template>
