// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un array
  // Tu código:
  var elemento= array[0];
  return elemento;
}

function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
  var ultimoElemento=array.length-1;
  var elemento=array[ultimoElemento];
  return elemento;
}

function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
  var elemento=array.length;
  return elemento;;
}

function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
  var ultimaPosicion=array.length;
  for(var i=0; i<ultimaPosicion; i++){
		array[i]++;
  };
	return array;
}

function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
  array.push(elemento);
  return array;
}

function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
  array.unshift(elemento);
  return array;
}

function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
  var frase=palabras[0];          // Evita el espacio al inicio.
  for(i=1; i<palabras.length; i++){
         frase=frase+" "+palabras[i];
  }
  return frase;
}

function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
  var existe=false;
  var ultimoElemento=array.length;
  var i=0;
  while(!existe && i<ultimoElemento){
	if(array[i]===elemento){
		existe=true;
	}
	i++
 }
  return existe;
}

function agregarNumeros(numeros) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
  var valor=0;
  for(var i=0; i<numeros.length; i++){
	valor=valor + numeros[i];
  }
  return valor;
}

function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
  var promedio=agregarNumeros(resultadosTest)/resultadosTest.length;
  return promedio;
}

function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:
  var mayor=0;
  for(i=0; i<numeros.length; i++){
	if(numeros[i]>mayor){
		mayor=numeros[i];
	}
  }
  return mayor;
}

function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0
  // Si se pasa un argumento, simplemente devuélvelo
  // Tu código:
  if(arguments.length<1){
	return 0;
  }
  var valor=1;
  for(i=0; i<arguments.length; i++){
	valor=valor*arguments[i];
  }
  return valor;
 } 

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
};
