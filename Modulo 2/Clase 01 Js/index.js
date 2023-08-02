const prompt=require('prompt-sync')({sigint:true});

let numeroUno = prompt('Ingrese numero: ');
let numeroDos = prompt('Ingrese numero: ');

numeroUno = parseInt(numeroUno)
numeroDos = parseInt(numeroDos)

/**parseInt => de string a numerico
 * Number() => true, false.... nos indica si es o no es numerico
 * ! significa no
 */

if(!(Number(numeroUno)) || !(Number(numeroDos))){
    console.log('Ingrese solo numeros');
}
else{
    if(numeroUno > numeroDos){
        console.log('Es mayor', numeroUno);
    }
    else if (numeroUno == numeroDos){
        console.log('Son iguales');
    }
    else{
        console.log('Es mayor', numeroDos);
    }
}