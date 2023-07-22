import { Link } from 'react-router-dom';


function ItemDetail(props){
    const {id ,img, title, price, tipo, stock} = props;
    return( 
        
        <div className="card cardDetail">
            <img src={img} className="card-img-top" alt="cartas"/>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <h5>tipo: {tipo}</h5>
                <p>stock: {stock}</p>
                <p className="card-text">precio: {price} u$d</p>
            </div>
        </div>
        
    );
}

export default ItemDetail;