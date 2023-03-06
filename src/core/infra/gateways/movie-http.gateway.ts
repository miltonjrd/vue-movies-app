import type { AxiosInstance } from "axios";
import Movie from "../../domain/entitites/Movie";
import MovieGateway from "../../domain/gateways/movie.gateway";

type ReadCollectionsApiResponse = {
    page: number,
    results: Movie[],
    total_pages: number,
    total_results: number
};

class MovieHttpGateway extends MovieGateway {
    constructor(private http: AxiosInstance) {
        super();
    }

    async listNowPlaying(): Promise<Movie[]> {
        const response = await this.http.get<ReadCollectionsApiResponse>('movie/now_playing', {
            params: {
                language: 'pt-BR'
            }
        });
        const movies = response.data.results.map((movie) => new Movie(movie));
        return movies;
    }

    async listPopular(): Promise<Movie[]> {
        const response = await this.http.get<ReadCollectionsApiResponse>('movie/popular', {
            params: {
                language: 'pt-BR'
            }
        });
        const movies = response.data.results.map((movie) => new Movie(movie));
        return movies;
    }

    async listTopRated(): Promise<Movie[]> {
        const response = await this.http.get<ReadCollectionsApiResponse>('movie/top_rated', {
            params: {
                language: 'pt-BR'
            }
        });
        const movies = response.data.results.map((movie) => new Movie(movie));
        return movies;
    }

    async listById(id: number): Promise<Movie> {
        const response = await this.http.get<Movie>(`movie/${id}`, {
            params: {
                language: 'pt-BR'
            }
        });
        const movie = new Movie(response.data);
        return movie;
    }
}

export default MovieHttpGateway;