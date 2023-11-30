import React from 'react';

import css from './Pages.module.css';
import {MovieCredits, MoviesInfo} from "../components";

const MovieInfoPage = () => {

    return (
        <div className={css.movieInfo}>
            <MoviesInfo/>
            <MovieCredits/>
        </div>
    );
};

export {MovieInfoPage};