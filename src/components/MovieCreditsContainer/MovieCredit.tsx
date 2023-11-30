import React, {FC} from 'react';

import {urls} from "../../constants";
import css from './MovieCredits.module.css';
import {IActor} from "../../interfaces";

interface IProps {
    movieCredits: IActor
}

const MovieCredit: FC<IProps> = ({movieCredits}) => {

    const {profile_path, original_name, character} = movieCredits;

    const imageActor = profile_path
        ? `${urls.movie.imgUrl}${profile_path}`
        : `https://as1.ftcdn.net/v2/jpg/02/99/61/74/1000_F_299617487_fPJ8v9Onthhzwnp4ftILrtSGKs1JCrbh.jpg`

    return (
        <li className={css.ul}>
            <div className={css.name}>{original_name}</div>
            <div><img className={css.image} src={imageActor} alt={original_name}/></div>
            <div>
                <h1 className={css.character}>Character:</h1>
                <p>{character}</p>
            </div>
        </li>
    );
};

export {MovieCredit};