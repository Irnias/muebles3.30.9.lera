import { useState,useContext,createContext } from "react";
//contexto creado
const cartContext=createContex([]);

//export function 
export function usarContexto(){
    return useContext(cartContext)
}


//creo componente que maneja el contexto

export const cartContextProvider=({children})
//estdos y funciones globales
 const [carlist, setCarlist] = useState([])

 function agregarAlcarrito(Item) {
     setCarlist([])
     
 }

 return(
      <cartContext.Provider value={{
       carlist,
       agregarAlcarrito,
       vaciarCarrito>
 }}>
     )