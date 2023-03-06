import { Container } from 'inversify';
import MovieHttpGateway from './gateways/movie-http.gateway';
import http from './http';

import GetNowPlayingMoviesUseCase from '../application/movie/get-now-playing-movies.usecase';
import GetTopRatedMoviesUseCase from '../application/movie/get-top-rated-movies.usecase';
import GetMovieByIdUseCase from '../application/movie/get-movie-by-id.usecase';

export const Registry = {
    HttpAdapter: Symbol.for("HttpAdapter") ,
    MovieGateway: Symbol.for("MovieGateway"),
    GetTopRatedMoviesUseCase: Symbol.for("GetTopRatedMoviesUseCase"),
    GetNowPlayingMoviesUseCase: Symbol.for("GetNowPlayingMoviesUseCase"),
    GetMovieByIdUseCase: Symbol.for("GetMovieByIdUseCase")
};

export const container = new Container();

container.bind(Registry.HttpAdapter).toConstantValue(http);
container.bind(Registry.MovieGateway).toDynamicValue((ctx) => {
    return new MovieHttpGateway(ctx.container.get(Registry.HttpAdapter));
});

// registry usecases
container.bind(Registry.GetTopRatedMoviesUseCase).toDynamicValue((ctx) => {
    return new GetTopRatedMoviesUseCase(ctx.container.get(Registry.MovieGateway));
});
container.bind(Registry.GetNowPlayingMoviesUseCase).toDynamicValue((ctx) => {
    return new GetNowPlayingMoviesUseCase(ctx.container.get(Registry.MovieGateway));
});
container.bind(Registry.GetMovieByIdUseCase).toDynamicValue((ctx) => {
    return new GetMovieByIdUseCase(ctx.container.get(Registry.MovieGateway));
});