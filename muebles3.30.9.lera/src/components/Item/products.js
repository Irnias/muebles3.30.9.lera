export const products = [
    { id: '1',name:'mueble-bano',precio:8000,stock:'10', Img:'./Asst/img/muebles-bano.jpg'},
    { id: '2',name:'cocina',precio:9000,stock:'8', Img:'./Asst/img/muebles-cocina.jpg'},
    { id: '3',name:'patio',precio:1000,stock:'3', Img:'./Asst/img/patio.jpg'},
    { id: '4',name:'desayunador',precio:1200,stock:'4', Img:'./Asst/img/desayunador.jpg'},
    { id: '5',name:'habitacion',precio:1300,stock:'7', Img:'./Asst/img/habitacion.jpg'},
    { id: '6',name:'rack',precio:1400,stock:'10', Img: './Asst/img/rack.jpg'}


]
export const traerProductos = new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve(products)   
    }, 2000);
    

})

export const getFetch = new Promise((resolve,reject)=>{
    let condicion = true
    if(condicion){
        setTimeout(()=>{
            resolve(products)
        },2000)
    }else{
        reject('error')
    }
})