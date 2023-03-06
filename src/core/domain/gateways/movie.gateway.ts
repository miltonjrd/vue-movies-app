import type Movie from "../entitites/Movie";

abstract class MovieGateway {
    abstract listNowPlaying(): Promise<Movie[]>;
    abstract listPopular(): Promise<Movie[]>;
    abstract listTopRated(): Promise<Movie[]>;

    abstract listById(id: number): Promise<Movie>;
}

export default MovieGateway;