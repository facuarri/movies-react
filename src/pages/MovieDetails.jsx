import { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { GenreList } from '../components/GenreList'
import { Spinner } from '../components/Spinner'
import { getMovieImg } from '../utils/getMovieImg'
import { httpGet } from '../utils/httpGet'
import styles from './MovieDetails.module.css'

export const MovieDetails = () => {

    const { movieId } = useParams()
    const [movie, setMovie] = useState(null)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        httpGet("/movie/" + movieId).then(data => setMovie(data));
        setIsLoading(false)
    }, [movieId]);

    if(isLoading){
        return <Spinner />
    }

    if(!movie){
        return null;
    }

    const image = getMovieImg(movie.poster_path, 500)
    return (
        <>
        <GenreList />
        <div className={styles.detailsContainer}>
            <img className={styles.col + " " + styles.movieImage} src={image} alt={movie.name}></img>
            <div className={styles.col}>
                <p><strong>Title: </strong>{movie.title}</p>
                <p><strong>Genres: </strong>{movie.genres.map(genre => genre.name).join(" - ")}</p>
                <p><strong>Description: </strong>{movie.overview}</p>
            </div>
        </div>
        </>
    )
}