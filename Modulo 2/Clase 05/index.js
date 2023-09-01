const prompt=require('prompt-sync')({sigint:true});

let dataPersona =[];
//.PUSH agrega al final del ARRAY, y UNSHIFT agrega al inicio del ARRAY
const addDataPersona = (firstName,lastName,birthday,address,status,condition=true) =>{
    let person ={
        firstName,
        lastName,
        birthday,
        address,
        status
    }
    if (condition){
        dataPersona.push(person);
    }
    else{
        dataPersona.unshift(person);
    }
}
addDataPersona('JUAN','PEREZ',20,'CABA',0,true);
addDataPersona('MARIA','PEREZ',18,'CABA',0,false);
addDataPersona('ANTONIO','PEREZ',18,'CABA',0,false);
addDataPersona('RAMON','PEREZ',18,'CABA',0,false);

for(let i=1; i<=3; i++){
    let firstName = prompt('INGRESE EL NOMBRE: ');
    let lastName = prompt('INGRESE EL NOMBRE: ');
    let birthday = parseInt(prompt('INGRESE EL NOMBRE: '));
    let address = prompt('INGRESE EL NOMBRE: ');
    let status = parseInt(prompt('INGRESE EL NOMBRE: '));

    addDataPersona(firstName,lastName,birthday,address,status,true);
}

// MOSTRAR EL PROMEDIO DE LAS EDADES

const promedio = () =>{
    let suma = 0;
    dataPersona.forEach( (element)=>{
        suma = suma + element.birthday;
        //suma += element.birthay;
    });
    let promedio = suma / dataPersona.length;
    return promedio;
}

/**METODO DE ARRAY DENOMINADO REDUCE
 * reduce ( (varibaleAcumuladora,dataArray)=>{},valorInicialVariableAcumuladora)
 */
let sumaEdades = dataPersona.reduce( (sumaEdades, person)=>{
    return sumaEdades + person.birthday;
},0);
let promedioReduce = sumaEdades / dataPersona.length;
 console.log('******');
 console.log(promedio());
 console.log('******');
 console.log(promedioReduce);

 //METODOS DE CADENA
 let palabra = 'Hola Mundo';

 //LONGITUD DE LA CADENA
 console.log(palabra.length);

 //pasar str de mayuscula a minuscula
 console.log(palabra.toUpperCase);//mayuscula
 console.log(palabra.toLowerCase);//minuscula
 
 //tirm =>limpiar espacio en blanco al principio y final
 palabra = palabra.trim();
 console.log(palabra.trim().length);

 //replace(valor a bucar, valor remplazo) => reemplazar
 console.log(palabra.replace('H','j'));
 //replaceAll, remplaza todas las 'H' por 'j'

//split metodo de sbucadena, dado un valor devuelve un array
console.log(palabra.split(','));
//includes ('criterio a buscar') devolver un valor verdadero o falso
console.log(palabra.toLowerCase().includes('holas'));

// 1.- Filtrado por nombre (coincidencia) (solicitar al usuario el nombre a buscar)

let words = prompt('INGRESE EL CRITERIO A BUSCAR: ');

let dataFilter = dataPersona.filter((element)=>{
    words = words.toLowerCase();
    let nombres = element.firstName.toLowerCase();
    return nombres.startsWith(words);
})

console.table(dataFilter);