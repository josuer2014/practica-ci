function saludar(nombre) {
    return `Hola, ${nombre}. Bienvenido a la práctica de desarrollo de Integración`;
}

function despedir(nombre) {
    return `Adiós, ${nombre}. Gracias por utilizar la aplicación`;
}

function mostrarInformacion(nombre) {
    return "Proyecto desarrollado con Node.js, Git y GitHub";
}

console.log(saludar("Profe"));
console.log(despedir("Profe"));
console.log(mostrarInformacion());

module.exports = { saludar, despedir, mostrarInformacion };