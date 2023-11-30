import {axiosService} from "./axiosService";

import {urls} from "../constants";
import {IRes} from "../types/IResType";
import {IGenres, IMovieRes} from "../interfaces";



const genresService = {
    getAll: (): IRes<IGenres> => axiosService.get(urls.genre.base),
    getById:(genreId:number, page: number):IRes<IMovieRes> => axiosService.get(urls.genre.byId(genreId), {params:{page}}),
}

export {
    genresService
}