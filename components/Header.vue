<template>
  <nav>
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <div class="flex-shrink-0">
          <nuxt-link to="/" class=""><img src="/img/logo.png" width="50" height="50" alt="Logo"></nuxt-link>
        </div>
        <div class="flex items-center">

          <div class="hidden md:block">
            <div class="ml-10 flex items-baseline space-x-6">
              <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
              <nuxt-link :exact-active-class="active ? 'bg-gray-900' : ''" class="dark:text-white px-3 py-2 rounded-md text-sm font-medium" to="/">
                Home
              </nuxt-link>
              <nuxt-link :exact-active-class="active ? 'bg-gray-900' : ''" class="dark:text-white px-3 py-2 rounded-md text-sm font-medium" to="/about">
                Sobre
              </nuxt-link>
              <nuxt-link :exact-active-class="active ? 'bg-gray-900' : ''" class="dark:text-white px-3 py-2 rounded-md text-sm font-medium" to="/contatos">
                Contatos
              </nuxt-link>
              <AppDarkModeToggle />
            </div>
          </div>
        </div>
        <div class="-mr-2 flex md:hidden">
          <!-- Mobile menu button -->
          <button type="button" @click="showMenu = !showMenu" aria-controls="mobile-menu" aria-expanded="false">
            <span class="sr-only">Open main menu</span>
            <!--
              Heroicon name: outline/menu

              Menu open: "hidden", Menu closed: "block"
            -->
            <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile menu, show/hide based on menu state. -->
    <div class="md:hidden" v-if="showMenu" id="mobile-menu">
      <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
        <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
        <nuxt-link to="/" :exact-active-class="active ? 'bg-gray-900' : ''" class=" dark:text-white block px-3 py-2 rounded-md text-base font-medium">
          Home
        </nuxt-link>
        <nuxt-link to="/about" :exact-active-class="active ? 'bg-gray-900' : ''" class=" dark:text-white block px-3 py-2 rounded-md text-base font-medium">
          Sobre
        </nuxt-link>
        <nuxt-link to="/contatos" :exact-active-class="active ? 'bg-gray-900' : ''" class=" dark:text-white block px-3 py-2 rounded-md text-base font-medium">
          Contatos
        </nuxt-link>
      </div>
    </div>
  </nav>
</template>
<script>
export default {
  components: {},

  data() {
    return {
      showMenu: false,
      active: false
    }
  },
  methods: {
    toggleNavbar: function(){
      this.showMenu = !this.showMenu;
    }
  }
}
</script>
