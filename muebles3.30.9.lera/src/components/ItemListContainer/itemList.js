import React from 'react'
import Item from '../Item/Item'
import { products } from '../Item/products';


function ItemList({products }) {

  return (
    <div style={{ display: 'flex' }}>
      {products?.map((producto) => (
        <Item key={producto.id} producto={producto} />
      ))}
    </div>

  );
}



export default ItemList 

