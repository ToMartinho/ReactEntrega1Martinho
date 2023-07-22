import CartWidget from "../CartWidget/CartWidget";
import './NavBar.css';
import { Link } from "react-router-dom";

function NavBar(props) {
    return(
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <Link className="navbar-brand font" to="/">5 colors MTGStore</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <Link className="nav-link" to="/category/singles">Singles</Link>
                            <Link className="nav-link" to="/category/sealed">Sealed</Link>
                            <Link className="nav-link" to="/category/others">Others</Link>
                        </div>
                    </div>
                </div>
                <CartWidget/>
            </nav>
        </div>
    )
}

export default NavBar