// Hooks
import { useState, useEffect } from 'react'

// Assets
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// Components
import Search from "./components/Search.jsx";

const App = () => {
  // Initialize
  const [search, setSearch] = useState('');
  
  return (
    <main>
      <div className="pattern" />
      
      <div className="wrapper">
        <header>
          <img src="./hero.png" alt="Hero Banner" />
          <h1>Find <span className="text-gradient">Movies</ span> You'll Enjoy Without The Hassle</h1>
        </header>
        
        <Search search={search} setSearch={setSearch} />
      </div>
    </main>
  )
}

export default App
