<script setup>
import { ref, computed } from 'vue'
import Home from './components/Home.vue'
import Admin from './components/Admin/AdminHome.vue'
import Track from './components/Admin/Track.vue'
import NewTrack from './components/Admin/NewTrack.vue'

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