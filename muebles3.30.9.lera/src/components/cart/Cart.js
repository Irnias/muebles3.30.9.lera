import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../Context/CartContext';
import { Card } from 'react-bootstrap';
import { Button } from 'react-bootstrap';






const Cart = () => {
    
    const {cart,deleteProd,vaciarCarrito,total} = useContext(CartContext);

    
  return( 
      <>
     {cart.length === 0 ? ( <div>
    <h2>Aun no agregaste nada al carrito</h2>
    <Link to="/"><button>Ir Al Inicio</button></Link>
     </div>) : (
     <>
      {cart?.map((producto)=>(

          <div key={producto.id}>
             
              <div>
                  <h3>Nombre:{producto.name}</h3>
                  <h3>${producto.total}</h3>
                  <h3>Cantidad: {producto.cantidad}</h3>
                  <button onClick={() =>deleteProd(producto.id)}> x</button>
                 <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={producto.img} />
        <Card.Body>
        <Card.Title>Nombre: {producto.name}</Card.Title>
          <Card.Text>
            categoria:{producto.categoria}
          </Card.Text>
          <Card.Text>
              Precio : {producto.precio}
          </Card.Text>
          Cantidad :{producto.cantidad}
          <Card.Text>
              stock:{producto.stock}
          </Card.Text>
          <Button onClick={() =>deleteProd(producto.id)} variant="primary">x</Button>  
        </Card.Body>
      </Card>
                


              </div>
              
          </div>
      ))}
     <Button onClick={vaciarCarrito} variant="primary">vaciar Carrito</Button>
     <h3>{total()}</h3>
     </>)}

     </>

  )
 
};

export default Cart;
