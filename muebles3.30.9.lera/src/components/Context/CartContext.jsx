import React,{createContext} from 'react';
import {useState} from 'react';

export const CartContext = createContext();


export const CartContextProvider = ({children})=>{
    const [cart,setCart] = useState([]);


 const addToCart = (Item,cantidad)=> {
    if (isOnCart(Item.id)){
        sumarCantidad(Item,cantidad);
    }
    else{
        setCart([...cart,{...Item,cantidad}]);

    }
};

const isOnCart = (id) =>{
    const carrito = cart.some((prod) =>prod.id ===id);

    return carrito;
}

const sumarCantidad = (Item,cantidad)=>{
    const copia = [...cart];
    copia.forEach((producto)=>{
        producto.id === Item.id && (producto.cantidad += cantidad);

    });
};

const deletProd = (id) => {
    setCart(cart.filter((producto) =>producto.id !== id));
};

const vaciarCarrito = () =>{
    setCart([])
};


const total = () =>{
    let count = 0;
    cart.forEach((producto)=>{
        count +=producto.price * producto.cantidad;
    });
    return count;
};

return (
    <CartContext.Provider
  
        value = {{ cart,addToCart,deletProd,vaciarCarrito,total}} 
     >
        {children}
    </CartContext.Provider>
 );

};