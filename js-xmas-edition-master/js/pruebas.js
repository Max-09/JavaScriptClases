function probarValidarCiudad(){
    console.assert(validarCiudad("") === "No se ha seleccionado ninguna ciudad",
    "validar ciudad no funciona");
}

function probarNombre(){
    console.assert(validarNombre("") === "No se ha ingresado ningun nombre",
    "Validar nombre no funciona");
}

function probarRegalo(){
    console.assert(validarRegalo("") === "No se ha ingresado ningun regalo",
    "Validar regalo no funciona");
}

probarValidarCiudad();
probarNombre();
probarRegalo();
