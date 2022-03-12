<template>
  <div id="app">
    <h2>Marvel Phase Quiz</h2>
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/phase1">Phase 1 ({{this.$root.$data.phase1.length}})</router-link> |
      <router-link to="/phase2">Phase 2 ({{this.$root.$data.phase2.length}})</router-link> |
      <router-link to="/phase3">Phase 3 ({{this.$root.$data.phase3.length}})</router-link> |
      <router-link to="/phase4">Phase 4 ({{this.$root.$data.phase4.length}})</router-link>
    </nav>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
