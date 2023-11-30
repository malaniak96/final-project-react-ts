import React, {FC} from 'react';
import {NavLink} from "react-router-dom";

import {IGenre} from "../../interfaces";
import css from './Genre.module.css';


interface IProps {
    genre: IGenre
}
const Genre:FC<IProps> = ({genre}) => {

    const {id,name} = genre;

    return (
        <div>
            <NavLink className={css.navlink} to={`${id}`}> <h3> {name}</h3></NavLink>
        </div>
    );
};

export {Genre};