import React, {FC} from 'react';
import {NavLink} from "react-router-dom";
import {Switch} from "@mui/material";

import {useAppDispatch, useAppSelector} from "../../hooks/reduxHooks";
import {movieActions} from "../../redux";
import css from './Header.module.css';

const Header: FC = () => {

    const {isLightMode} = useAppSelector(state => state.movies);
    const dispatch = useAppDispatch();

    const lightMode = () => {
        dispatch(movieActions.setIsLightMode(!isLightMode));

        if (!isLightMode) {
            document.body.classList.add('light-mode');
        } else {
            document.body.classList.remove('light-mode');
        }
    };

    return (
        <div>
            <div className={css.Header}>
                <NavLink to={'movie'} className={css.movieDB}>The MovieDB</NavLink>
                <NavLink to={'movie'} className={css.navLinks}>Movies</NavLink>
                <NavLink to={'genre'} className={css.navLinks}>Genres</NavLink>
                <NavLink to={'search'} className={css.navLinks}>Search</NavLink>
                <Switch
                    checked={isLightMode}
                    onChange={lightMode}
                    inputProps={{'aria-label': 'controlled'}}
                ></Switch>
                <div className={'user'}>
                    <img className={css.userPhoto} alt={'user'}
                         src={"https://toppng.com/uploads/preview/circled-user-female-skin-type-4-icon-pro-icon-115534084504dcnr2bmdl.png"}/>
                    <h5>olga96</h5>
                </div>
            </div>
        </div>
    );
};

export {
    Header
};