
import { useState,useContext,createContext } from "react";

//creo el contexto
const cartContext = createContext([])

//funcion que evita importar el use context en todos los archivos
export function useCartContext() {
    
    return useContext(createContext)

    
}


//creacion del componente que maneja el contexto

export const cartContextProvider = ({children}) =>{
//estados y funciones globales
const [cartList,SetCarList] = ([])
function agregaralcarrito(Item) {
    SetCarList([...cartList,Item])

    
}
function vaciarCarrito() {
    SetCarList([])

    

}
return(
    <cartContext.Provider value = {{
        cartList,
        agregaralcarrito,
        vaciarCarrito

    }}>
        {children}

    </cartContext.Provider>
)
}
