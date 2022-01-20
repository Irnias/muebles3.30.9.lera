export const products = [
    { id: '1',name:'mueble-bano',categoria:'comedor',precio:8000,stock:10, Img:'img/muebles-bano.jpg'},
    { id: '2',name:'cocina',categoria:'comedor',precio:9000,stock:8, Img:'img/muebles-cocina.jpg'},
    { id: '3',name:'patio',categoria:'comedor',precio:1000,stock:3, Img:'img/patio.jpg'},
    { id: '4',name:'desayunador',categoria:'cocina',precio:1200,stock:4, Img:'img/desayunador.jpg'},
    { id: '5',name:'habitacion',categoria:'cocina',precio:1300,stock:7, Img:'img/habitacion.jpg'},
    { id: '6',name:'rack',categoria:'cocina',precio:1400,stock:10, Img: 'muebles-1.jpg'}

]
export const getMock  = new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve(products)   
    }, 2000);
    

})

