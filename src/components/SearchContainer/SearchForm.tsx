import React, {FC, useState} from 'react';

import css from './Search.module.css';


type IProps = {
    onSubmit: CallableFunction,
}
const SearchForm:FC<IProps> = ({ onSubmit }) => {

    const [query, setQuery] = useState<string>('')

    return (
        <form className={css.form} onSubmit={(e)  => onSubmit(e)}>
               <div>
                   <input
                       className={css.input}
                       name="search"
                       type="text"
                       placeholder={'Search movie'}
                       value={query}
                       onChange={(e) => setQuery(e.target.value)}
                   />
                   <button className={css.button}>Search</button>
               </div>
            <h1 className={css.trendingMovies}>Trending Movies of The Week: </h1>
        </form>
    );
};

export {SearchForm};