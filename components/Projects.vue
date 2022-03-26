<template>
  <div class="container max-w-8xl mx-auto px-4">
    <section class="lg:pt-[120px] pb-8 lg:pb-[90px] relative z-20 overflow-hidden">
      <div class="container">
        <div class="flex flex-wrap -mx-4">
          <div class="w-full px-4">
            <div class="flex justify-center text-center mx-auto max-w-[1024px]">
              <div class="flex justify-start">                 
                <button @click="filterBtnTech('')" class="text-white bg-green-800 font-medium px-3 mr-2 rounded">Todos</button>
                <div v-for="(tech, index) in techs" :key="index">
                  <button @click="filterBtnTech(tech.name)" class="text-white bg-green-800 font-medium px-3 mr-2 rounded">{{ tech.name }}</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="flex flex-wrap justify-center container max-w-full mx-auto">
          <div class="w-full md:w-2/5 lg:w-4/5 px-2">
            <div class="grid my-20 sm:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-10">
              <div v-for="(item, index) in filterProjectsByType" :key="index" class="flex justify-center">
                <div class="relative block p-6 rounded-lg shadow-lg bg-green-500 dark:bg-white max-w-sm">
                  <h5 class="text-2xl md:text-3xl font-semibold mb-2 text-white dark:text-gray-600">{{ item.name }}</h5>
                  <p class="text-base mb-10 text-white dark:text-gray-700">
                    {{ item.description }}
                  </p>
                   
                  <a target="_blank" :href="item.repo" class="absolute bottom-3 right-3 inline-flex float-right px-6 py-2.5 bg-green-800 text-white font-medium text-xs 6eading-tight uppercase rounded shadow-md hover:bg-green-600 hover:shadow-lg focus:bg-green-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-800 active:shadow-lg transition duration-150 ease-in-out mt-3">
                    {{ item.name }}
                    <svg class="ml-2 -mr-1 w-4 h-4 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                    </svg>
                    </a>
                </div>
              </div>
            </div>
          </div>  
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import projects from '~/static/projects.json'
import techs from '~/static/techs.json'
export default {
  name: "Projects",
  data() {
    return {
      type: '',
      tech: '',
      active: 0,
      techs: techs,
      projects: projects,
    }
  },
  computed: {

    filterProjectsByType()
    {
      return this.projects.filter(item => !item.tech.indexOf(this.tech))
    },

  },
  methods: {
    filterBtnProj: function(type) {
      this.type = type
    },
    filterBtnTech: function(tech) {
      this.tech = tech
    }
  }
}
</script>

<style scoped>

</style>
