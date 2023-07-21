<template>
  <img 
    class="lazyload" 
    :data-src="src"
    :alt="alt"
    src="data:image/png;base64, iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkqAcAAIUAgUW0RjgAAAAASUVORK5CYII="
    v-lazy-load
  />
</template>
<script>
export default {
  props: { 
    src: { type: String, required: true },
    alt: { type: String, required: false}
  }
};
</script>