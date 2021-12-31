import {useState,useEffect}from 'react'


const ItemListContainer = ({item}) => {
    const { name, precio,categoria}=item
   
    return (
        <div>
            <h1>Bienvenido a Muebles 3.30.9.lera</h1>
            <h1>{name}</h1>
            <h1>{precio}</h1>
            <h1>{categoria}</h1>
        </div>


    )

}

export default ItemListContainer
