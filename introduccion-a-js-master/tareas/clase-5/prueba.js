document.querySelector('#boton').onclick = function(){
    const cuerpo = document.querySelector('body');
    const nodoP = document.createElement('p');
    const textoP = document.createTextNode("HOLAAAAAA" + document.querySelector('#nombre').value);
    nodoP.appendChild(textoP);
    cuerpo.appendChild(nodoP);
}