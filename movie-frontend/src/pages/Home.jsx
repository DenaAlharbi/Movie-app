import MovieCard from "../components/MovieCard.jsx";

function Home() {
    const movies = [
        {id: 1, title: "jhon", release_date: "2024"},
        {id: 1, title: "jhon2", release_date: "2024"},
        {id: 1, title: "jhon3", release_date: "2024"}


    ]
    const handleSearch = (e) => {}
    return (<div className="home">
        <form onSubmit={handleSearch} className="search-form">
            <input type= "text" placeholder="Search for a movie..." className="search-input" onChange={(e) => movie.search(e.target.value)} />
        </form>
        <div className="movie-grid">
            {movies.map(movie => (<MovieCard movie={movie} key={movie.id}/>))}
        </div>
    </div>)
}
export default Home;