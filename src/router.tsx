import {createBrowserRouter, Navigate} from "react-router-dom";

import {MainLayout} from "./layouts/MainLayout";
import {GenresPage, MovieInfoPage, MoviesFromGenresPage, MoviesPage, SearchPage} from "./pages";



const router = createBrowserRouter([
    {path: '', element: <MainLayout/>, children:[
            {index: true, element:<Navigate to={'movie'}/>},
            {path:'movie', element: <MoviesPage/>},
            {path:'movie/:id', element: <MovieInfoPage/>},
            {path:'genre', element:<GenresPage/>},
            {path:'genre/:genreId', element:<MoviesFromGenresPage/>},
            {path:'search', element: <SearchPage/>}
        ]}
]);

export {
    router
}