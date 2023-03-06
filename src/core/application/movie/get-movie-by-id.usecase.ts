import type MovieGateway from "@/core/domain/gateways/movie.gateway";

class GetMovieByIdUseCase {
    constructor(private gateway: MovieGateway) {}

    async execute(id: number) {
        const movie = await this.gateway.listById(id);
        return movie;
    }
}

export default GetMovieByIdUseCase;