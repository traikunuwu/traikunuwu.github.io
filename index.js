var aNombres = [],
    aApellidos = [],
    aEmails = [],
    aAsuntos = [],
    aMensajes = [];

var elementoBotonEnviar = document.querySelector ('#btnEnviar');

elementoBotonEnviar.addEventListener ('click', registrarContacto);

function registrarContacto (){
    var  aNombres = document.querySelector('#txtNombres').value,
        aApellidos = document.querySelector('#txtApellidos').value,
        aEmails = document.querySelector('#txtEmails').value,
        aAsuntos = document.querySelector('#txtAsuntos').value,
        aMensajes = document.querySelector('#txtMensajes').value;
}

    aNombres.push(aNombres);
    aApellidos.push(aApellidos);
    aEmails.push(aEmails);
    aAsuntos.push(aAsuntos);
    aMensajes.push(aMensajes);

    localStorage.setItem('nombres', JSON.stringify(aNombres));
    localStorage.setItem('apeliidos', JSON.stringify(aApellidos));
    localStorage.setItem('emails', JSON.stringify(aEmails));
    localStorage.setItem('asntos', JSON.stringify(aAsuntos));
    localStorage.setItem('mensajes', JSON.stringify(aMensajes));