const viajes = [];

const preciosDestinos = {
    "Ciudad de México": 1000,
    "Cancún": 3000,
    "Monterrey": 2000,
    "Guadalajara": 1500,
    "Oaxaca": 1200
};

const preciosTransporte = {
    autobus: 500,
    avion: 2500,
    tren: 800,
    auto: 700
};

const preciosAlojamiento = {
    hotel: 1500,
    hostal: 700,
    airbnb: 1000
};

export const registrarDestino = (
    destino,
    fecha,
    transporte,
    alojamiento,
    personas
) => {

    const viaje = {
        destino,
        fecha,
        transporte,
        alojamiento,
        personas,
        costo: calcularCosto(
            destino,
            transporte,
            alojamiento,
            personas
        )
    };

    viajes.push(viaje);

    return viaje;
};

export const calcularCosto = (
    destino,
    transporte,
    alojamiento,
    personas
) => {

    const costoDestino = preciosDestinos[destino] ?? 0;
    const costoTransporte = preciosTransporte[transporte] ?? 0;
    const costoAlojamiento = preciosAlojamiento[alojamiento] ?? 0;

    const costoPorPersona =
        costoDestino +
        costoTransporte +
        costoAlojamiento;

    let descuento = 0;

    if (personas >= 5) {
        descuento = 0.15;
    } else if (personas >= 3) {
        descuento = 0.10;
    }

    const costoTotal =
        costoPorPersona *
        personas *
        (1 - descuento);

    return costoTotal;
};

export const obtenerViajes = () => {
    return viajes;
};

export const obtenerCostoTotal = () => {

    return viajes.reduce(
        (total, viaje) => total + viaje.costo,
        0
    );
};