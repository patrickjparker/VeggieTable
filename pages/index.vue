<script setup lang="ts">
definePageMeta({
  layout: "landing",
});

const links = [
  {
    title: "Picking the Best Veggies",
    _path: "/picking_the_best_veggies",
    icon: "ph:basket-bold",
  },
  {
    title: "General Storage Tips",
    _path: "/general_storage_tips",
    icon: "ph:snowflake-bold",
  },
  {
    title: "Storing Specific Veggies",
    _path: "/storing_specific_veggies",
    icon: "ph:carrot-bold",
  },
  {
    title: "Using Scraps and Old Veggies",
    _path: "/using_scraps_and_old_veggies",
    icon: "ph:knife-bold",
  },
  {
    title: "Spotting Spoilage",
    _path: "/spotting_spoilage",
    icon: "ph:trash-bold",
  },
];
</script>

<template>
  <div>
    <div class="fixed -z-1 top-0 left-0 w-full h-full overflow-clip">
      <NuxtImg src="images/main.jpg" fit="outside" proload />
    </div>
    <div class="flex flex-col items-center px-16 py-8">
      <div class="background-box flex flex-col items-center p-8">
        <h1 class="font-title text-primary text-9xl">VeggieTable</h1>
        <p class="pt-8 text-4xl">
          Make the <span class="font-bold">most</span> of your vegetables!
        </p>
      </div>
      <div class="background-box flex flex-col items-center p-8 mt-8">
        <p class="text-2xl">Learn about:</p>
        <ul class="flex flex-wrap justify-center w-full p-4 space-x-2">
          <li
            v-for="link of links"
            :key="link._path"
            class="category-button shadow-md hover:shadow-xl rounded-md mb-2"
          >
            <NuxtLink
              class="h-full w-full flex justify-center items-center p-2"
              :to="link._path"
            >
              <Icon :name="link.icon" class="w-8 h-8 m-2" />
              {{ link.title }}
            </NuxtLink>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped>
.background-box {
  background: rgba(249, 249, 249, 0.88);
}

.category-button {
  background: rgba(249, 249, 249, 1);
  border: 1px solid rgba(0, 0, 0, 0.1);
  width: 200px;
  height: 80px;
  transition: all 0.2s ease-in-out;
  text-align: center;
  vertical-align: middle;
}
</style>