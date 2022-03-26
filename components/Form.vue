<template>
  <div class="container mx-auto">
    <div class="max-w-xl mx-auto bg-green-500 dark:bg-white rounded-md shadow-sm">
      <div class="p-2">
        <form action="" method="POST">
          <div class="mb-6">
            <label for="name" class="block mb-2 text-sm text-gray-600">Seu nome</label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="John Doe"
              required
              class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md  focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
            />
          </div>
          <div class="mb-6">
            <label for="email" class="block mb-2 text-sm text-gray-600">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="fulano@email.com"
              required
              class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md  focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
            />
          </div>
          <div class="mb-6">
            <label for="message" class="block mb-2 text-sm text-gray-600">mensagem</label>

            <textarea
              rows="5"
              name="message"
              id="message"
              placeholder="Sua mensagem"
              class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md  focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
              required></textarea>
          </div>
          <div class="mb-6">
            <button
              type="submit"
              class="w-full px-2 py-4 text-white bg-green-800 rounded-md  focus:bg-indigo-600 focus:outline-none"
            >
              Enviar
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Form.vue"
}
</script>

<style scoped>

</style>
