import CartWidget from "../CartWidget/CartWidget"

import './NavBar.css'

function NavBar(props) {
    return(
        <nav>
            <div className="Titulo">
                <h2>Magic Store</h2>
            </div>
            
            <div className="PadreLi">
                <ul>
                    <li className="li"><button>Singles</button></li>
                    <li className="li"><button>Sealed</button></li>
                    <li className="li"><button>Others</button></li>
                </ul>                
                
            </div>
            <div className="CartIcon">
                <CartWidget/>
            </div>
        </nav>
    )
}

export default NavBar