import CartWidget from "../CartWidget/CartWidget"

function NavBar(props) {
    return(
        <nav>
            <h2>Magic Store</h2>
            <div>
                <button>Singles</button>
                <button>Sealed</button>
                <button>Others</button>
            </div>
            <CartWidget/>
        </nav>
    )
}

export default NavBar