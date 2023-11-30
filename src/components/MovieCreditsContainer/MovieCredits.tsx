import React, {FC, useEffect} from 'react';
import {useParams} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../hooks/reduxHooks";

import {MovieCredit} from "./MovieCredit";
import css from './MovieCredits.module.css';
import {movieActions} from "../../redux";


const MovieCredits:FC = () => {

    const {id} = useParams();
    const {cast} = useAppSelector(state => state.movies);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(movieActions.getMovieCreditById({id: +`${id}`}))
    }, [dispatch, id]);


    return (
        <>
        <h1 className={css.mainCast}>The Main Cast:</h1>
        <ul className={css.movieCredits}>
            {cast.map(movieCredits => <MovieCredit key={movieCredits.id} movieCredits={movieCredits}/>)}
        </ul>
        </>
    );
};

export {MovieCredits};