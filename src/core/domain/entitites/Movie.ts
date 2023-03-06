class Movie {
    private _id: number;
    private _title: string;
    private _poster_path: string;
    private _backdrop_path: string;
    private _genre_ids: Array<number>;
    private _overview: string;
    private _vote_average: number;
    private _genres: Array<{id: number, name: string}>

    constructor(props: Movie) {
        this._id = props.id;
        this._title = props.title;
        this._poster_path = props.poster_path;
        this._genre_ids = props.genre_ids;
        this._overview = props.overview;
        this._vote_average = props.vote_average;
        this._backdrop_path = props.backdrop_path;
        this._genres = props.genres;
    }

    get id() {
        return this._id;
    }

    get title() {
        return this._title;
    }

    get poster_path() {
        return this._poster_path;
    }

    get genre_ids() {
        return this._genre_ids;
    }

    get overview() {
        return this._overview;
    }

    get vote_average() {
        return this._vote_average;
    }

    get backdrop_path() {
        return this._backdrop_path;
    }

    get genres() {
        return this._genres;
    }
}

export default Movie;