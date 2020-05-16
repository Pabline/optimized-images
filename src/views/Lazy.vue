<template>
<div class="view">
  <h2>{{this.$options.name}}</h2>
</div>
</template>

<script>

export default {
  name: 'Lazy',
  components: {
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