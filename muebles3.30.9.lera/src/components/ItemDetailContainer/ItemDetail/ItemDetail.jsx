import { useContext,useState } from "react"
import{Link} from 'react-router-dom';
import {CartContext} from '../../Context/CartContext';
import{ItemCounts} from '../../ItemCounts/ItemCounts';


const ItemDetail = ({producto}) =>{
  const [show,setShow] = useState(true);
  const{addToCart} = useContext(CartContext);

  const onAdd = (count)=>
  addToCart(producto,count);
  setShow(false);
};

return (
  <>
      <div>
          <img src={producto.img} alt={producto.name} />
          <div style={{ height: '200px' }}>
              <h3>{producto.name}</h3>
              <h3>${producto.price}</h3>
              {show ? (
                  <ItemCount onAdd={onAdd} stock={producto.stock} />
              ) : (
                  <div
                      style={{ display: 'flex', flexDirection: 'column' }}
                  >
                      <Link to="/cart">
                          <button className="detail">
                              Ir al carrito
                          </button>
                      </Link>

                      <Link to="/">
                          <button className="detail">
                              Volver al inicio
                          </button>
                      </Link>
                  </div>
              )}
          </div>
      </div>
  </>
);


export default ItemDetail;