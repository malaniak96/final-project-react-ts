import React, {useEffect} from 'react';
import {useSearchParams} from "react-router-dom";

import {useAppDispatch, useAppSelector} from "../../hooks/reduxHooks";
import {Movie} from "./Movie";
import {movieActions} from "../../redux";
import css from './Movies.module.css';


const MoviesList = () => {

    const [query, setQuery] = useSearchParams({page: '1'});
    const page: string = query.get('page') || '1';

    const {movies, total_pages} = useAppSelector(state => state.movies);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(movieActions.getAll({page: page}))
    }, [page, dispatch, total_pages]);

    const handlePagePrev = () => {
        setQuery(prev => {
            prev.set('page', `${+page - 1}`)
            return prev
        })
    }

    const handlePageNext = () => {
        setQuery(prev => {
            prev.set('page', `${+page + 1}`)
            return prev
        })
    }

    return (
        <div>
            <div className={css.div}>
                {movies.map(movie => <Movie key={movie.id} movie={movie}/>)}
            </div>
            <div className={css.btns}>
                <button className={css.btn} onClick={handlePagePrev} disabled={page === '1'}> &lt; </button>
                <span> Page: {page} out of {total_pages}</span>
                <button className={css.btn} onClick={handlePageNext}
                        disabled={page === `${total_pages}`}> &gt; </button>
            </div>
        </div>
    );
};

export {MoviesList};