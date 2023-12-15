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

const iconMap = {
  "Picking the Best Veggies": "ph:basket-bold",
  "General Storage Tips": "ph:snowflake-bold",
  "Storing Specific Veggies": "ph:carrot-bold",
  "Using Scraps and Old Veggies": "ph:knife-bold",
  "Spotting Spoilage": "ph:trash-bold",
};

const props = defineProps({
  showIcons: {
    type: Boolean,
    default: true,
  },
});
</script>

<template>
  <div class="bg-light shadow-md z-10">
    <nav class="flex justify-between">
      <div class="w-0 px-4 flex items-center">
        <NuxtLink class="font-title text-primary text-2xl" to="/">
          VeggieTable
        </NuxtLink>
      </div>
      <ContentNavigation v-slot="{ navigation }">
        <ul class="flex flex-wrap h-16">
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
                'px-6 h-full hover:bg-accent-100 flex items-center text-dark text-center',
                {
                  'bg-light-green': route.fullPath.includes(link._path),
                },
                props.showIcons ? 'w-52' : 'w-44',
              ]"
              @click="hoveredItem = null"
            >
              <Icon
                v-if="props.showIcons"
                :name="iconMap[link.title]"
                class="w-8 h-8 m-2"
              />
              {{ link.title }}
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
