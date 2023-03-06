import type Movie from "@/core/domain/entitites/Movie";
import type MovieGateway from "@/core/domain/gateways/movie.gateway";

class GetNowPlayingMoviesUseCase {
    constructor (private gateway: MovieGateway) {}

    async execute(): Promise<Movie[]> {
        const movies = await this.gateway.listNowPlaying();
        return movies;
    }
}

export default GetNowPlayingMoviesUseCase;