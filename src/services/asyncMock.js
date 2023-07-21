const productos = [
    {
        id: 1,
        tipo: "Land",
        stock: 10,
        title: "Forest",
        price: 1,
        img:"/assets/forest.jpg"
    },
    {
        id: 2,
        tipo: "Land",
        stock: 10,
        title: "Mountain",
        price: 1,
        img:"/assets/mountain.jpg"
    },
    {
        id: 3,
        tipo: "Land",
        stock: 10,
        title: "Plains",
        price: 1,
        img:"/assets/plains.jpg"
    },
    {
        id: 4,
        tipo: "Land",
        stock: 10,
        title: "Swamp",
        price: 1,
        img:"/assets/swamp.jpg"
    },
    {
        id: 5,
        tipo: "Land",
        stock: 10,
        title: "Island",
        price: 1,
        img:"/assets/island.jpg"
    }
]

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

export default getData;