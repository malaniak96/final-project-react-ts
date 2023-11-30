import {IGenre} from "./genreInterface";

export interface IMovie {
    adult: boolean;
    backdrop_path: string;
    genres: IGenre[];
    id: number;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    release_date: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
    runtime: number;
}

export interface IMovieRes{
    page: number;
    total_pages: number;
    results: IMovie[];
}

export interface ISearch{
    page: number;
    total_pages: number;
    results: IMovie[];

}


