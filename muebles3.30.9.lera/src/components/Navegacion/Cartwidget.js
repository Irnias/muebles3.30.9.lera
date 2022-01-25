import React from 'react'
import {FaCartPlus} from 'react-icons/fa'
import { CartContext } from '../Context/CartContext'
import {Cart} from '../cart/Cart'
const Cartwidget = () => {
    return (
        <div>
          
          <FaCartPlus  style={{color:'darkgoldenrod',width:'80'}}/> 
          <span style={{color: 'red', margin:'0' }}>0</span>
        </div>
    )
}

export default Cartwidget

