<template>
  <div>
    <ContentList v-slot="{ list }">
      <NuxtLink
        v-for="article in list"
        :key="article._path"
        :to="`/blog${article._path}`"
      >
        <h2>{{ article.title }}</h2>
        <p>{{ article.description }}</p>
        <div>{{ article }}</div>
        <hr>
      </NuxtLink>
    </ContentList>
    <slot />
  </div>
</template>
