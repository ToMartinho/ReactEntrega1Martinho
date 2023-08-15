import React, {useState} from "react";

function ItemCount(props){
    const [clickCount, setClickCount] = useState(1);

    function handleClickAdd(){
        if(clickCount === props.stock){
        }else{
            setClickCount(clickCount + 1);
        }
    }

    function handleClickSub(){
        if(clickCount > 1){
            setClickCount(clickCount - 1);
        }
    }

    return(
        
        <div>
            <div>
                <button className="btn btn-primary" disabled={props.stock === 0} onClick={handleClickSub}>-</button>
                <h3>{clickCount}</h3>
                <button className="btn btn-primary" disabled={props.stock === 0} onClick={handleClickAdd}>+</button>
            </div>
            <br />
            <div>
                <button className="btn btn-primary" disabled={props.stock === 0} onClick={()=> {props.onAddToCart(clickCount)}}>
                    <h4>Añadir al carrito</h4>
                </button>
            </div>
        </div>

    )
}

export default ItemCount;