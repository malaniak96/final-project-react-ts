import {createAsyncThunk, createSlice, isFulfilled} from "@reduxjs/toolkit";

import {IActor, IMovie, IMovieCredits, IMovieRes, ISearch} from "../../interfaces";
import {movieService} from "../../services";
import {AxiosError} from "axios";


interface IState {
    movie: IMovie,
    movies: IMovie[],
    page: number,
    results: IMovie[],
    total_pages: number,
    cast: IActor[]
}

const initialState: IState = {
    movie: {
        adult: false,
        backdrop_path: '',
        genres: [],
        id: 0,
        original_language: '',
        original_title: '',
        overview: '',
        popularity: 0,
        poster_path: '',
        release_date: '',
        title: '',
        video: false,
        vote_average: 0,
        vote_count: 0,
        runtime: 0,
    },
    movies: [],
    page: 1,
    results: [],
    total_pages: null,
    cast: []
}

const getAll = createAsyncThunk<IMovieRes, { page: string }>(
    'movieSlice/getAll',
    async ({page}, {rejectWithValue}) => {
        try {
            const {data} = await movieService.getAll(page);
            return data
        } catch (e) {
            const err = e as AxiosError
            return rejectWithValue(err.response?.data)
        }
    }
)

const getById = createAsyncThunk<IMovie, { id:number }>(
    'movieSlice/getById',
    async ({id}, {rejectWithValue}) => {
        try {
            const {data} = await movieService.getById(id);
            return data
        } catch (e) {
            const err = e as AxiosError
            return rejectWithValue(err.response?.data)
        }
    }
)

const getMovieCreditById = createAsyncThunk<IMovieCredits, { id: number }>(
    'movieSlice/getMovieCreditById',
    async ({id}, {rejectWithValue}) => {
        try {
            const {data} = await movieService.getMovieCreditById(id);
            return data
        } catch (e) {
            const err = e as AxiosError
            return rejectWithValue(err.response?.data)
        }
    }
)

const getTrendingMovies = createAsyncThunk<IMovieRes, {page: string}>(
    'movieSlice/getTrendingMovies',
    async ({page}, {rejectWithValue}) => {
        try {
            const {data} = await movieService.getTrendingMovies(page);
            return data
        } catch (e) {
            const err = e as AxiosError
            return rejectWithValue(err.response?.data)
        }
    }
)

const getMoviesFromSearch = createAsyncThunk<ISearch, {page: string, query: string}>(
    'movieSlice/getMoviesFromSearch',
    async ({ page, query}, {rejectWithValue}) => {
        try {
            const {data} = await movieService.getMoviesFromSearch(page, query);
            return data
        } catch (e) {
            const err = e as AxiosError
            return rejectWithValue(err.response?.data)
        }
    }
)

const movieSlice = createSlice({
    name: 'movieSlice',
    initialState,
    reducers: {},
    extraReducers: builder =>
        builder
            .addCase(getById.fulfilled, (state, action) => {
                const {poster_path, original_title, overview, vote_average, genres, release_date, runtime} = action.payload;
                state.movie.poster_path = poster_path;
                state.movie.original_title = original_title;
                state.movie.overview = overview;
                state.movie.vote_average = vote_average;
                state.movie.genres = genres;
                state.movie.release_date = release_date;
                state.movie.runtime = runtime;
            })
            .addCase(getMovieCreditById.fulfilled, (state, action) => {
                const {cast} = action.payload;
                state.cast = cast;
            })
            .addMatcher(isFulfilled(getAll, getTrendingMovies, getMoviesFromSearch), (state, action) => {
                const {results, total_pages} = action.payload;
                state.movies = results;
                state.total_pages = total_pages;
            })
});


const {reducer: movieReducer, actions} = movieSlice;


const movieActions = {
    ...actions,
    getAll,
    getById,
    getMovieCreditById,
    getTrendingMovies,
    getMoviesFromSearch
}

export {
    movieReducer,
    movieActions
}