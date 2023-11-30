import React, {FormEvent, useEffect} from 'react';
import {useSearchParams} from "react-router-dom";

import {SearchForm} from "./SearchForm";
import {SearchMovie} from "./SearchMovie";
import css from "../MoviesContainer/Movies.module.css";
import {useAppDispatch, useAppSelector} from "../../hooks/reduxHooks";
import {movieActions} from "../../redux";



const SearchMovies = () => {
    const [params, setParams] = useSearchParams({page: '1', query: ''});
    const page: string  = params.get('page') || '1';
    const query: string = params.get('query') || '';


    const {movies, total_pages} = useAppSelector(state => state.movies);
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (query) {
            dispatch(movieActions.getMoviesFromSearch({page:page, query:query}))
        } else {
            dispatch(movieActions.getTrendingMovies({page: page}))
        }
    }, [page, query, total_pages, dispatch]);


    const handlePagePrev = () => {
        setParams(prev => {
            prev.set('page', `${+page - 1}`)
            return prev
        })
    }

    const handlePageNext = () => {
        setParams(prev => {
            prev.set('page', `${+page + 1}`)
            return prev
        })
    }

    const handleSearchSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.currentTarget;

        if (form) {
            const queryInput = form.elements.namedItem('search') as HTMLInputElement;
            const query: string = queryInput?.value || '';

            setParams((prev) => {
                prev.set('query', query);
                prev.set('page', '1');
                return prev;
            });
        }
    };


    return (
        <div>
            <div>
                <SearchForm onSubmit={handleSearchSubmit}/>
            </div>
            <div className={css.div}>
                {movies.map(movie => <SearchMovie key={movie.id} movie={movie}/>)}
            </div>
            <div className={css.btns}>
                <button className={css.btn} onClick={handlePagePrev} disabled={page === '1'}> &lt; </button>
                    <span> Page: {page} out of {total_pages}</span>
                <button className={css.btn} onClick={handlePageNext} disabled={page === `${total_pages}`}> &gt; </button>
            </div>
        </div>
    );
};

export {SearchMovies};