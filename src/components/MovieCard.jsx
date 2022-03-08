import styles from './MovieCard.module.css'
import { Link } from 'react-router-dom'
import { getMovieImg } from '../utils/getMovieImg'

export const MovieCard = ({ title, imgUrl, id}) => {

    const image = getMovieImg(imgUrl, 300)
    return (
        <>
            <li className={styles.movieCard}>
                <Link to={"/movie/" + id}>
                    <div className={styles.imgContainer}>
                        <img className={styles.movieImage} src={image} alt={title} />
                    </div>
                    <div>
                        {title}
                    </div>
                </Link>
            </li>
        </>
    )
}