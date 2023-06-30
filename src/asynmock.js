// simula una conexión a la base de datos (mas adelante se conecta con una base de google posta)

const misProductos = [
    {id:1, nombre:"Lenovo H4", precio:2500, img: "../img/notebook_01.jpg", idCat: "1", stock: "2", nombreCat:"Notebooks" },
    {id:2, nombre:"Lenovo M258", precio:2700, img: "../img/notebook_02.jpg", idCat: "1", stock: "3", nombreCat:"Notebooks" },
    {id:3, nombre:"Motorola c34", precio:1880, img: "../img/cel_01.jpg", idCat: "2", stock: "4", nombreCat:"Celulares" },
    {id:4, nombre:"Motorola c36", precio:1900, img: "../img/cel_02.jpg", idCat: "2", stock: "5", nombreCat:"Celulares" },   
    {id:5, nombre:"Huawei S32", precio:980, img: "../img/tablet_01.jpg", idCat: "3", stock: "6", nombreCat:"Tablets" },
    {id:6, nombre:"Huawei S18", precio:1100, img: "../img/tablet_02.jpg", idCat: "3", stock: "7", nombreCat:"Tablets" },   
]
// este export me lo deja disponible para todos los archivos
export const getProductos = () => {
    return new Promise((resolve) => {
        setTimeout( () => {
            resolve(misProductos);
        }, 2000)
    })
}

// creamos una nueva función similar a la anterior pero que nos retorne un solo item
// ponemos prod.id === +id por el que id que recibo por parámetro es un string y mis ids son numéricos ... prod.id === +id toma numéricos /// prod.id === id toma strings
export const getUnProducto = (id) => {
    return new Promise(resolve => {
        setTimeout( () => {
            const producto = misProductos.find(prod => prod.id === +id);
            resolve(producto);
        }, 2000)
    })
}

// creamos una función que retorna un array de una determinada categoría de producto

export const getProductosPorCategoria = (idCategoria) => {
    return new Promise ( resolve => {
        setTimeout( () => {
            const productosCategoria = misProductos.filter(prod => prod.idCat === idCategoria);
            resolve(productosCategoria);
        }, 2000 )
    })
}