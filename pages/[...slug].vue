<script setup lang="ts">
// const { slug } = useRoute().params;
// const docRoute = Array.isArray(slug) ? slug.join("/") : "/";
</script>

<template>
  <div class="p-16">
    <ContentDoc>
      <template #not-found>
        <div class="flex flex-col items-center">
          <ProseH1 class="inline">Sorry!</ProseH1>
          <p>There is no page at this address.</p>
        </div>
      </template>
    </ContentDoc>
  </div>
</template>
