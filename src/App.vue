<template>
  <div id="app">
    <h2>Smart Images Delivery</h2>
    <nav>
      <div id="navbar" class="navbar">
          <router-link to="/rough">Rough</router-link>
          <router-link to="/lazy">Lazy Loading</router-link>
          <router-link to="/compressed">Compressed Images</router-link>
          <router-link to="/responsive">Responsive Images</router-link>
          <router-link to="/webp">WebP Format</router-link>
          <router-link to="/cdn">Lets upload to CDN!</router-link>
          <router-link to="/extra">Extra Life!</router-link>
      </div>
    </nav>
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
