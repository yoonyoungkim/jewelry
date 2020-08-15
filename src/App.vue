<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #f4f7f6;
  display: flex;
  justify-content: center;
}

@import "~vue-material/dist/theme/engine";
@include md-register-theme("default", (
  primary: #3fffbe, // The primary color of your brand
  accent: #1a11e8 // The secondary color of your brand
));
</style>
