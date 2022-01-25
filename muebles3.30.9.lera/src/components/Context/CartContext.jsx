import React,{createContext} from 'react';
import {useState} from 'react';

export const CartContext = createContext();


export const CartContextProvider = ({children})=>{
    const [cart,setCart] = useState([]);


 const addToCart = (item,cantidad)=> {
    if (isOnCart(item.id)){
        sumarCantidad(item,cantidad);
    }
    else{
        setCart([...cart,{...item,cantidad}]);

    }
};

const isOnCart = (id) =>{
    const carrito = cart.some((producto) =>producto.id ===id);

    return carrito;
}

const sumarCantidad = (item,cantidad)=>{
    const copia = [...cart];
    copia.forEach((producto)=>{
        producto.id === item.id && (producto.cantidad += cantidad);

    });
};

const deletProd = (id) => {
    setCart(cart.filter((producto) =>producto.id !== id));
};

const vaciarCarrito = () =>{
    setCart([])
};


const total = () =>{
    return cart.reduce((cantidad, producto)=> (cantidad + (producto.cantidad * producto.precio )) , 0)
};

return (
    <CartContext.Provider
  
        value = {{ cart,addToCart,deletProd,vaciarCarrito,total}} 
     >
        {children}
    </CartContext.Provider>
 );

};