import React from 'react'
import { products, traerProductos } from '../../Item/products'

const ItemDetail = (products) => {
    return (
        <div>
            {products.name}
            <img src={products.img}/>
            {products.price}
        </div>
    )
}

export default ItemDetail
