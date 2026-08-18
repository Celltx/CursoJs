const listaDeCompras = [];

const formulario = document.getElementById("formularioProducto");
const inputProducto = document.getElementById("producto");
const lista = document.getElementById("lista");
const mensaje = document.getElementById("mensaje");

const agregarProducto = (producto) => {

    producto = producto.trim();

    if (producto === "") {
        return;
    }

    const productoExiste = listaDeCompras.some(
        item => item.toLowerCase() === producto.toLowerCase()
    );

    if (productoExiste) {
        mensaje.textContent = "El producto ya está en la lista.";
        return;
    }

    listaDeCompras.push(producto);

    mostrarLista();

    mensaje.textContent = "Producto agregado correctamente.";

    inputProducto.value = "";
    inputProducto.focus();
};

const eliminarProducto = (producto) => {

    const indice = listaDeCompras.findIndex(
        item => item.toLowerCase() === producto.toLowerCase()
    );

    if (indice !== -1) {
        listaDeCompras.splice(indice, 1);
    }

    mostrarLista();
};

const mostrarLista = () => {

    lista.innerHTML = "";

    if (listaDeCompras.length === 0) {
        mensaje.textContent = "La lista de compras está vacía.";
        return;
    }

    listaDeCompras.forEach((producto) => {

        const elemento = document.createElement("li");

        const texto = document.createElement("span");
        texto.textContent = producto;

        const botonEliminar = document.createElement("button");

        botonEliminar.textContent = "Eliminar";
        botonEliminar.classList.add("eliminar");

        botonEliminar.addEventListener("click", () => {
            eliminarProducto(producto);
        });

        elemento.appendChild(texto);
        elemento.appendChild(botonEliminar);

        lista.appendChild(elemento);
    });
};

formulario.addEventListener("submit", (event) => {

    event.preventDefault();

    agregarProducto(inputProducto.value);
});

mostrarLista();