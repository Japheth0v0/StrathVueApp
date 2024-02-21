<script setup>
import Navbar from './components/Navbar.vue'
</script>

<template>
 <v-app>
  <Navbar/>
  <main>
    <router-view></router-view>
  </main>
  <footer/>
 </v-app>
</template>
