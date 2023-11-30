import React, {FC, useState} from 'react';
import {NavLink} from "react-router-dom";

import css from './Header.module.css';
import {Switch} from "@mui/material";


const Header:FC = () => {

    const [isLightMode, setIsLightMode] = useState(false);

    const lightMode = () => {

        if(!isLightMode){
            setIsLightMode((prevMode) => !prevMode);
            document.body.classList.add('light-mode');
        } else{
            setIsLightMode((prevMode) => !prevMode);
            document.body.classList.remove('light-mode');
        }

    };


    return (
     <div>
         <div className={css.Header}>
             <h1 className={css.movieDB}>The MovieDB</h1>
             <NavLink to={'movie'} >Movies</NavLink>
             <NavLink to={'genre'} >Genres</NavLink>
             <NavLink to={'search'}>Search</NavLink>
             <Switch
                 checked={isLightMode}
                 onChange={lightMode}
                 inputProps={{ 'aria-label': 'controlled'}}
             ></Switch>
             <div className={'user'}>
                 <img className={css.userPhoto} alt={'user'} src={"https://toppng.com/uploads/preview/circled-user-female-skin-type-4-icon-pro-icon-115534084504dcnr2bmdl.png"}/>
                 <h5>olga96</h5>
             </div>
         </div>
     </div>
    );
};

export {
    Header
};