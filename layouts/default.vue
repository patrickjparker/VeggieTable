<template>
  <div class="h-screen flex flex-col">
    <NavBar class="bg-light" />
    <main class="flex justify-center bg-brown flex-grow">
      <div class="w-[50rem] max-w-full bg-light">
        <slot />
      </div>
    </main>
  </div>
</template>
