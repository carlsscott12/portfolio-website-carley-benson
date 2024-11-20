<template>
  <div id="app">
    <header>
      <nav>
        <ul>
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/portfolio">Portfolio</router-link></li>
        </ul>
      </nav>
    </header>
    <router-view></router-view> <!-- Displays routed components -->
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
nav ul {
  list-style: none;
  padding: 0;
  display: flex;
  gap: 1rem;
}
nav ul li {
  display: inline;
}
</style>
