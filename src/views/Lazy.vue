<template>
<div class="view">
  <h2>{{this.$options.name}}</h2>
  <ImageGallery :imageList="todos" loading="lazy"></ImageGallery>
</div>
</template>

<script>
import ImageGallery from '@/components/ImageGallery.vue'
import { Images } from '@/images.js'

export default {
  name: 'Lazy',
  components: {
    ImageGallery
  },
  data() {
    return{
      todos: Images()
    }
  }
}
</script>

<style>
  .view {
    text-align: center;
    
    padding: 0.5rem 1rem;
    max-width: 100vw;
  }
</style>