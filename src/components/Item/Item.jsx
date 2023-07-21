import './Item.css'

function Item(props){
    const {img, title, price, tipo, stock} = props;
    return( 
        
        <div className="card">
            <img src={img} className="card-img-top" alt="cartas"/>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <h5>tipo: {tipo}</h5>
                <p>stock: {stock}</p>
                <p className="card-text">precio: {price}u$d</p>
                <button className="btn btn-primary">Ver Producto</button>
            </div>
        </div>
    );
}

export default Item;