import styles from './Search.module.css'
import { FaSearch} from 'react-icons/fa'
import { useSearchParams } from 'react-router-dom'

export const Search = () => {
    const [query, setQuery] = useSearchParams()
    const search = query.get("search")

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    const handleChange = (e) => {
        const value = e.target.value
        setQuery({search: value})
    }

    return (
        <form className={styles.searchContainer} onSubmit={handleSubmit}>
            <div className={styles.searchBox}>
                <input type="text"  className={styles.searchInput} value={search || ""} onChange={handleChange}></input>
                <button type="submit"  className={styles.searchButton}><FaSearch /></button>
            </div>
        </form>
    )
}