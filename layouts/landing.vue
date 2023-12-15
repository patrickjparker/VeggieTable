<template>
  <div class="h-screen flex flex-col">
    <NavBar :show-icons="false" />
    <div class="flex-grow">
      <slot />
    </div>
  </div>
</template>
