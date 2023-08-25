const ejemplo = (a,x,y,z)=>{
    let suma = a+x+y+z;
}

ejemplo(6,5,7,8);

let firstName = 'EJEMPLO'
/** OBJETO DECLARAMOS */
const persona = {
    firstName ,
    lastName:'PEDRO',
    birthday: 20,
    status: true    
};

persona.address='CABA';
console.log(persona.firstName)

const {status, birthday}=persona; /**----> otra forma (mas ordenada) de presentar los atributos */
console.log(status);
console.log(birthday)

/** ARRAY [] */
const arrayEjemplo = new Array ('hola',2,3,4,true);
console.log(arrayEjemplo.length);
const arrayDos=[3,'hola','buenas',3,4,5]; /** [] array vacio */
console.log(arrayDos.length);
console.log(arrayDos[2]);

/** OPERACIONES Y FUNCIONES DENTRO DE ARRAYS */
//PUSH agrega uno o mas elementos al FINAL del vector
//UNSHIFT agrega uno o varion elementos al PRINCIPIO del vector

arrayDos.push(9,5,6,'xd');
console.log(arrayDos.length);
arrayDos.unshift('****');
console.log(arrayDos.length)
console.log(arrayDos)

//pop() ELIMINA el ULTIMO elemento del vector
//shift() ELIMINA el PRIMER elemento del vector

arrayDos.pop();
console.log(arrayDos);
arrayDos.shift();
console.log(arrayDos);
console.log(arrayDos.length);
//splice(posicion, cantidad)
arrayDos.splice(2,1); //si pongo .splice(1,2) se elimina a partir de la posicion indicada, y la cantidad seria los que siguen
console.log(arrayDos.length);

/**metodo de recorrido foreach ------- forEach(elemento en si, posicion)*/
arrayDos.forEach((elements,pos)=>{
console.log(`${elements} => POS ${pos}`)
});