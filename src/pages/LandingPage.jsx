import { useSearchParams } from "react-router-dom"
import { GenreGrid } from "../components/GenreGrid"
import { Search } from "../components/Search"
import { useDebounce } from "../hooks/useDebounce"

export const LandingPage = () => {

    const [query] = useSearchParams()
    const search = query.get("search")
    const debouncedSearch = useDebounce(search, 300)

    return (
        <div>
            <Search />
            <GenreGrid key={debouncedSearch} search={debouncedSearch} />
        </div>
    )
}