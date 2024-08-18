var opcion = prompt("¡Hola! Soy Eva, tu asistente virtual del Servicio al Cliente de Mentel. Estoy aquí para ayudarte en lo que necesides.\nEscribe el número de la opción que buscas: \n1.- Boletas y Pagos \n2.- Señal y llamadas \n3.- Oferta comercial  \n4.- Otras consultas")

//FUNCIONES


// estructura de control switch case, donde key (opcion) es el valora evaluar y value ("1") los valores para cada caso
switch (opcion) { //inicio switch case
    case "1":
        boletasPagos(); //llamada o invocacion a una funcion
        break; // para salir del caso y terminar el switch case
    case "2":
        reportarProblemas();
        break; // si falta un break pasa al siguiente caso
    case "3":
        ofertaComercial();
        break;
    case "4":
        otrasConsultas();
        break;
    default: //caso por defecto que se ejecutara si no se cumple ningun caso
        alert("La opción ingresada no es válida.")
        break;
} //fin switch case

//estructura de la funcion
// function nombreFuncion(parametros) {}
function boletasPagos() { //inicio de la funcion
    var ingreso = prompt("Seleccione una opción\n"+
        "1.- Ver boleta\n"+
        "2.- Pagar cuenta"
    )

    if (ingreso == "1") {
        alert("Haga click para descargar su boleta")
    } else if (ingreso == "2"){
        alert("Ustes está siendo transferido. Espere por favor...")
    } else {
        alert("Opción ingresada no es valida")
    }
} //fin de la funcion

function reportarProblemas() { //inicio de la funcion
    var ingreso = prompt("Seleccione una opción\n"+
        "1.- Problemas con la señal\n"+
        "2.- Problemas con las llamadas"
    )
    if (ingreso == "1" || ingreso == "2") { // si ingreso es igual a 1 o 2
        var solicitudCliente = prompt("A continuación escriba su solicitud") 
        alert(`Estimado usuario, su solicitud: ${solicitudCliente} ha sido ingresada con éxito. Pronto será contactado por uno de nuestros ejecutivos`)
    //    alert("Estimado usuario, su solicitud: " + comentario) // otra forma de concatenar
    } else {
        alert("Opción ingresada no es valida")
    }
} //fin de la funcion

function ofertaComercial() { //inicio de la funcion
    var ingreso = prompt("Mentel tiene una oferta comercial acorde a tus necesidades!\n"+
        "Para conocer más información y ser asesorado personalmente por un ejecutivo.\n"+
        "Escribe SI, si deseas ser contactado por un ejecutivo.\n"+
        "De lo contrario escribe NO."
    )
    //convirtiendo el ingreso a mayuscula toUpperCase()
    var ingresoMayuscula = ingreso.toUpperCase(); 
    if (ingresoMayuscula == "SI") {
        alert("Un ejecutivo contactara con usted")
    } else if (ingresoMayuscula == "NO") {
        alert("Gracias por preferir nuestros servicios")
    } else {
        alert("Opción ingresada no es valida")
    }
} //fin de la funcion

function otrasConsultas() { //inicio de la funcion
    var ingresoConsulta = prompt("A continuación escriba su consulta")
    alert("Estimado usuario, su consulta: "+ingresoConsulta+" ha sido ingresada con éxito. Pronto será contactado por uno de nuestros ejecutivos")
} //fin de la funcion