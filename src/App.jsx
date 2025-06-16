import React from 'react';
import { useEffect, useState } from 'react';
import Search from './components/Search.jsx';

const API_BASE_URL = 'https://api.themoviedb.org/3/discover/movie'; 
const API_KEY = import.meta.env.VITE_TMDB_API_KEY; 
const API_OPTIONS = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${API_KEY}`
  }
}

const App = () => {
  const [searchTerm, setSearchTerm] = useState(''); 

  const [errorMessage, setErrorMessage] = useState(''); 

  const fetchMovies = async () => {
    try {

    } catch {
      console.error(`Error fetching movies: ${error}`);
      setErrorMessage('Error fetching movies. Please try again later'); 
    }
  }

  useEffect(() => {

  },[])

  return (
    <main>
      <div className="pattern"/>
      <div className="wrapper">
        <header>
          <img src="./hero-img.png" alt="Hero Banner" />
          <h1>Find <span className='text-gradient'>Movies</span> You'll Enjoy Without the Hassle</h1>
          <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
        </header>

        <section className="all-movies">
          <h2>All Movies</h2>
          {errorMessage && <p className='text-red-500'>{errorMessage}</p>}
        </section>

      </div>
    </main>
  )
}

export default App
