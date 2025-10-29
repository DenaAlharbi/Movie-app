import {useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import movieCard from "./components/MovieCard.jsx";
import './css/App.css'
import Home from "./pages/Home.jsx";
import {Routes, Route} from 'react-router-dom'
import Favorites from "./pages/Favorites.jsx";
import NavBar from "./components/NavBar.jsx";
import {MovieProvider} from "./contexts/MovieContext.jsx";

function App() {

    return (
        <MovieProvider>
            <NavBar/>
            <main className="main-content">
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/Favorites" element={<Favorites />} />
                </Routes>
            </main>
        </MovieProvider>
    )
}

export default App
