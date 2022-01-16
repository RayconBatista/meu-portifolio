<template>
  <div>
    <!-- Banner commented -->
    <section>
      <Banner />
    </section>

    <!-- /Banner -->

    <!-- Biography -->
<!--    <Biography />-->
    <!-- /Biography -->

    <section id="my-work">
      <Feactures />
    </section>

<!--    <div class="container max-w-6xl mx-auto px-4">-->
<!--      <ProgressFactories/>-->
<!--    </div>-->

    <section>
      <Experiences />
    </section>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  components: {},
  jsonld() {
    return {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'Raycon Lima Batista',
      url: 'https://rayconlimabatista.com.br',
      logo: 'https://rayconlimabatista.com.br/img/avatar_profile.jpeg',
    }
  },
}
</script>
