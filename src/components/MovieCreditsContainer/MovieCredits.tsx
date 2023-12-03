import React, {FC, useEffect} from 'react';
import {useParams} from "react-router-dom";

import {useAppDispatch, useAppSelector} from "../../hooks/reduxHooks";
import {MovieCredit} from "./MovieCredit";
import {movieActions} from "../../redux";
import css from './MovieCredits.module.css';


const MovieCredits: FC = () => {

    const {cast} = useAppSelector(state => state.movies);
    const dispatch = useAppDispatch();
    const {id} = useParams<string>();

    useEffect(() => {
        dispatch(movieActions.getMovieCreditById({id: +`${id}`}))
    }, [dispatch, id]);

    return (
        <div>
            <h1 className={css.mainCast}>The Main Cast:</h1>
            <ul className={css.movieCredits}>
                {cast.map(movieCredits => <MovieCredit key={movieCredits.id} movieCredits={movieCredits}/>)}
            </ul>
        </div>
    );
};

export {MovieCredits};