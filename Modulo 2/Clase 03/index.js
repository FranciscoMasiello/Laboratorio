/**FUNCIONES CREACION
 * FUNCIONES DECLARATIVAS
 */
function nombreFunctionSp(){
    console.log('hola!')
    nombreFunctionCp(8,7,5);
}
function nombreFunctionCp(x,y,z){
    let suma = x+y+z;
    console.log(suma);

}
//llamado a la ejecucion de la funcion
nombreFunctionSp();
nombreFunctionCp(2,3,5);

/**FUNCIONES POR EXPRESION
 * MAYORMENTE SE INICIALIZA UNA VARIABLE DE TIPO FUNCTION
 */

const prueba = function ejemplo(){

};
prueba();
/**FUNCIONES ANONIMAS */
const anonimas = function (){

};
/**FUNCIONES AUTOEJECUTABLES */
(
    function(){
        console.log('ejemplos');
    }
)();

/**ARROW FUNCTION
 * const prueba = function ejemplo (){
 * };
 */

const arrowFunc = () =>{

}
arrowFunc();

const sumaArrow = (x,y,z) =>{
    return x+y+z;
}
sumaArrow(3,5,4);