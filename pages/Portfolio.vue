<template>
  
  <div class="container flex justify-center h-full px-4 py-10 mx-auto sm:py-8 md:py-10 xl:py-5">
    <div class="w-full px-2 md:w-2/5 lg:w-4/5">
      <div class="text-center lg:mb-8">
        <h2 class="text-4xl font-semibold md:text-5xl dark:text-white">Meus projetos</h2>
      </div>
      <div class="grid gap-6 my-20 sm:grid-cols-2 xl:grid-cols-4 lg:gap-10">
        <div class="p-6 space-y-6 transition-shadow duration-200 bg-white rounded-lg shadow hover:shadow-xl">
          <div class="space-y-2">
            <h4 class="text-2xl font-semibold md:text-3xl">PayFlow</h4>
            <p>O projeto PayFlow foi desenvolvido na Next Level Week Together. </p>
            <a target="_blank" href="https://github.com/meus-projetos-basicos/nlw_pay_flow">Repositŕio PayFlow</a>
          </div>
        </div>
        <div class="p-6 space-y-6 transition-shadow duration-200 bg-white rounded-lg shadow hover:shadow-xl">
          <div class="space-y-2">
            <h4 class="text-2xl font-semibold md:text-3xl">Pokedex</h4>
            <p>Lista de pokemons. </p>
            <a target="_blank" href="https://github.com/meus-projetos-basicos/pokedex-php">Repositório Pokedex</a>
          </div>
        </div>
        <div class="p-6 space-y-6 transition-shadow duration-200 bg-white rounded-lg shadow hover:shadow-xl">
          <div class="space-y-4">
            <h4 class="text-2xl font-semibold md:text-3xl">Laravel Subscription</h4>
            <p>Projeto educacional para planos de assinatura </p>
             <a target="_blank" href="https://github.com/RayconBatista/laravel-subscrition">Sistema de Assinatura</a>
            
          </div>
        </div>
        <!-- <div class="p-6 space-y-6 transition-shadow duration-200 bg-white rounded-lg shadow hover:shadow-xl">
          <div class="space-y-4">
            <h4 class="text-2xl font-semibold md:text-3xl">The core Gráfica</h4>
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
