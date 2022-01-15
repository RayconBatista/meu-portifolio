<template>
  <div class="mt-4">
    <div class="text-center mb-8 lg:mb-8 pt-4">
      <h2 class="text-4xl dark:text-white md:text-5xl font-semibold">Tecnologias que uso</h2>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2">
      <div class="ml-4" v-for="(item, index) in data" :key="index">
        <div class="flex mb-2 items-center justify-between">
          <div>
            <span class="text-xs dark:text-white font-semibold inline-block py-1 px-2 uppercase rounded-full text-teal-600 bg-teal-200">
              {{ item.name }}
            </span>
          </div>
          <div class="text-right">
            <span class="text-xs dark:text-white font-semibold inline-block text-teal-600">
              {{  item.count }}
            </span>
          </div>
        </div>
        <div class="overflow-hidden h-2 mb-4 text-xs flex rounded bg-green-200">
          <div :style='{ width: item.count }' class=" shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-green-500"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProgressFactories",
  data() {
    return {
      data: [
        {
          id: 1,
          name: 'HTML5',
          count: '90%'
        },
        {
          id: 2,
          name: 'CSS3',
          count: '90%'
        },
        {
          id: 3,
          name: 'Javascript',
          count: '75%'
        },
        {
          id: 4,
          name: 'Jquery',
          count: '70%'
        },
        {
          id: 5,
          name: 'Laravel',
          count: '75%'
        },
        {
          id: 6,
          name: 'Vue',
          count: '70%'
        },
        {
          id: 7,
          name: 'Docker',
          count: '65%'
        },
        {
          id: 8,
          name: 'Flutter',
          count: '60%'
        },
      ]
    }
  }
}
</script>

<style scoped>

</style>
