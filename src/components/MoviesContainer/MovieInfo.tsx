import React, {FC, useEffect} from 'react';
import {NavLink, useParams} from "react-router-dom";

import {urls} from "../../constants";
import {StarsRating} from "./StarsRating";
import {IGenre, IMovie} from "../../interfaces";
import {useAppDispatch, useAppSelector} from "../../hooks/reduxHooks";
import {movieActions} from "../../redux";
import css from './Movies.module.css';


interface IProps {
    movie: IMovie;
    genres: IGenre[],
}

const MovieInfo: FC<IProps> = ({movie}) => {

    const {poster_path, original_title, overview, vote_average, genres, release_date, runtime} = movie;

    const imageMovie = poster_path
        ? `${urls.movie.imgUrl}${poster_path}`
        : `https://as1.ftcdn.net/v2/jpg/02/99/61/74/1000_F_299617487_fPJ8v9Onthhzwnp4ftILrtSGKs1JCrbh.jpg`;

    const formatDuration = (duration: number): string => {
        const hours = Math.floor(duration / 60);
        const minutes = duration % 60;
        return `${hours}h ${minutes}min`;
    };

    const formattedDuration = formatDuration(runtime);

    const dispatch = useAppDispatch();
    const {trailers} = useAppSelector(state => state.movies)
    const {id} = useParams();

    const teaser = trailers.filter(item => item.type === 'Teaser' || item.type === 'Trailer')


    useEffect(() => {
        dispatch(movieActions.getMovieTrailer({id: +`${id}`}))
    }, [id, dispatch]);

    return (
        <div className={css.Info}>
            <div className={css.movieDetails}>
                <div><img className={css.imageInfo} src={imageMovie} alt={original_title}/></div>
                <div className={css.titleOverview}>
                    <div className={css.titleInfo}>{original_title}</div>
                    <div className={css.overview}>{overview}</div>
                    <div>
                        <h1 className={css.trailer}>Trailer:</h1>
                        <iframe className={css.video}
                                width="1400" height="790"
                                src={`https://www.youtube.com/embed/${teaser.length ? teaser[0].key : "C41q5YLnF10"}`}
                                title="YouTube video player"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen>
                        </iframe>
                    </div>
                </div>
            </div>
            <div className={css.movieAdditional}>
                <div className={css.stars}>
                    <StarsRating value={vote_average}/>
                    <h1 className={css.additional}>Rating:</h1>
                    <div className={css.descriptions}>{vote_average}</div>
                </div>
                <div>
                    <h1 className={css.additional}>Genres:</h1>
                    <div className={css.descriptions}>
                        {genres && genres.map(genre =>
                            <NavLink
                                className={css.descriptions} key={genre.id}
                                to={`/genre/${genre.id}`}>{genre.name}</NavLink>
                        )}
                    </div>
                </div>
                <div>
                    <h1 className={css.additional}>Release Date:</h1>
                    <div className={css.descriptions}>{release_date}</div>
                </div>
                <div>
                    <h1 className={css.additional}> Duration:</h1>
                    <div className={css.descriptions}>{formattedDuration}</div>
                </div>
            </div>
        </div>
    );
};

export {MovieInfo};

