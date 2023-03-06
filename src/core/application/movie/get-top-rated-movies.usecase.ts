import type Movie from "@/core/domain/entitites/Movie";
import type MovieGateway from "@/core/domain/gateways/movie.gateway";

class GetTopRatedMoviesUseCase {
    constructor(private gateway: MovieGateway) {}

    async execute(): Promise<Movie[]> {
        const movies = await this.gateway.listTopRated();
        return movies;
    }
}

export default GetTopRatedMoviesUseCase;