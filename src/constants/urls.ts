const baseURL = 'https://api.themoviedb.org/3';

const API_KEY = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MWRmYjM1MGYyMzkyOWFlZDZkNTFmZjIyMzBmYmU1MiIsInN1YiI6IjY1NDhkZDc0OTI0Y2U2MDEzYmI3NWM5MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.zI7cgd7iUS14Rj7Gm_aDnFkD6VJwx-fD8WzbEkfKT-w';

const imgUrl = 'https://image.tmdb.org/t/p/w500';
const movie = '/discover/movie';
const genre = '/genre/movie/list';


const urls = {
    movie:{
        base: movie,
        imgUrl,
        byId: (id:number):string => `/movie/${id}`,
        movieCredits: (id:number):string => `/movie/${id}/credits`,
        searchMovie:():string => `/search/movie?query=`,
        trending: ():string => '/trending/movie/week',
    },
    genre: {
        base:genre,
        byId:(genreId:number):string=> `/genre/${genreId}/movies`
    }
}


export {
    baseURL,
    urls,
    API_KEY
}