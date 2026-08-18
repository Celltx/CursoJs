const invitados = [
    "Ana",
    "Beatriz",
    "Bruno",
    "Carlos",
    "Daniel",
    "Diego",
    "Elena",
    "Fernando"
];

const encontrarPareja = (lista) => {

    let puntero1 = 0;
    let puntero2 = 1;

    while (puntero2 < lista.length) {

        const nombre1 = lista[puntero1];
        const nombre2 = lista[puntero2];

        const inicial1 = nombre1[0].toLowerCase();
        const inicial2 = nombre2[0].toLowerCase();

        console.log(
            `Comparando: ${nombre1} y ${nombre2}`
        );

        if (inicial1 === inicial2) {

            return [nombre1, nombre2];
        }

        puntero1++;
        puntero2++;
    }

    return null;
};

const pareja = encontrarPareja(invitados);

if (pareja) {

    console.log("Primer par encontrado:");

    console.log(
        `${pareja[0]} y ${pareja[1]} pueden sentarse juntos.`
    );

} else {

    console.log(
        "No se encontró ningún par de invitados."
    );
}