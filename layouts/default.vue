<template>
  <div class="bg-gray-50 dark:bg-gray-800 text-gray-600 min-h-screen flex flex-col justify-between">
    <Header />
    <Nuxt />
    <Footer />
  </div>
</template>

<script>
export default {
  name: "Default.vue"
}
</script>
<style>
/* home route and active route will show in bold as it matches / and /about */
a.nuxt-link-active {
  font-weight: bold;
}
/* exact link will show the primary color for only the exact matching link */
a.nuxt-link-exact-active {
  background-color: #00c58e;
}
</style>