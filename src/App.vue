<template>
  <div id="app">
    <nav>
      <router-link to="/">Tasks</router-link> |
      <router-link to="/about">About</router-link>
    </nav>
    <router-view />
  </div>
</template>

<script setup>
</script>

<style>
#app { max-width: 800px; margin: 0 auto; padding: 20px; font-family: Arial; }
nav { margin-bottom: 20px; }
</style>
