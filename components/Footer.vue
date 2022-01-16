<template>
  <footer class="container max-w-5xl mx-auto px-4 border-t border-gray-200">
    <div
      class="container flex flex-wrap items-center justify-center px-4 py-8 mx-auto  lg:justify-between"
    >
      <div class="flex flex-wrap justify-center">
        <ul class="flex items-center space-x-4">
          <li><nuxt-link class="dark:text-white" to="/" >Inicio</nuxt-link></li>
          <li><nuxt-link class="dark:text-white" to="/sobre" >Sobre</nuxt-link></li>
          <li><nuxt-link class="dark:text-white" to="/contato" >Contato</nuxt-link></li>
        </ul>
      </div>
      <div class="flex justify-center mt-4 lg:mt-0">
        <ul class="flex flex-row justify-center" >
          <li v-for="(item, index) in data" :key="index">
            <a :href="item.url"><img class="mr-2" width="30" height="30" :src="item.img" :alt="item.name"/></a>
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {
      data: [
        {
          id: 1,
          name: 'facebook',
          img: 'https://img.icons8.com/color/48/000000/facebook.png',
          url: 'https://www.facebook.com'
        },
        {
          id: 2,
          name: 'instagram',
          img: 'https://img.icons8.com/color/48/000000/instagram-new--v1.png',
          url: 'https://www.instagram.com'
        },
        {
          id: 3,
          name: 'twitter',
          img: 'https://img.icons8.com/color/48/000000/twitter--v1.png',
          url: 'https://www.twitter.com'
        },
        {
          id: 4,
          name: 'linkedin',
          img: 'https://img.icons8.com/color/48/000000/linkedin.png',
          url: 'https://www.linkedin.com'
        },
      ]
    }
  }
}
</script>

<style scoped>

</style>
