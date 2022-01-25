import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../Context/CartContext';
import { Card } from 'react-bootstrap';

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
              <img src={producto.img}/>
              <div>
                  <h3>{producto.name}</h3>
                  <h3>${producto.precio}</h3>
                  <h3>Cantidad{producto.cantidad}</h3>
                  <button onClick={() =>deleteProd(producto.id)}> x</button>
                
                


              </div>
              
          </div>
      ))}
     <button onClick={vaciarCarrito}>vaciar Carrito</button>
     <h3>{total()}</h3>
     </>)}

     </>

  )
 
};

export default Cart;
