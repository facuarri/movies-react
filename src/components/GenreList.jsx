import { useRef } from "react"
import { Link } from "react-router-dom"
import { httpGetGenres } from "../utils/httpGetGenres"
import style from './GenreList.module.css'
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";

export const GenreList = () => {
    const genreList = httpGetGenres()

    const genreMenu = useRef(null)
    const btnBars = useRef(null)

    const onClickHandler = () => {
        const genreMenuNode = genreMenu.current
        const btnBarsNode = btnBars.current

        genreMenuNode.classList.toggle('show')
        btnBarsNode.classList.toggle('hide')
    };

    return(
        <>
        <div className={style.genreContainer} ref={genreMenu} >
            <AiOutlineClose className={style.btnMenuContainerClose} onClick={onClickHandler} />
            {genreList.map((genre) => {
                const path = `/genre/${genre.id}`
                return(
                    <Link to={path} key={genre.id} className={style.genreItem} onClick={onClickHandler}>{genre.name}</Link>
                )
            })}
        </div>
        <div className={style.btnMenuContainer} ref={btnBars} >
            <FaBars onClick={onClickHandler} className={style.btnMenu} />
        </div>
        </>
    )
}