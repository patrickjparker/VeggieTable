<script setup lang="ts">
const hoveredItem: Ref<null | Object> = ref(null);
</script>

<template>
  <div class="w-screen shadow-md z-10">
    <nav class="flex justify-center w-full">
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
              class="px-2 h-full hover:bg-slate-200 flex items-center"
              @click="hoveredItem = null"
            >
              <span class="whitespace-nowrap">{{ link.title }}</span>
            </NuxtLink>
            <ul
              v-if="link.children && hoveredItem === link"
              class="absolute bg-white left-0 top-full shadow-md"
            >
              <li v-for="item of link.children" :key="item._path">
                <NuxtLink
                  :to="item._path"
                  class="px-2 py-1 h-full hover:bg-slate-200 flex items-center"
                  @click="hoveredItem = null"
                >
                  <span class="whitespace-nowrap">{{ item.title }}</span>
                </NuxtLink>
              </li>
            </ul>
          </li>
        </ul>
      </ContentNavigation>
      <slot />
    </nav>
  </div>
</template>
