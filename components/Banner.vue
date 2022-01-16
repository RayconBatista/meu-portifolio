<template>
  <div class="banner" lazy-background="/img/banner.webp">
    <a class="flex justify-start items-start" href='https://www.freepik.es/vectores/fondo'>Vector de Fondo creado por pikisuperstar - www.freepik.es</a>
    <div class="container mx-auto px-4 h-full flex items-center justify-center">
      <div>
        <div class="text-center">
          <span class="text-gray-100">Welcome To My Website</span>
          <h1 class="text-gray-100 text-3xl">I'm Raycon Lima</h1>
          <ul class="flex flex-row justify-center" >
            <li v-for="(item, index) in data" :key="index">
              <a :href="item.url">
                <img width="50" height="50" :data-src="item.img"  :alt="item.name" v-lazy-load/>
              </a>
            </li>
          </ul>
        </div>
        <div class="mt-8 text-center">
          <a href="#my-work" class="text-white bg-green-800 font-medium px-3 py-2 rounded">Ver o meu trabalho</a>
          <nuxt-link to="contato" class="text-white bg-green-800 font-medium px-3 py-2 rounded">Contrate-me</nuxt-link>
        </div>
      </div>

    </div>

  </div>
</template>

<style scoped>
.banner {
  background: url('/img/banner.webp') no-repeat;
  background-size: cover;
  height: 450px
}
</style>

<script>
export default {
  name: "Banner",
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


