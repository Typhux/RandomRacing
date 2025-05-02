<script setup>
import { ref, computed } from 'vue'
import Home from './components/Home.vue'
import Admin from './components/Admin/admin_home.vue'
import Track from './components/Admin/track.vue'
import NewTrack from './components/Admin/newTrack.vue'

const routes = {
  '/': Home,
  '/admin': Admin,
  '/admin/track': Track,
  '/admin/track/newtrack': NewTrack
}

const currentPath = ref(window.location.hash)

window.addEventListener('hashchange', () => {
  currentPath.value = window.location.hash
})

const currentView = computed(() => {
  return routes[currentPath.value.slice(1) || '/'] || NotFound
})
</script>

<template>

  <main>
    <a href="#">RANDOM RACING</a>
    <component :is="currentView" />
  </main>
</template>

<style  scoped>
main{
  height: 690px;
  width: 100%;
  background-color: rgb(37, 37, 37);
  color: aliceblue;
}

a{
  color: rgb(50, 50, 179);
  background-color: rgb(37, 37, 37);
  border: solid 1px rgb(50, 50, 179);
  text-decoration: none;
}

a:hover{
  color: purple;
  border: solid 1px purple;
}

h1{
  color: green;
}
</style>