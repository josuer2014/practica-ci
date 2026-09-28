function saludar(nombre) {
    return `Hola, ${nombre}. Bienvenido a la práctica de Integración`;
}

function despedir(nombre) {
    return `Adiós, ${nombre}. Gracias por utilizar la aplicación`;
}

console.log(saludar("Profe"));
console.log(despedir("Profe"));

module.exports = { saludar, despedir };