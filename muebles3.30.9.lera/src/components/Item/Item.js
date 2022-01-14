import React from 'react'
import'./Item.css'
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { products } from './products';

const Item = ({producto}) => {
    console.log(producto);

    const {id,imagen,desc,name,precio,categoria}=producto

    return (
        <div className='card'>
           <h2>{producto.name}</h2>
           <h3>Precio:{producto.precio}</h3>
           <h3>Stock:{producto.stock}</h3>
           <img src={producto.img} alt={producto.name}/>
           
 
  <Button variant="outline-secondary">Anadir carrito</Button>
 


    
        </div>
    )
}

export default Item
