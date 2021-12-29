import React, {useState}from 'react'


const ItemCounts = ({min,max}) => {

    const [counter, setCounter] = useState(min)
    const [show, setshow] = useState(true)

    const handleIncrement = () =>{
        counter < max? setCounter(prev=> prev + 1) : alert ('stock maximo producto')

}
    const handleDecrement = () =>{
        if (counter > min) {
            setCounter(prev =>  prev - 1) 
           
        }
        else {
            alert('minimo de compra')

           
       }
    }
    
     const mostrar = () => {
         setshow(!show)
     }   
    
     const reset =()=>{
       setCounter(min)  
     }

    

    return (
        <div className='Counter.css'>

            <h1>{counter}</h1>
        
          <button onClick={handleIncrement}>+</button>
          <button onClick={handleDecrement}>-</button>
          <button onClick={mostrar}>Mostrar</button>
          <button onClick={reset}>Resetear</button>
           
        {
            show && <h1>hay elementos en el carrito</h1>
        }
    
        {
           show? <h1>Elemento en en carrito</h1>: <h1>No hay elemento en el carrito</h1>
        }
         
        </div>
    )


}
export default ItemCounts
