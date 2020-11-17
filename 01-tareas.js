// Ejercicios de la pagina 138 [Problemas propuestos]


// Ejercicio 4.1
// Fijando los elementos para hacer el algoritmo
let salario = 1500;
let años = 6;
let porcentaje = 0;
let salarios = [];
// Por cada año que pasa , el algoritmo le saca el 10% del salario y le suma el porcentaje
// Para tener el proximo pago
for(let i = 0; i < años; i++){
    porcentaje =  (salario*10)/100;
    salario = salario + porcentaje;
    // Se crea una lista vacia, y se le suma cada pago a este para ver cuanto se le pago cada año
    salarios.push(salario)
}
console.log("El nuevo sueldo en " + años + " año (s) es de: " + salario)
console.log(salarios)

// Ejercicio 4.2
//