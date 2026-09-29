const { saludar, despedir, mostrarInformacion } = require("./app");

function ejecutarPruebas() {
    console.log("Iniciando pruebas...");

    if (saludar("Profe") !== "Hola, Profe. Bienvenido a la práctica de Integración") {
    throw new Error("Error en la función saludar");
    }

    if (despedir("Profe") !== "Adiós, Profe. Gracias por utilizar la aplicación") {
        throw new Error("Error en la función despedir");
    }

    if (mostrarInformacion() !== "Proyecto desarrollado con Node.js, Git y GitHub") {
        throw new Error("Error en la función mostrarInformacion");
    }

    console.log("Todas las pruebas fueron ejecutadas correctamente.");
}

ejecutarPruebas();