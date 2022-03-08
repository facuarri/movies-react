import { Header } from './components/Header'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from 'react-router-dom';
import { MovieDetails } from './pages/MovieDetails';
import { LandingPage } from './pages/LandingPage';
import { GenreGrid } from './components/GenreGrid';

export const App = () => {
    return (
        <>
        <Router>
            <header>
                <Link to="/"><Header /></Link>
            </header>
            <main>
                <Routes>
                    <Route path="/genre/:genreId" element={<GenreGrid />} />
                    <Route path="/movie/:movieId" element={<MovieDetails />} />
                    <Route path="/" element={<LandingPage />} />
                </Routes>
            </main>
        </Router>
        </>
    )
}