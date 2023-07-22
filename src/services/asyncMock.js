const productos = [
    {
        id: 1,
        tipo: "Land",
        stock: 10,
        title: "Forest",
        price: 1,
        img:"/assets/forest.jpg",
        category:"singles"
    },
    {
        id: 2,
        tipo: "Land",
        stock: 10,
        title: "Mountain",
        price: 1,
        img:"/assets/mountain.jpg",
        category:"singles"
    },
    {
        id: 3,
        tipo: "Land",
        stock: 10,
        title: "Plains",
        price: 1,
        img:"/assets/plains.jpg",
        category:"singles"
    },
    {
        id: 4,
        tipo: "Land",
        stock: 10,
        title: "Swamp",
        price: 1,
        img:"/assets/swamp.jpg",
        category:"singles"
    },
    {
        id: 5,
        tipo: "Land",
        stock: 10,
        title: "Island",
        price: 1,
        img:"/assets/island.jpg",
        category:"singles"
    },
    {
        id: 6,
        tipo: "booster box",
        stock: 10,
        title: "Lord Of The Rings",
        price: 100,
        img:"/assets/LOTRSealed.jpg",
        category:"sealed"
    },
    {
        id: 7,
        tipo: "booster box",
        stock: 10,
        title: "Phyrexia",
        price: 100,
        img:"/assets/phyrexiaSealed.jpg",
        category:"sealed"
    },
    {
        id: 8,
        tipo: "booster box",
        stock: 10,
        title: "War Of Spark",
        price: 100,
        img:"/assets/SparkSealed.jpg",
        category:"sealed"
    },
    {
        id: 9,
        tipo: "booster box",
        stock: 10,
        title: "Throne Of Eldraine",
        price: 100,
        img:"/assets/ThroneOfEldraineSealed.jpg",
        category:"sealed"
    },
]
// TRAE TODO LOS PRODUCTOS
function getData(){
    // 1. Generamos la promesa
    // 2. Simulamos los retardos con setTimeout
    // 3. Resolvemos los productos con "resolve"
    // 4. Retornamos la promise

    return new Promise((res,rej) => {
        setTimeout(()=>{
            res(productos)
        }, 2000)
    })
    
}

//TRAE 1 SOLO PRODUCTO BUSCADO ID
export function getProductData(idURL){
    return new Promise((res,rej) => {

        const productRequested = productos.find((item) => item.id === parseInt(idURL));
        setTimeout(()=>{
            res(productRequested)
        }, 2000)
    })
}

//TRAE LOS PRODUCTOS FILTRADOS POR CATEGORIA
export function getCategoryData(categoryURL){
    return new Promise((res,rej) => {
        const categoryRequested = productos.filter(item => {
          return(item.category.toLowerCase() === categoryURL.toLowerCase())  
        });
        setTimeout(()=>{
            res(categoryRequested)
        },2000)
    })

}

export default getData;