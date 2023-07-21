<template>
  <div class="container mx-auto">
    <div class="max-w-xl mx-auto bg-green-500 rounded-md shadow-sm dark:bg-white">
      <div class="p-2">
        <form @submit.prevent="enviarEmail">
          <div class="mb-6">
            <label for="name" class="block mb-2 text-sm text-gray-600">Seu nome</label>
            <input
              type="text"
              name="name"
              id="name"
              v-model="form.name"
              placeholder="John Doe"
              required
              class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
            />
          </div>
          <div class="mb-6">
            <label for="email" class="block mb-2 text-sm text-gray-600">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              v-model="form.email"
              placeholder="fulano@email.com"
              required
              class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
            />
          </div>
          <div class="mb-6">
            <label for="message" class="block mb-2 text-sm text-gray-600">mensagem</label>

            <textarea
              rows="5"
              name="message"
              id="message"
              v-model="form.message"
              placeholder="Sua mensagem"
              class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
              required></textarea>
          </div>
          <div class="mb-6">
            <button
              type="submit"
              class="w-full px-2 py-4 text-white bg-green-800 rounded-md focus:bg-indigo-600 focus:outline-none"
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
  name: "Form.vue",
  data() {
    return {
      loading: false,
      form: {
        name: '',
        email: '',
        message: ''
      }
    }
  },
  methods: {
    async enviarEmail() {
      const emailEnviado = await this.$sendMail(this.form.email, 'Assunto do e-mail', this.form.message);
      if (emailEnviado) {
        console.log('E-mail enviado com sucesso!');
      } else {
        console.error('Não foi possível enviar o e-mail.');
      }
    },
    sendEmail() {
      this.loading = true
      this.$mail.send({
        from: this.form.email,
        subject: `Contato com ${this.form.name}`,
        text: this.form.message,
      })
      this.loading = false
    },
  },
}
</script>

<style scoped>

</style>
