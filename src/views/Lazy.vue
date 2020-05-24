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
</style>