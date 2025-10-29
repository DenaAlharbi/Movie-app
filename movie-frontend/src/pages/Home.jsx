import MovieCard from "../components/MovieCard.jsx";
import {useState} from "react";
import '/css/Home.css';
function Home() {
    const [searchQuery, setSearchQuery] = useState("");


    const movies = [
        {id: 1, title: "jhon", release_date: "2024"},
        {id: 1, title: "jhon2", release_date: "2024"},
        {id: 1, title: "jhon3", release_date: "2024"}


    ]
    const handleSearch = (e) => {
        e.preventDefault()
    }
    return (<div className="home">
        <form onSubmit={handleSearch} className="search-form">
            <input type="text"
                   placeholder="Search for a movie..."
                   className="search-input"
                   value={searchQuery}
                   onChange={(e) => setSearchQuery(e.target.value)}/>
            <button type="submit" className="search-btn">Search</button>
        </form>
        <div className="movie-grid">
            {movies.map(movie => (
                <MovieCard movie={movie} key={movie.id}/>))}
        </div>
    </div>)
}

export default Home;