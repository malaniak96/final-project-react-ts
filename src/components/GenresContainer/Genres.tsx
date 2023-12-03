import React, {useEffect} from 'react';

import {useAppDispatch, useAppSelector} from "../../hooks/reduxHooks";
import {Genre} from "./Genre";
import {genresActions} from "../../redux";
import css from './Genre.module.css';

const Genres = () => {

    const {genres} = useAppSelector(state => state.genres);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(genresActions.getAll())
    }, [dispatch]);

    return (
        <div className={css.genresPage}>
            {genres.map((genre) => <Genre key={genre.id} genre={genre}/>)}
        </div>
    );
};

export {Genres};