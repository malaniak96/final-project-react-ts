import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {AxiosError} from "axios";

import {genresService} from "../../services";
import {IGenre, IMovie, IMovieRes} from "../../interfaces";

interface IState {
    genres: IGenre[],
    total_pages: number,
    results: IMovie[]
}

const initialState: IState = {
    genres: [],
    total_pages: null,
    results: []

}

const getAll = createAsyncThunk<IGenre[], void>(
    'genreSlice/getAll',
    async (_, {rejectWithValue}) => {
        try {
            const {data} = await genresService.getAll();
            return data.genres;

        } catch (e) {
            const err = e as AxiosError
            return rejectWithValue(err.response?.data)
        }
    }
)


const getById = createAsyncThunk<IMovieRes, { genreId: number, page: number }, any>(
    'genreSlice/getById',
    async ({genreId, page}, {rejectWithValue}) => {
        try {
            const {data} = await genresService.getById(genreId, page);
            return data
        } catch (e) {
            const err = e as AxiosError
            return rejectWithValue(err.response?.data)
        }
    }
)


const genreSlice = createSlice({
    name: 'genreSlice',
    initialState,
    reducers: {},
    extraReducers: builder =>
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                state.genres = action.payload;
            })
            .addCase(getById.fulfilled, (state, action) => {
                const {total_pages, results} = action.payload;
                state.total_pages = total_pages;
                state.results = results;
            })

});


const {reducer: genreReducer, actions} = genreSlice;


const genresActions = {
    ...actions,
    getAll,
    getById
}

export {
    genreReducer,
    genresActions
}