<template>
  
  <div class="container flex justify-center mx-auto px-4 py-10 sm:py-8 md:py-10 xl:py-5 h-full">
    <div class="w-full md:w-2/5 lg:w-4/5 px-2">
      <div class="text-center lg:mb-8">
        <h2 class="text-4xl md:text-5xl font-semibold dark:text-white">Meus projetos</h2>
      </div>
      <div class="grid my-20 sm:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-10">
        <div class="bg-white transition-shadow duration-200 shadow hover:shadow-xl p-6 rounded-lg space-y-6">
          <div class="space-y-2">
            <h4 class="text-2xl md:text-3xl font-semibold">PayFlow</h4>
            <p>O projeto PayFlow foi desenvolvido na Next Level Week Together. </p>
            <a target="_blank" href="https://github.com/meus-projetos-basicos/nlw_pay_flow">Repositŕio PayFlow</a>
          </div>
        </div>
        <div class="bg-white transition-shadow duration-200 shadow hover:shadow-xl p-6 rounded-lg space-y-6">
          <div class="space-y-2">
            <h4 class="text-2xl md:text-3xl font-semibold">Pokedex</h4>
            <p>Lista de pokemons. </p>
            <a target="_blank" href="https://github.com/meus-projetos-basicos/pokedex-php">Repositório Pokedex</a>
          </div>
        </div>
        <div class="bg-white transition-shadow duration-200 shadow hover:shadow-xl p-6 rounded-lg space-y-6">
          <div class="space-y-4">
            <h4 class="text-2xl md:text-3xl font-semibold">Laravel Subscription</h4>
            <p>Projeto educacional para planos de assinatura </p>
             <a target="_blank" href="https://github.com/R4YC0NLima/laravel-subscrition">Sistema de Assinatura</a>
            
          </div>
        </div>
        <!-- <div class="bg-white transition-shadow duration-200 shadow hover:shadow-xl p-6 rounded-lg space-y-6">
          <div class="space-y-4">
            <h4 class="text-2xl md:text-3xl font-semibold">The core Gráfica</h4>
            <p>Projeto profissional para um gráfica local. </p>
          </div>
        </div> -->
      </div>
    </div>
  </div>

</template>

<script>
import axios from "axios";
export default {
  name: "Projetos",

}
</script>

<style scoped>

</style>
