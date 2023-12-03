import {axiosService} from "./axiosService";

import {urls} from "../constants";
import {IRes} from "../types/IResType";
import {IMovie, IMovieCredits, IMovieRes, ISearch, IVideos} from "../interfaces";

const movieService = {
    getAll:(page: string):IRes<IMovieRes> => axiosService.get(urls.movie.base, {params:{page}}),
    getById:(id:number):IRes<IMovie> => axiosService.get(urls.movie.byId(id)),
    getMovieCreditById:(id:number):IRes<IMovieCredits> => axiosService.get(urls.movie.movieCredits(id)),
    getMoviesFromSearch:(page: string, query: string):IRes<ISearch> => axiosService.get(urls.movie.searchMovie(), {params: {page, query}}),
    getTrendingMovies:(page: string):IRes<IMovieRes> => axiosService.get(urls.movie.trending(), {params: {page}}),
    getMovieTrailer:(id:number):IRes<IVideos> => axiosService.get(urls.video(id))
}

export {
    movieService
}