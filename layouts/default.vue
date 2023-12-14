<template>
  <div class="h-screen flex flex-col">
    <NavBar class="bg-light" />
    <main class="flex justify-center background flex-grow">
      <div class="w-[50rem] max-w-full bg-light">
        <slot />
      </div>
    </main>
  </div>
</template>

<style scoped>
.background {
  background-image: url(/images/celery.jpg);
  background-repeat: repeat;
  background-size: 60%;
}
</style>