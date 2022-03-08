import { useParams, useSearchParams } from "react-router-dom"
import { MoviesGrid } from "./MoviesGrid";
import { useDebounce } from "../hooks/useDebounce"
import { httpGetGenres } from "../utils/httpGetGenres";
import { GenreList } from "./GenreList";

export const GenreGrid = () => {
    const { genreId } = useParams()

    const [query] = useSearchParams()
    const search = query.get("search")
    const debouncedSearch = useDebounce(search, 300)

    const genreList = httpGetGenres()
    const genreSelected = genreList.find(genre => genre.id === +genreId)
    let genreName = ""

    if(genreSelected){
        genreName = (genreSelected.name)
    }

    return (
        <>
            <GenreList />
            <MoviesGrid key={genreId} search={debouncedSearch} genreName={genreName} genreId={genreId} />
        </>
    )
}