import styles from './GenreTitle.module.css'

export const GenreTitle = ({ genreName }) => {
    return(
        <>
            <h3 className={styles.title} >{genreName}</h3>
            <div className={styles.hrBar} ></div>
        </>
    )
}