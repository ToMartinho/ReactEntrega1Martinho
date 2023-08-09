import React from "react";
import Item from "../Item/Item";

function ItemList(props){
    const { products } = props;
    
    return(
        <div>
            <div>
                <h1>Listado de Productos</h1>
                <br />
            </div>
            <div className="contenedor col-12">
                {products.map((item)=> <Item key={item.id} {...item} />)}
            </div>
        </div>
    )
}

export default ItemList;