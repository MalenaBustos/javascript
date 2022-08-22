let entrada;
let suma= 0;
let cantidad = prompt ("¿Cuantos numeros desea sumar?");
  for(let i=1; i<= cantidad; i++){
    entrada=parseInt(prompt("Ingrese un numero para sumar"));
    suma = suma + entrada;
 }
 alert("la suma es igual a " + suma);