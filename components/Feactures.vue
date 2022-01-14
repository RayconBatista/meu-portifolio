<template>
  <div>

    <div class="container mx-auto px-4 py-12 sm:py-16 md:py-20 xl:py-28">
      <div class="space-y-4 text-center mb-10 lg:mb-16">
        <p class="text-lg md:max-w-md mx-auto">Serviços</p>
        <h2 class="text-4xl md:text-5xl font-semibold">Como eu posso te ajudar?</h2>
      </div>
      <div class="grid sm:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-10">
        <div class="bg-white transition-shadow duration-200 shadow hover:shadow-xl p-6 rounded-lg space-y-6" v-for="(item, index) in data" :key="index">
          <img class="w-full" :src="'/img/'+ item.img" alt="">
          <div class="space-y-4">
            <h4 class="text-2xl md:text-3xl font-semibold">{{ item.name }}</h4>
            <p>{{ item.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Feactures",
  data() {
    return {
      data: [
        {
          id: 1,
          name: 'Aplicação Web',
          img: 'web.png',
          description: 'Além de uma landing page, temos sites pessoais e comercial'
        },
        {
          id: 2,
          name: 'Aplicação Mobile',
          img: 'mobile.png',
          description: 'Aplicações em para dispositivos móveis com android'
        },
      ]
    }
  }
}
</script>

<style scoped>

</style>
