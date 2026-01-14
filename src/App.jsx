// Hooks
import { useState, useEffect } from 'react'

// Assets
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const App = () => {
  return (
    <main>
      <div className="pattern" />
      
      <div className="wrapper">
        <header>
          <img src="./hero.png" alt="Hero Banner" />
          <h1>Find <span className="text-gradient">Movies</ span> You'll Enjoy Without The Hassle</h1>
        </header>
      </div>
    </main>
  )
}

export default App
