function MovieCard({movie}) {
    function onFavorite(){
        alert('Favorite Movie')
    }
    return(
        <div className="Movie-Card">
            <div className="Movie-Card__poster">
                <img src={movie.poster} alt={movie.title} />
                <div className="Movie-Card__overlay">
                    <button className="favorite-btn" onClick={onFavorite}>❤️</button>
                </div>
                <div className="Movie-Card__info">
                    <h3>{movie.title}</h3>
                    <p>{movie.release_date}</p>
                </div>
            </div>
        </div>
    )
}
export default MovieCard