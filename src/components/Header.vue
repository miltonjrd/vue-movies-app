<script lang="ts">
import { RouterLink } from 'vue-router';

export default {

};
</script>

<template>
    <header class="bg-gray-900">
        <div class="container flex justify-between items-center mx-auto px-4 shadow-lg">
            <h4 class="text-yellow-500">
                <RouterLink to="/">
                    FILMES
                </RouterLink>
            </h4>
            <form>
                <input 
                    type="text" 
                    class="bg-gray-800 w-96 px-4 py-2 rounded-md text-white border border-transparent focus:border-neutral-700" 
                    placeholder="Pesquise seu filme favorito" 
                />
            </form>
            <div />
        </div>
    </header>
</template>

<style scoped>
header {
    position: sticky;
    top: 0;
    height: 65px;
    display: flex;
    z-index: 40;
}
</style>