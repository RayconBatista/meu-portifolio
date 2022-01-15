<template>
  <div class="container max-w-8xl mx-auto px-4">
    <section class="pt-20 lg:pt-[120px] pb-12 lg:pb-[90px] relative z-20 overflow-hidden">
      <div class="container">
        <div class="flex flex-wrap -mx-4">
          <div class="w-full px-4">
            <div class="text-center mx-auto mb-[60px] lg:mb-20 max-w-[510px]">
              <div class="mb-4">
                <button @click="changeToExperience" class="text-white bg-green-500 font-medium px-3 py-2 rounded">Experiência</button>
                <button @click="changeToAcademic" class="text-white bg-green-500 font-medium px-3 py-2 rounded">Formação Acadêmica</button>
              </div>
            </div>
          </div>
        </div>
        <div class="flex flex-wrap justify-center mx-auto">
          <div v-show="experience" class="w-full md:w-1/2 lg:w-3/5 px-2">
            <div class="bg-white rounded-xl relative z-10 overflow-hidden border border-primary border-opacity-20 shadow shadow-pricing py-8 px-6 sm:p-10 lg:py-8 lg:px-4 xl:p-10 mb-10">
              <h2 class="text-primary font-semibold text-lg block mb-1">
                Desenvolvedor FullStack - Laravel, Vue e Flutter
              </h2>

              <p class="font-bold bg-green-300 sm:w-1/3  p-1 rounded text-dark mb-5 text-[42px]">
                2020 - 2021
              </p>
            </div>
          </div>
          <div v-show="academic" class="w-full md:w-1/2 lg:w-3/5 px-2">
            <div class="bg-white rounded-xl relative z-10 overflow-hidden border border-primary border-opacity-20 shadow shadow-pricing py-8 px-6 sm:p-10 lg:py-8 lg:px-4 xl:p-10 mb-10">
              <article>
                <h2 class="text-primary font-semibold text-lg block mb-1">
                  Análise e Desenvolvimento de Sistema
                </h2>
                <p class="font-bold bg-green-300 sm:w-1/3  p-1 rounded text-dark mb-5 text-[42px]">
                  Cursando
                </p>
              </article>
              <article>
                <h2 class="text-primary font-semibold text-lg block mb-1">
                  Técnico em Redes de Computadores
                </h2>
                <p class="font-bold bg-green-300 sm:w-1/3 p-1 rounded text-dark mb-5 text-[42px]">
                  2016 - 2018
                </p>
              </article>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "Experiences",
  data() {
    return {
      experience  : true,
      academic    : false,
    }
  },
  methods: {
    changeToExperience() {
      this.experience = !this.experience
      this.academic   = false
    },
    changeToAcademic() {
      this.academic   = !this.academic
      this.experience = false
    },
  }
}
</script>

<style scoped>

</style>
