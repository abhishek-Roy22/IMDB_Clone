import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import DiscoverMovies from './pages/DiscoverMovies';
import Favorites from './pages/Favorites';
import MovieDetails from './pages/MovieDetails';
import SearchMovies from './pages/SearchMovies';

function App() {
  return (
    <BrowserRouter>
      <div className="max-w-full mx-auto bg-slate-300">
        <Navbar />
        <Routes>
          <Route path="/" exact element={<DiscoverMovies />} />
          <Route path="/movieDetails/:id" exact element={<MovieDetails />} />
          <Route path="/search/:searchTerm" exact element={<SearchMovies />} />
          <Route path="/favorites" exact element={<Favorites />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
