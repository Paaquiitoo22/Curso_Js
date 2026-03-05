//SIEMPRE GUARDAR ANTES DE EJECUTAR EL CÓDIGO, PARA VER LOS CAMBIOS EN LA CONSOLA

// var: variable global, se puede redeclarar y reasignar, no se recomienda su uso
var name = "Paco"
console.log("Hola, " + name+" con variable var.")

var name = "Laura"//redeclaramos
console.log("Hola, " + name+" con variable var, tras la reasignación")

// let: variable de bloque*, se puede reasignar pero no redeclarar, se recomienda su uso
let name1 = "Paco"
console.log("Hola, " + name1+" con variable let.")

name1 = "Laura"//reasignamos
console.log("Hola, " + name1+" con variable let, tras la reasignación")

// const: variable de solo lectura, no se puede reasignar ni redeclarar, se recomienda su uso para valores que no cambiarán
const name2 = "Paco"
console.log("Hola, " + name2+" con variable const.")
// name2 = "Pepe"// No se puede reasignar el valor de una constante