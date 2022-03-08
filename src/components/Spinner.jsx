import { CgSpinner } from 'react-icons/cg'
import styles from './Spinner.module.css'

export const Spinner = () => {
    return (
        <div className={styles.spinner} >
            <CgSpinner className={styles.spin} />
        </div>
    )
}