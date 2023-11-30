import React, {FC, useEffect} from 'react';
import {NavLink, useParams, useSearchParams} from "react-router-dom";

import {useAppDispatch, useAppSelector} from "../../hooks/reduxHooks";
import {urls} from "../../constants";
import css from './Genre.module.css';
import {genresActions} from "../../redux";


const MoviesListByGenre: FC = () => {
    const {genreId} = useParams<{ genreId: string }>();
    const [query, setQuery] = useSearchParams({page: '1'});
    const page: string = query.get('page') || '1';

    const {results: movies, total_pages} = useAppSelector(state => state.genres);
    const dispatch = useAppDispatch();


    useEffect(() => {
        dispatch(genresActions.getById({genreId: +`${genreId}`, page: +page}))
    }, [dispatch, genreId, page, total_pages]);


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
            <ul className={css.ul}>
                {movies.map((movie) => (
                    <li className={css.movieG} key={movie.id}>
                        <NavLink to={`/movie/${movie.id}?language=en-US`}><img className={css.img}
                                                                               src={movie.poster_path ? `${urls.movie.imgUrl}${movie.poster_path}` : `https://as1.ftcdn.net/v2/jpg/02/99/61/74/1000_F_299617487_fPJ8v9Onthhzwnp4ftILrtSGKs1JCrbh.jpg`}
                                                                               alt={movie.original_title}/></NavLink>
                        <h6 className={css.titleM}>{movie.original_title}</h6>
                    </li>
                ))}
            </ul>
            <div className={css.btns}>
                <button className={css.btn} onClick={handlePagePrev} disabled={page === '1'}> &lt; </button>
                <span> Page: {page} out {total_pages}</span>
                <button className={css.btn} onClick={handlePageNext}
                        disabled={page === `${total_pages}`}> &gt; </button>
            </div>
        </div>
    );
};

export {MoviesListByGenre};