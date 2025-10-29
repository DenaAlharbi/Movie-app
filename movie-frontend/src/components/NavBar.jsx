import {Link} from 'react-router-dom'
function NavBar() {
    return (
        <nav className="navbar-card">
            <div className="container">
                <Link to ="/">Movie App</Link>
            </div>
            <div className="navbar-links">
                <Link to ="/" className="nav-link">Home</Link>
                <Link to ="/Favorites" className="nav-link">Favorites</Link>
            </div>
        </nav>
    )
}

export default NavBar;