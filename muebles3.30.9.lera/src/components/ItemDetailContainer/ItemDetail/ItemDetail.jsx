import React from 'react'
import { useState } from 'react'
import ItemCounts from '../../ItemCounts/ItemCounts'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { CartContext } from '../../Context/CartContext'
import { useContext } from 'react'



const ItemDetail = ({data}) => {

   



    const [show, setShow] = useState(true);
    const{addToCart}=useContext(CartContext);

    const {img,name,precio,categoria,stock}=data

    const onAdd=(data,contador)=>{
    
      addToCart(data,contador)
      console.log(show)
      setShow (false)

     
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
          <Card.Text>
              stock:{stock}
          </Card.Text>
          
        </Card.Body>
      </Card>
       
    {show?<ItemCounts stock={stock} onAdd={onAdd} />:
    <div>
    <Link to='/'><button>Terminar la compra</button></Link>
    <Link to='/cart'><button>Comprar</button></Link>
    

    </div>}

      </div>
    )
}

export default ItemDetail