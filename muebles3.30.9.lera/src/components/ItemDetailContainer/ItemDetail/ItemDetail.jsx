import { useContext,useState } from "react"
import{Link} from 'react-router-dom';
import {CartContext} from '../../Context/CartContext';
import ItemCounts from "../../ItemCounts/ItemCounts";



const ItemDetail = ({product}) =>{
  const [show,setShow] = useState(true);
  const{addToCart} = useContext(CartContext);

  const onAdd = (count)=>{
  addToCart(product,count);
  setShow(false);
};

return (
  <>
      <div>
          <img src={product.img} alt={product.name} />
          <div style={{ height: '200px' }}>
              <h3>{product.name}</h3>
              <h3>${product.price}</h3>
              {show ? (
                  <ItemCounts onAdd={onAdd} stock={product.stock} />
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

}

export default ItemDetail;