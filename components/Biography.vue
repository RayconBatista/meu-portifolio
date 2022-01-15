<template>
  <div class="container max-w-6xl mx-auto px-4 py-20">
    <div class="flex flex-col lg:flex-row justify-between items-center space-y-6 lg:space-y-0 lg:space-x-10">
      <div class="flex-shrink-0 lg:ml-auto mb-5 lg:mb-0 mt-4">
        <img width="250" height="250" class="w-full md:w-3/5 rounded-full border-4 border-green-600" src="/img/avatar_profile.webp" alt="Raycon Lima">
      </div>
      <div class="w-full lg:w-1/2">
        <div class="space-y-5 sm:space-y-6">
          <h3 class="text-3xl dark:text-white md:text-4xl font-semibold">Meu nome é Raycon</h3>
          <div class="text-sm dark:text-white text-gray-400 font-medium">Desenvolvedor FullStack</div>
          <p class="w-full dark:text-white sm:w-4/5 text-lg text-justify">
            Formando-me na área de desenvolvimento de sistemas e com experiência como Programador em Manaus.
            E no tempo livre, atuo no mercado como freelancer, oferecendo soluções completas para sistemas web.
          </p>
          <button class="bg-green-600 hover:bg-green-700 transition-colors duration-300 py-2.5 px-5 rounded-lg text-white font-semibold flex space-x-2.5">
            <nuxt-link to="/contact">Baixar o meu curriculo</nuxt-link>
            <span>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
            </span>
          </button>
        </div>
      </div>
    </div>
<!--    <div class="container max-w-5xl mx-auto px-4 py-20">-->
<!--      <div class="flex flex-col-reverse lg:flex-row">-->
<!--        <div class="lg:pr-10">-->
<!--          <div class="text-sm text-gray-400 font-medium">Quem sou eu?</div>-->
<!--          <div class="text-2xl">Meu nome é Raycon....</div>-->
<!--          <div class="text-sm text-gray-400 font-medium mt-1">Desenvolvedor FullStack</div>-->
<!--          <div class="text-sm text-gray-400 font-medium mt-4">-->
<!--            <p class="mb-4">Formando-me na área de desenvolvimento de sistemas e com experiência como Programador em Manaus.</p>-->
<!--            <p>E agora, atuo no mercado como freelancer, oferecendo soluções completas para sistemas web.</p>-->
<!--          </div>-->

<!--          <div class="mt-4">-->
<!--            <a href="" class="inline-flex items-center text-yellow-900 bg-yellow-500 font-medium px-3 py-2 rounded">-->
<!--              Solicitar reserva-->
<!--              <svg class="w-4 h-4 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">-->
<!--                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>-->
<!--              </svg>-->
<!--            </a>-->
<!--          </div>-->
<!--        </div>-->

<!--        <div class="flex-shrink-0 lg:ml-auto mb-5 lg:mb-0">-->
<!--          <img width="300" src="https://i0.wp.com/maikon.biz/wp-content/uploads/2020/06/gerador-de-persona-maikonbiz.png?fit=1080%2C1080&ssl=1">-->
<!--        </div>-->
<!--      </div>-->
<!--    </div>-->
  </div>
</template>

<script>
export default {
  name: "Biography"
}
</script>

<style scoped>

</style>
