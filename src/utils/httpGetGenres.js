import { useEffect, useState } from "react"
import { httpGet } from "./httpGet"

export const httpGetGenres = () => {
    const genresUrl = "/genre/movie/list?api_key=" + process.env.REACT_APP_KEY + "&language=en-US"
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [genreList, setGenreList] = useState([])

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() =>{
        httpGet(genresUrl).then(({genres}) => setGenreList(genres))
    }, [genresUrl])

    return genreList
}