let nombreAlumnoNuevo = prompt("Por favor, ingrese el nombre y apellido del estudiante");
console.log(nombreAlumnoNuevo);

let notaPrimerParcial = parseInt(prompt("Por favor, ingrese la nota de su primer parcial"));
console.log(notaPrimerParcial);

let notaSegundoParcial = parseInt(prompt("Por favor, ingrese la nota de su segundo parcial"));
console.log(notaSegundoParcial);

let promedio = calcularPromedio (notaPrimerParcial , notaSegundoParcial)
console.log (promedio)

function calcularPromedio (nota1 , nota2){
    console.log (nota1)
    console.log (nota2)
    return ((nota1 + nota2) /2)
}

console.log("El estudiante " + nombreAlumnoNuevo +" ha obtenido una nota de " +notaPrimerParcial, 
" en su primer parcial. Mientras que en su segundo parcial obtuvo un " +notaSegundoParcial+ 
". Esto significa que la nota promedio resultante de ambos parciales es un " +promedio + ".")

if(promedio>=7){
    alert ("El estudiante ha promocionado la asignatura y por lo tanto no debe rendir final")
}
else if(promedio >=4 && promedio<7){
    alert ("El estudiante ha aprobado la asignatura pero aún debe rendir final")
}
else if(promedio<4){
    alert ("El estudiante ha desaprobado la asignatura y por lo tanto debe recursar")
}