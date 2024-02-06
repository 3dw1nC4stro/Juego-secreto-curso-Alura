let numeroSecreto = 0;
let intentos = 0; 
let listaNumerosSorteados = []
let numeroMaximo = 10 
console.log(numeroSecreto)

//El document sirve para conectar JS con los elementos que hay en el html
// con innerhtml podemos definirle un titulo

/*let parrafo = document.querySelector('p');
parrafo.innerHTML = 'Indica un numero del 1 al 10';*/

//el parametro elemento se refiere a la etiqueta que vamos a cambiar y otro parametro llamado texto
//estas quedan disponibles como unas variables  dentro de la funcion 

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    //donde estaba colocando el elemento fijo cambio y cololo el elemento
    elementoHTML.innerHTML = texto;
    return;
    //y donde esta el texto fijo lo cambio y le pongo texto
}

 /*para decir que voy a crear una funcion utilizo esto y el nombre que usamos en el html y hay que usar
los parentesis y los llaves(cuerpo)*/

function verificarIntento() {
    //verificar el intento del usuario con el numero secreto
    //vamos a capturar lo que el usuario coloco
    //asi como querySelector ella retorna el objeto y lo que queremos el valor
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    //console.log (numeroDeUsuario == numeroSecreto); este console.log se convierte en el if
    //console.log (intentos)
    if(numeroDeUsuario === numeroSecreto){
        asignarTextoElemento('p', `Acertaste el numero en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        //El usuario no acertó
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('p', 'El numero secreto es menor')
    } else {
        asignarTextoElemento('p','El numero secreto es mayor')
    }
    intentos++;
     limpiarCaja(); //Aqui llamamos a la funcion/la estamos invocando
    }
    /*console.log(numeroDeUsuario);
    console.log(numeroSecreto);
    console.log (typeof(numeroSecreto));*/
    
    //console.log(typeof(numeroDeUsuario));
    //podemos utilizar el document.queryselector partiendo de la base de que tenemos solo un input
return;
}
//Es el id de nuestro input
function limpiarCaja(){
    //no es necesario usar la variable: let ValorCaja
    //valorCaja.value = ''
     document.querySelector('#valorUsuario').value = ''; 
    


}
function generalNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    // si ya sorteamos todos los numeros 
    if(listaNumerosSorteados.length == numeroMaximo){
    asignarTextoElemento('p', 'Ya se sortearon todos los numeros posibles');
    } else {

        // si el numero generado esta en la lista
        if (listaNumerosSorteados.includes(numeroGenerado)){
            return generalNumeroSecreto();
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;

        }
        //no necesitamos crear una variable por lo tanto ponemos el return
        //return numeroSecreto; (para retornar el numero) NO ES NECESARIO
    }
}
/*aqui VSC espero un elemento y un texto y hay que pasarlo, en la llamada o ejecucuion de la funcion poner h1
entre comillas y luego el texto que queremos tener*/
function condicionesIniciales (){
    asignarTextoElemento('h1', 'Juego del numero secreto');
    asignarTextoElemento('p', `Indica un numero del 1 al ${numeroMaximo}` )
    numeroSecreto = generalNumeroSecreto();
    intentos = 1;
}
function reiniciarJuego() {
    //limpiar la caja
    limpiarCaja();
    //indicar mensaje de inicio del rango de numeros
    //generar el numero aleatorio
    //inicializar el numero de intentos 
    condicionesIniciales();
    //Deshabilitar el boton de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true');

    
}
condicionesIniciales();