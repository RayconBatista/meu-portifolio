<template>
  <footer class="container max-w-5xl mx-auto px-4 border-t border-gray-200">
    <div
      class="container flex flex-wrap items-center justify-center px-4 py-8 mx-auto  lg:justify-between"
    >
      <div class="flex flex-wrap justify-center">
        <ul class="flex items-center space-x-4">
          <li><nuxt-link class="dark:text-white" to="/" >Inicio</nuxt-link></li>
          <li><nuxt-link class="dark:text-white" to="/sobre" >Sobre</nuxt-link></li>
          <li><nuxt-link class="dark:text-white" to="/portfolio" >Projetos</nuxt-link></li>
          <li><nuxt-link class="dark:text-white" to="/contato" >Contato</nuxt-link></li>
        </ul>
      </div>
      <div class="flex justify-center mt-4 lg:mt-0">
        <ul class="flex flex-row justify-center" >
          <li v-for="(item, index) in data" :key="index">
            <a :href="item.url"><img class="mr-2" width="30" height="30" :data-src="item.img"  :alt="item.name" v-lazy-load/></a>
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<script>
import data from '~/static/social_medias.json'
export default {
  name: "Footer",
  data() {
    return {
      data
    }
  }
}
</script>

<style scoped>

</style>
