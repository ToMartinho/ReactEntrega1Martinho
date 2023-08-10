import { createContext, useState } from "react";

// CONTEXTO DEL CARRITO
const cartContext = createContext({cart: []})
// PROVIDER DEL CARRITO
// <cartContext.Provider/>
// Custom provider
function CartContextProvider(props){
    const [cart, setCart] = useState([]);

    function addToCart(product, count){
      setCart([...cart, {...product, count}])
    }

    function getTotalItemsInCart(){
      let total = 0;
      cart.forEach((item)=>{
        total += item.count;
      })
      return total;
    }

    function removeItem(id){
      const cartUpdated = cart.filter(item => item.id !== id)
      setCart(cartUpdated)
    }

    function clearCart(){
      setCart([])
    }

    return(
      <cartContext.Provider value={{ cart, addToCart, getTotalItemsInCart, removeItem, clearCart}}>
        {props.children}
      </cartContext.Provider>
    );
}

export {cartContext, CartContextProvider}