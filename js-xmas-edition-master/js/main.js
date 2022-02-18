
function validarCiudad(ciudad){
    if(ciudad === ""){
        return "No se ha seleccionado ninguna ciudad";
    }
    return "";
}

function validarNombre(nombre){
    if(nombre === ""){
        return "No se ha ingresado ningun nombre";
    }
    return "";
}

function validarRegalo(regalo){
    if(regalo === ""){
        return "No se ha ingresado ningun regalo";
    }
    return "";
}

function validarFormulario(event){
    const $form = document.querySelector('#carta-a-santa');
    const ciudad = $form.ciudad.value;
    const nombre = $form.nombre.value;
    const regalo = $form['descripcion-regalo'].value;

    const errorNombre = validarNombre(nombre);
    const errorCiudad = validarCiudad(ciudad);
    const errorRegalo = validarRegalo(regalo);

    const errores = {
        nombre : errorNombre,
        ciudad : errorCiudad,
        'descripcion-regalo' : errorRegalo
    };

    const esExito = manejoErrores(errores) === 0;

    if(esExito){
        document.querySelector('#carta-a-santa').className ="oculto";
        document.querySelector('#exito').className = "";

        setTimeout(() => {
            window.location.href = 'file:///C:/Users/maxir.COCHO/Desktop/Js/js-xmas-edition-master/wishlist.html';
        }, 5000);
    }else{
        document.querySelector('#exito').className = "oculto";
    }
    event.preventDefault();
}

function manejoErrores(errores){
    const keys = Object.keys(errores);
    const $errores = document.querySelector('#errores');

    let cantidadErrores = 0;

    document.getElementById("errores").innerHTML = "";

    keys.forEach(function(key){
        const error = errores[key];
        
        if(error){
            $form[key].className = "error";
            cantidadErrores++;
            const $error = document.createElement('li');
            $error.innerText = error;
            $errores.appendChild($error);
            
        }else{
            $form[key].className = "";
        }
        
        
    });
    return cantidadErrores;
    // errorNombre = errores.nombre;
    // errorCiudad = errores.ciudad;
    // errorRegalo = errores.regalo;

    // if(errorNombre !== ""){
    //     $form.nombre.className = "error";
    // }else{
    //     $form.nombre.className = "";
    // }

    // if(errorCiudad !== ""){
    //     $form.ciudad.className = "error";
    // }else{
    //     $form.ciudad.className = "";
    // }

    // if(errorRegalo !== ""){
    //     $form["descripcion-regalo"].className = "error";
    // }else{
    //     $form["descripcion-regalo"].className = "";
    // }
};


const $form = document.querySelector("#carta-a-santa");
$form.onsubmit = validarFormulario;

