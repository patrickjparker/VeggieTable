<template>
  <div class="h-screen flex flex-col">
    <NavBar />
    <main class="flex w-full justify-center bg-slate-100 flex-grow">
      <div class="w-[50rem] max-w-full bg-white">
        <slot />
      </div>
    </main>
  </div>
</template>
