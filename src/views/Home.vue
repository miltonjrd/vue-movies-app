<script lang="ts">
import type GetNowPlayingMoviesUseCase from '@/core/application/movie/get-now-playing-movies.usecase';
import type GetTopRatedMoviesUseCase from '@/core/application/movie/get-top-rated-movies.usecase';
import type Movie from '@/core/domain/entitites/Movie';
import { container, Registry} from '@/core/infra/container';

import { RouterLink } from 'vue-router';
import { Arrow } from '@egjs/flicking-plugins';

import MovieCard from '@/components/MovieCard.vue';

import '@egjs/flicking-plugins/dist/arrow.css';

export default {
    data() { 
        return {
            movies: {
                popular: [] as Movie[],
                now_playing: [] as Movie[],
            },
            sliderPlugins: [new Arrow()]
        }
    },
    async created() {
        this.movies.popular = await this.getTopRatedMovies();
        this.movies.now_playing = await this.getNowPlayingMovies();
    },
    methods: {
        async getTopRatedMovies() {
            const usecase = container.get<GetTopRatedMoviesUseCase>(Registry.GetTopRatedMoviesUseCase);
            const movies = await usecase.execute();
            return movies;
        },
        async getNowPlayingMovies() {
            const usecase = container.get<GetNowPlayingMoviesUseCase>(Registry.GetNowPlayingMoviesUseCase);
            const movies = await usecase.execute();
            return movies;
        }
    },
    components: {
        MovieCard
    }
};
</script>

<template>
    <section class="container mx-auto px-4 pt-10">
        <h4>Lançamentos</h4>
        <Flicking :options="{ align: 'prev', horizontal: true, autoResize: true, bound: true, circular: true }" :plugins="sliderPlugins">
            <MovieCard
                :key="index" 
                v-for="(movie, index) in movies.now_playing" 
                :movie="movie"
            />
            <template #viewport>
                <span class="flicking-arrow-prev"></span>
                <span class="flicking-arrow-next"></span>
            </template>
        </Flicking>
    </section>
    <section class="container mx-auto px-4 mt-10">
        <h4>Popular</h4>
        <Flicking :options="{ align: 'prev', horizontal: true, autoResize: true, bound: true, circular: true }" :plugins="sliderPlugins">
            <MovieCard
                :key="index" 
                v-for="(movie, index) in movies.popular" 
                :movie="movie"
            />
            <template #viewport>
                <span class="flicking-arrow-prev"></span>
                <span class="flicking-arrow-next"></span>
            </template>
        </Flicking>
    </section>
</template>