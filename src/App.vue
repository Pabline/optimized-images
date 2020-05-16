<template>
  <div id="app">
    <router-link to="/"><h1>Smart Images Delivery</h1></router-link>
    <div id="navbar" class="navbar">
        <router-link to="/rough">Rough</router-link>
        <router-link to="/lazy">Lazy Loading</router-link>
        <router-link to="/compressed">Compressed Images</router-link>
        <router-link to="/responsive">Responsive Images</router-link>
        <router-link to="/webp">WebP Format</router-link>
        <router-link to="/cdn">Lets upload to CDN!</router-link>
        <router-link to="/extra">Extra Life!</router-link>
    </div>
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
body {
  box-sizing: border-box;
  margin: 0;
  font-family: arial;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  box-sizing: border-box;

  display: flex;
  flex-direction: column;
  justify-content: start;
  height: 100vh;
  width: 100vw;
  padding: 0 1rem;
}

a {
  color: #000000;
  text-decoration: none;
  cursor: pointer;
}

a.router-link-exact-active {
  text-decoration: underline;
}


.navbar {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  text-transform: uppercase;
  font-size: 1rem;
  height: 10vh;
}

.navbar a {
  margin: 5px;
}
</style>
