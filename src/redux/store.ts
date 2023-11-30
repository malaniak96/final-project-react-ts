import {configureStore} from "@reduxjs/toolkit";

import {genreReducer, movieReducer} from "./slices";



const store = configureStore({
    reducer: {
        movies: movieReducer,
        genres: genreReducer
    }
});

type RootState = ReturnType<typeof store.getState>
type AppDispatch = typeof store.dispatch



export type {
    RootState,
    AppDispatch
}

export {
    store
}