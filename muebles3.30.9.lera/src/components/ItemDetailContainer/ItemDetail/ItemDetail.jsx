import React from 'react'
import { useState } from 'react'
import ItemCounts from '../../ItemCounts/ItemCounts'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useCartContext } from '../../Navegacion/context/cartContext'




const ItemDetail = ({product}) => {

   const{agregaralcarrito} = useCartContext()



    const [show, setShow] = useState(true)

    const {img,name,precio,categoria,stock}=product

    const onAdd=(contador)=>{
      agregaralcarrito ({...product,contador} )
      console.log(contador)
      setShow (false)
      alert
      (`${contador}`)
     
    }



    return (
        <div>
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            categoria:{categoria}
          </Card.Text>
          <Card.Text>
              {precio}
          </Card.Text>
          
        </Card.Body>
      </Card>
       
    {show?<ItemCounts stock={stock} onAdd={onAdd} />:
    <div>
    <Link to='cart'><button>Terminar la compra</button></Link>
    <Link to='/'><button>Comprar</button></Link>
    <button onClick={()=> onAdd(2)}>Agregar al carrito</button>

    </div>}

      </div>
    )
}

export default ItemDetail
