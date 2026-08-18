const productos = [
    {
        nombre: "Laptop",
        precio: 15000,
        categoria: "Tecnología"
    },
    {
        nombre: "Mouse",
        precio: 80,
        categoria: "Accesorios"
    },
    {
        nombre: "Teclado",
        precio: 90,
        categoria: "Accesorios"
    },
    {
        nombre: "Audífonos",
        precio: 75,
        categoria: "Audio"
    },
    {
        nombre: "Monitor",
        precio: 5000,
        categoria: "Tecnología"
    },
    {
        nombre: "USB",
        precio: 50,
        categoria: "Accesorios"
    },
    {
        nombre: "Webcam",
        precio: 95,
        categoria: "Tecnología"
    }
];

console.log("Productos originales:");
console.log(productos);


// FILTER
const productosMenores100 = productos.filter(
    producto => producto.precio < 100
);

console.log("Productos menores de $100:");
console.log(productosMenores100);


// SORT
const productosOrdenados = [...productosMenores100].sort(
    (a, b) => a.nombre.localeCompare(b.nombre)
);

console.log("Productos menores de $100 ordenados alfabéticamente:");
console.log(productosOrdenados);


// MAP
const nombresProductos = productosOrdenados.map(
    producto => producto.nombre
);

console.log("Nombres de los productos:");
console.log(nombresProductos);


// REDUCE
const precioTotal = productosMenores100.reduce(
    (total, producto) => total + producto.precio,
    0
);

console.log("Precio total de los productos menores de $100:");
console.log(precioTotal);


// SOME
const existeProductoCaro = productos.some(
    producto => producto.precio > 10000
);

console.log("¿Existe algún producto con precio mayor a $10,000?");
console.log(existeProductoCaro);


// EVERY
const todosTienenCategoria = productos.every(
    producto => producto.categoria !== ""
);

console.log("¿Todos los productos tienen categoría?");
console.log(todosTienenCategoria);


// INCLUDES
const existeMouse = nombresProductos.includes("Mouse");

console.log("¿La lista contiene Mouse?");
console.log(existeMouse);