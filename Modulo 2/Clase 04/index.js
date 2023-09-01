const prompt=require('prompt-sync')({sigint:true});

let dataPersona =[];
//.PUSH agrega al final del ARRAY, y UNSHIFT agrega al inicio del ARRAY
const addDataPersona = (firstName,lastName,birthday,address,status,condition) =>{
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

for(let i=1; i<=3; i++){
    let firstName = prompt('INGRESE EL NOMBRE: ');
    let lastName = prompt('INGRESE EL NOMBRE: ');
    let birthday = parseInt(prompt('INGRESE EL NOMBRE: '));
    let address = prompt('INGRESE EL NOMBRE: ');
    let status = parseInt(prompt('INGRESE EL NOMBRE: '));

    addDataPersona(firstName,lastName,birthday,address,status,true);
}

console.table(dataPersona);

// FOREACH lo que hace es un recorrido

// FILTER realizamos filtrados
let dataPersonaFilter = dataPersona.filter((element)=>{
    return element.birthday >=18;
});

// FIND devolvera un nuevo array con el elemento encontrado
dataPersonaFilter = dataPersona.find((person)=>{
    return person.birthday ==18;
});

// MAP nos permite realizar iteracion con los elementos
dataPersonaFilter = dataPersona.map((person)=>{
    return {'fullName':person.firstName+ ''+ person.lastName};

});

/** METODOS DE ORDENAMIENTO
 * SORT();
 */

let dataPersonaOrderAsc = dataPersona .sort((a,b)=>{
    return a.birthday - b.birthday;
});