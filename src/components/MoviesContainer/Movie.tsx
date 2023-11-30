import React, {FC} from 'react';
import {NavLink} from "react-router-dom";

import {IMovie} from "../../interfaces";
import {urls} from '../../constants';
import css from './Movies.module.css';
import {StarsRating} from "./StarsRating";


interface IProps {
  movie: IMovie
}

const Movie: FC<IProps> = ({movie}) => {
    const {id, poster_path, original_title, vote_average, release_date} = movie;

    const date = new Date(release_date);
    const year = date.getFullYear();

    const imageMovie = poster_path
        ? `${urls.movie.imgUrl}${poster_path}`
        : `https://as1.ftcdn.net/v2/jpg/02/99/61/74/1000_F_299617487_fPJ8v9Onthhzwnp4ftILrtSGKs1JCrbh.jpg`;


    return (
        <div className={css.movie}>
            <div>({year})</div>
            <NavLink to={`/movie/${id}?language=en-US`}> <img className={css.img} src={imageMovie} alt={original_title}/></NavLink>
            <div className={css.titleMovie}>{original_title}</div>
            <div><StarsRating value={vote_average}/></div>
        </div>
    );
};

export {Movie};