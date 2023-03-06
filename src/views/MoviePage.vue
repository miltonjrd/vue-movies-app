<script lang="ts">
import type GetMovieByIdUseCase from '@/core/application/movie/get-movie-by-id.usecase';
import type Movie from '@/core/domain/entitites/Movie';
import { container, Registry } from '@/core/infra/container';

export default {
    data() {
        return {
            movie: {} as Movie
        };
    },
    async created() {
        this.movie = await this.getMovieById();
    },
    methods: {
        async getMovieById() {
            const id = this.$route.params.id as string;
            const usecase = container.get<GetMovieByIdUseCase>(Registry.GetMovieByIdUseCase);

            const movie = await usecase.execute(+id);
            return movie;
        }
    }
};
</script>

<template>
    <div class="backdrop" :style="{'--backdrop': `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`}">
        <section class="container mx-auto py-4">
            <div class="relative z-10 flex">
                <div class="flex-shrink-0">
                    <div 
                        class="bg-gray-700 w-64 h-96 border border-yellow-400" 
                        :style="{ background: `url(https://image.tmdb.org/t/p/w400${movie.poster_path}) center center / contain no-repeat` }" 
                    />
                    <button type="button" class="bg-yellow-500 w-full mt-4 py-3 hover:bg-yellow-400 hover:shadow-lg hover:shadow-yellow-400/50">
                        Assistir
                    </button>
                </div>
                <div class="py-6 px-4">
                    <h2>{{ movie.title }}</h2>
                    <p>Sinopse: {{ movie.overview || 'Indisponível' }}</p>
                    <div class="mt-5">Nota: <span class="text-yellow-400">{{ movie.vote_average.toFixed(1) }}</span></div>
                    <div class="mt-5">Gêneros: {{ movie.genres.map(({ name }) => name).join(', ') }}</div>
                </div>
            </div>
        </section>
    </div>
</template>

<style scoped>
.backdrop {
    position: relative;
    height: 800px;
}

.backdrop::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    background: var(--backdrop) center center / cover no-repeat;
    width: 100%;
    height: 100%;
    opacity: .3;
}

.backdrop::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    background: linear-gradient(to top, #111827, transparent, #111827);
    width: 100%;
    height: 100%;
}

</style>