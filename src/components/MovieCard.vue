<script lang="ts">
import type Movie from '@/core/domain/entitites/Movie';
import { RouterLink } from 'vue-router';
import type { PropType } from 'vue';

export default {
    props: {
        movie: {
            type: Object as PropType<Movie>,
            required: true
        }
    }
};
</script>

<template>
    <RouterLink
        :to="`/movie/${movie.id}`"
        class="group flex flex-col h-96 bg-gray-700 w-64 rounded-md m-4 border border-yellow-500 hover:scale-105 transition-transform duration-500 overflow-hidden" 
        :style="{ background: `url(https://image.tmdb.org/t/p/w400${movie.poster_path}) center center / contain` }"
    >
        <div class="flex opacity-0 group-hover:opacity-100 h-full flex-col justify-end transition-all">
            <div class="bg-gradient-to-t from-black h-32" />
            <div class="bg-black pb-4 px-3">
                <h6 class="leading-5">{{ movie.title }}</h6>
                <p class="leading-5 line-clamp-3 text-sm">{{ movie.overview }}</p>
                <small>Nota: <span class="text-yellow-500">{{ movie.vote_average }}</span></small>
            </div>
        </div>
    </RouterLink>
</template>