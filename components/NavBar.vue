<script setup lang="ts">
interface Link {
  title: string;
  _path: string;
  children?: Link[];
}

const hoveredItem: Ref<null | Link> = ref(null);

const filteredChildren = computed(() => {
  if (!hoveredItem.value || !hoveredItem.value.children) {
    return [];
  } else {
    const parentPath = hoveredItem.value._path;
    return (
      hoveredItem?.value?.children?.filter(
        (child) => child._path !== parentPath
      ) || []
    );
  }
});

const route = useRoute();
</script>

<template>
  <div class="shadow-md z-10">
    <nav class="flex justify-between">
      <div class="w-0 px-4 flex items-center">
        <NuxtLink class="font-title text-primary text-2xl" to="/">
          VeggieTable
        </NuxtLink>
      </div>
      <ContentNavigation v-slot="{ navigation }">
        <ul class="flex flex-wrap h-12">
          <li
            v-for="link of navigation"
            :key="link._path"
            class="h-full relative"
            @mouseenter="hoveredItem = link"
            @mouseleave="hoveredItem = null"
          >
            <NuxtLink
              :to="link._path"
              :class="[
                'px-2 h-full hover:bg-accent-100 flex items-center text-dark',
                {
                  'bg-light-green': route.fullPath.includes(link._path),
                },
              ]"
              @click="hoveredItem = null"
            >
              <span class="whitespace-nowrap">{{ link.title }}</span>
            </NuxtLink>
            <ul
              v-if="link.children && hoveredItem === link"
              class="absolute bg-light left-0 top-full shadow-md"
            >
              <li v-for="item of filteredChildren" :key="item._path">
                <NuxtLink
                  :to="item._path"
                  :class="[
                    'px-3 py-1 h-full hover:bg-accent-100 flex items-center text-dark',
                    {
                      'bg-light-green': route.fullPath.includes(item._path),
                    },
                  ]"
                  @click="hoveredItem = null"
                >
                  <span class="whitespace-nowrap">{{ item.title }}</span>
                </NuxtLink>
              </li>
            </ul>
          </li>
        </ul>
      </ContentNavigation>
      <div class="px-4"></div>
    </nav>
  </div>
</template>
