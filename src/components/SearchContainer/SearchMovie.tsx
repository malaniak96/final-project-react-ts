import React, {FC} from 'react';
import {NavLink} from "react-router-dom";

import {IMovie} from "../../interfaces";
import {urls} from "../../constants";
import css from './Search.module.css'

interface IProps{
    movie: IMovie
}

const SearchMovie:FC<IProps> = ({movie}) => {

    const {id,poster_path, original_title} = movie;

    const imageMovie = poster_path
        ? `${urls.movie.imgUrl}${poster_path}`
        : `https://as1.ftcdn.net/v2/jpg/02/99/61/74/1000_F_299617487_fPJ8v9Onthhzwnp4ftILrtSGKs1JCrbh.jpg`;

    return (
        <div className={css.movieSearch}>
            <NavLink to={`/movie/${id}?language=en-US`}><img className={css.img} src={imageMovie} alt={original_title}/></NavLink>
            <h1 className={css.titleSearch}>{movie.original_title}</h1>
        </div>
    );
};

export {SearchMovie};