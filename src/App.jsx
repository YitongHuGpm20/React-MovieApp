// Hooks
import { useState, useEffect } from 'react'

// Assets
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// Components
import Search from "./components/Search.jsx";
import Spinner from "./components/Spinner.jsx";

// API
const API_BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const API_OPTIONS = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer ' + API_KEY,
  }
}

const App = () => {
  // Initialize
  const [search, setSearch] = useState('');
  const [error, setError] = useState('');
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  
  // Fetch Movie Database
  const fetchMovies = async () => {
    try {
      const endpoint = `${API_BASE_URL}/discover/movie?sort_by=popularity.desc`;
      const response = await fetch(endpoint, API_OPTIONS);
      if(!response.ok) throw new Error('Failed to fetch movies from API');
      
      const data = await response.json();
      if(data.Response === 'False') {
        setError(data.Error || 'Failed to fetch movies from API');
        setMovies([]);
        return;
      }
      
      // When fetch data successfully
      setMovies(data.results || []);
    } catch (error) {
      console.log(`Error fetching movies: ${error}`);
      setError('Error fetching movies. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  }
  
  // On Start
  useEffect(() => {
    fetchMovies();
  }, []);
  
  return (
    <main>
      <div className="pattern" />
      
      <div className="wrapper">
        <header>
          <img src="./hero.png" alt="Hero Banner" />
          <h1>Find <span className="text-gradient">Movies</ span> You'll Enjoy Without The Hassle</h1>
          
          <Search search={search} setSearch={setSearch} />
        </header>
        
        <section className="all-movies">
          <h2>All Movies</h2>

          {isLoading ? (
            <Spinner />
          ) : error ? (
            <p className="text-red-500">{error}</p>
          ) : (
            <ul>
              {movies.map((movie) => (
                <p className="text-white">{movie.title}</p>
              ))}
            </ul>
          )}
        </section>
      </div>
    </main>
  )
}

export default App
