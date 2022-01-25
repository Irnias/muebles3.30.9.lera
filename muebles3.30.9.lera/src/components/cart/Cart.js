import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../Context/CartContext';
import { Card } from 'react-bootstrap';
import { Button } from 'react-bootstrap';





const Cart = (producto) => {
    
    const {cart,deletProd,vaciarCarrito,total} = useContext(CartContext);
    const {id,img,name,precio,categoria,stock}=producto
    
  return( 
      <>
     {cart.length === 0 ? ( <div>
    <h2>Aun no agregaste nada al carrito</h2>
    <Link to="/"><button>Ir Al Inicio</button></Link>
     </div>) : (
     <>
      {cart?.map((producto)=>(

          <div key={producto.id}>
              <img src={producto.img}/>
              <div>
                  <h3>{producto.name}</h3>
                  <h3>${producto.precio}</h3>
                  <h3>Cantidad: {producto.cantidad}</h3>
                  <button onClick={() =>deletProd(producto.id)}> x</button>
                 <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={img} />
        <Card.Body>
        <Card.Title>Nombre: {name}</Card.Title>
          <Card.Text>
            categoria:{categoria}
          </Card.Text>
          <Card.Text>
              Precio : {precio}
          </Card.Text>
          Cantidad :{producto.cantidad}
          <Card.Text>
              stock:{stock}
          </Card.Text>
          <Button onClick={() =>deletProd(producto.id)} variant="primary">x</Button>  
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
