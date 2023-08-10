function Item(props){
    const {id ,img, title, price, tipo, stock} = props;
    return( 
        
        <div className="card cardmia">
            <img src={img} className="card-img-top" alt="carta"/>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <h5>tipo: {tipo}</h5>
                <p>stock: {stock}</p>
                <p className="card-text">precio: {price}u$d</p>
                <Link to={`/product/${id}`}>
                    <button className="btn btn-primary">Ver Producto</button>
                </Link>
            </div>
        </div>
        
    );
}