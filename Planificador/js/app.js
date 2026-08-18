import {
    registrarDestino,
    obtenerViajes,
    obtenerCostoTotal
} from "./viajes.js";

const formulario = document.getElementById("viajeForm");
const itinerario = document.getElementById("itinerario");
const costoTotal = document.getElementById("costoTotal");

formulario.addEventListener("submit", (event) => {

    event.preventDefault();

    const destino = document.getElementById("destino").value;
    const fecha = document.getElementById("fecha").value;
    const transporte = document.getElementById("transporte").value;
    const alojamiento = document.getElementById("alojamiento").value;
    const personas = Number(
        document.getElementById("personas").value
    );

    registrarDestino(
        destino,
        fecha,
        transporte,
        alojamiento,
        personas
    );

    mostrarItinerario();

    formulario.reset();

    document.getElementById("personas").value = 1;
});

const mostrarItinerario = () => {

    const viajes = obtenerViajes();

    if (viajes.length === 0) {
        itinerario.innerHTML = `
            <p>No hay viajes registrados.</p>
        `;
        return;
    }

    itinerario.innerHTML = "";

    viajes.forEach((viaje, index) => {

        const elemento = document.createElement("div");

        elemento.classList.add("viaje");

        elemento.innerHTML = `
            <p><strong>Viaje #${index + 1}</strong></p>
            <p><strong>Destino:</strong> ${viaje.destino}</p>
            <p><strong>Fecha:</strong> ${viaje.fecha}</p>
            <p><strong>Transporte:</strong> ${viaje.transporte}</p>
            <p><strong>Alojamiento:</strong> ${viaje.alojamiento}</p>
            <p><strong>Personas:</strong> ${viaje.personas}</p>
            <p>
                <strong>Costo:</strong>
                ${formatearMoneda(viaje.costo)}
            </p>
        `;

        itinerario.appendChild(elemento);
    });

    costoTotal.textContent =
        formatearMoneda(obtenerCostoTotal());
};

const formatearMoneda = (cantidad) => {

    return cantidad.toLocaleString("es-MX", {
        style: "currency",
        currency: "MXN"
    });
};