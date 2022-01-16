<template>
  <div>
    <Biography />
    <div class="container max-w-6xl mx-auto px-4">
      <ProgressFactories/>
    </div>
  </div>
</template>

<script>
export default {
  name: "Sobre.vue",
  jsonld() {
    return {
      "@context": "https://schema.org",
      '@type': 'AboutPage',
      author: 'Raycon Lima Batista',
    }
  }
}
</script>

<style scoped>

</style>
