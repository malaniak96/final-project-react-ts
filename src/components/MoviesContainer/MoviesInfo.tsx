import React, {FC, useEffect} from 'react';
import {useParams} from "react-router-dom";

import {MovieInfo} from "./MovieInfo";
import {useAppDispatch, useAppSelector} from "../../hooks/reduxHooks";
import {genresActions, movieActions} from "../../redux";


const MoviesInfo: FC = () => {

    const {movie, trailers} = useAppSelector(state => state.movies);
    const {genres} = useAppSelector(state => state.genres);
    const dispatch = useAppDispatch();
    const {id} = useParams();

    useEffect(() => {
        dispatch(movieActions.getById({id: +`${id}`}))
        dispatch(genresActions.getAll())
        dispatch(movieActions.getMovieTrailer({id: +`${id}`}))
    }, [id, dispatch]);


    return (
        <div>
            {movie && trailers && <MovieInfo movie={movie} genres={genres} key={movie.id}/>}
        </div>
    );
};

export {MoviesInfo};

