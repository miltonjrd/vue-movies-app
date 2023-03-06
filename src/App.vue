<script lang="ts">
import { RouterView } from 'vue-router';

import Header from './components/Header.vue';
import Home from './views/Home.vue';

export default {
  components: {
    Header,
    Home
  }
};
</script>

<template>
  <Header />
  <main class="bg-gray-800 bg-gradient-to-b from-transparent to-gray-900 text-white">
    <RouterView />
  </main>
</template>

<style scoped>

main {
    min-height: 100%;
}
</style>