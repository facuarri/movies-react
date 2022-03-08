import { useEffect, useState } from 'react'
import { httpGet } from '../utils/httpGet'
import { MovieCard } from './MovieCard'
import styles from './MoviesGrid.module.css'
import { Spinner } from './Spinner'
import InfiniteScroll from 'react-infinite-scroll-component'
import { Empty } from './Empty'
import { GenreTitle } from './GenreTitle'

export const MoviesGrid = ({ search, genreId, genreName }) => {
    const [movies, setMovies] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [page, setPage] = useState(1)
    const [hasMore, setHasMore] = useState(true)

    const nextPage = () => setPage(prevValue => prevValue + 1)

    useEffect(() => {
        const searchUrl = search ? "/search/movie?query=" + search + "&page=" + page : "/discover/movie?page=" + page + "&with_genres=" + genreId
        httpGet(searchUrl)
        .then((data) => {setMovies((prevValues) => prevValues.concat(data.results))
                        setHasMore(data.page < data.total_pages)
                        setIsLoading(false)})
    }, [search, page, genreId])

    if(!isLoading && movies.length === 0) {
        return <Empty />
    }

    return (
        <>
        {(genreName && !search) && <GenreTitle genreName={genreName} />}
        <InfiniteScroll
            dataLength={movies.length}
            hasMore={hasMore}
            loader= {<Spinner />}
            next={nextPage}
        >
        <ul className={styles.moviesGrid}>
            {movies.map((movie) => {
                return(
                    <MovieCard key={movie.id} id={movie.id} title={movie.title} imgUrl={movie.poster_path} />
                )
            })}
        </ul>
        </InfiniteScroll>
        </>
    )
}