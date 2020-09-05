// No cambies los nombres de las funciones.

function obtenerMayor(x, y) {
  // "x" e "y" son números enteros (int).
  // Devuelve el número más grande
  // Si son iguales, devuelve cualquiera de los dos
  // Tu código:
  var mayor;
  if(x>y){
      mayor=x;
      return mayor;
  }
  mayor=y;
  return mayor;
}

function saludo(idioma) {
  // Devuelve un saludo en tres diferentes lenguajes:
  // Si "idioma" es "aleman", devuelve "Guten Tag!"
  // Si "idioma" es "mandarin", devuelve "Ni Hao!"
  // Si "idioma" es "ingles", devuelve "Hello!"
  // Si "idioma" no es ninguno de los anteiores o es `undefined` devuelve "Hola!"
  // Tu código:
  
		if(idioma==="aleman"){
				
				return "Guten Tag!";
				
		}else if(idioma==="mandarin"){
				
				return "Ni Hao!";
				
		}else if(idioma==="ingles"){
				
				return "Hello!";
				
		}else if(idioma===undefined){
				
				return "Hola!";
				
		}
  return "Hola!";
}

function esDiezOCinco(numero) {
    // Devuelve "true" si "numero" es 10 o 5
    // De lo contrario, devuelve "false"
    // Tu código:
	var es=false;
	if(numero===10 || numero===5){
		es=true;
	}
	return es;
}

function estaEnRango(numero) {
  // Devuelve "true" si "numero" es menor que 50 y mayor que 20
  // De lo contrario, devuelve "false"
  // Tu código:
  var entre=false;
  if(numero<50 && numero>20){
         entre=true;
  }
  return entre;
}

function esEntero(numero) {
  // Devuelve "true" si "numero" es un entero (int/integer)
  // Ejemplo: 0.8 -> false
  // Ejemplo: 1 -> true
  // Ejemplo: -10 -> true
  // De lo contrario, devuelve "false"
  // Pista: Puedes resolver esto usando `Math.floor`
  // Tu código:
  var es=false;
  var partentera=Math.floor(numero);
  var partedecimal=numero-partentera;
  if(partedecimal===0){
	es=true;
  }
  return es;
}

function fizzBuzz(numero) {
  // Si "numero" es divisible entre 3, devuelve "fizz"
  // Si "numero" es divisible entre 5, devuelve "buzz"
  // Si "numero" es divisible entre 3 y 5 (ambos), devuelve "fizzbuzz"
  // De lo contrario, devuelve el numer
  var mensaje=numero;

 if(numero%3===0 && numero%5===0){
			return "fizzbuzz";
}
 if(numero%5===0){
			return "buzz";
}

 if(numero%3===0){
			return "fizz";
}
  return mensaje;
}

function esPrimo(numero) {
  // Devuelve "true" si "numero" es primo
  // De lo contrario devuelve "falso"
  // Pista: un número primo solo es divisible por sí mismo y por 1
  // Pista 2: Puedes resolverlo usando un bucle `for`
  // Nota: Los números 0 y 1 NO son considerados números primos
  var es=true;
  //var divisor=2;
  if(numero===0 || numero===1){
		es=false;
  }
  if(numero>2){
	for(divisor=2; divisor<numero; divisor++){
		if((numero%divisor)==0){
			this.es=false;
			return this.es;
		}
	}
  }
  return es;
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  obtenerMayor,
  saludo,
  esDiezOCinco,
  estaEnRango,
  esEntero,
  fizzBuzz,
  esPrimo
};

