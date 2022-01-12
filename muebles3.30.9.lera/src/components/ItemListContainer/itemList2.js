import React from 'react'

const itemList2 = () => {
    return (
        <div>
            {products.map(prod=><div key={prod.id}
          className='col-md-4'>

              <div className='card w-100 md-5'>
                  <div className='card-header'>
                      {`${prod.id} - ${prod.categoria}`}
            </div>
        <div className='card-body'>
            <img src={prod.imagenID} className='w-50'/>
            {prod.price}
        </div>
        <div className='card-footer'>
            <Link to={'/detall/${prod.id}'}>
            <button className='btn btn-outline-primary btn-block'>
                
            </button>
            </Link>   

            </div>   
            </div>
          </div>)}  
        </div>
    )
}

export default itemList2
