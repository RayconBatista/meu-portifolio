<template>
  <div class="container max-w-6xl px-4 py-20 mx-auto">
    <div class="flex flex-col items-center justify-between space-y-6 lg:flex-row lg:space-y-0 lg:space-x-10">
      <div class="flex-shrink-0 mt-4 mb-5 lg:ml-auto lg:mb-0">
        <img
          width="250" height="250"
          class="w-full border-4 border-green-600 rounded-full md:w-3/5"
          data-src="/img/avatar_profile.webp"
          v-lazy-load alt="Raycon Lima">
      </div>
      <div class="w-full lg:w-1/2">
        <div class="space-y-5 sm:space-y-6">
          <h3 class="text-3xl font-semibold dark:text-white md:text-4xl">Meu nome é Raycon</h3>
          <div class="text-sm font-medium text-gray-400 dark:text-white">Desenvolvedor FullStack</div>
          <p class="w-full text-lg text-justify dark:text-white sm:w-4/5">
            Meu nome é Raycon e a programação é minha paixão. Há dois anos, decidi mergulhar de cabeça nesse universo 
            fascinante e tenho trabalhado em projetos desafiadores desde então. Já tive a oportunidade de trabalhar em 
            sites com foco em SEO, sistemas ERP e gestão de RH, mas meu amor pela tecnologia me impulsiona sempre a buscar 
            mais.
          </p>
          <p class="w-full text-lg text-justify dark:text-white sm:w-4/5">
            A cada dia, me dedico com afinco para aprimorar minhas habilidades em programação e aprender novas tecnologias. 
            Para mim, a programação não é apenas uma profissão, é um estilo de vida. Estou sempre em busca de novos desafios
            e oportunidades para crescer na minha carreira e fazer a diferença no mundo da tecnologia.
          </p>
          <button class="bg-green-600 hover:bg-green-700 transition-colors duration-300 py-2.5 px-5 rounded-lg text-white font-semibold flex space-x-2.5">
            <a href="/pdf/Raycon%20Lima.pdf" download>Baixar o meu curriculo</a>
            <span>
                <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
            </span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Biography",
  jsonld() {
    return {
      "@context": "https://schema.org",
      "@type": "Person"
    };
  }
}
</script>

<style scoped>

</style>
