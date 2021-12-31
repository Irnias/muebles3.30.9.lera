const productos = [
    { id: 1, foto:'data : image/Ass'}
]

export const getFetch = new Promise((resolve,reject)=>{
    let condicion = true
    if(condicion){
        setTimeout(()=>{
            resolve(productos)
        },2000)
    }else{
        reject('error')
    }
})