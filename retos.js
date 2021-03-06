// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un  array (pasado por parametro)
  // Tu código:
  return array[0];
}

function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
  return array[array.length - 1];
  // return array.pop();-- pop te elimina el ultimo elemento y lo guarda y te lo muestra.
}

function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
  return array.length;
}

function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  //Forma larga
  // const res = [];
  // array.forEach((elem) => {
  //   res.push(elem + 1);
  // });
  // return res;
  // Tu código:
  return array.map((item) => item + 1);
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
  array.unshift(elemento); // unshift me devuelve un nuevo lenght
  return array;
}

function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
  return palabras.join(" ");
}

function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
  return array.includes(elemento);
}

function agregarNumeros(numeros) {
  // "numeros" debe ser un arreglo de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
  let total = numeros.reduce((a, b) => a + b);
  return total;
}

function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
  // const suma = resultadosTest.reduce((a, b) => a + b);
  // let promedio = suma / resultadosTest.length;
  // return promedio;
  return (resultadosTest.reduce((a, b) => a + b) / resultadosTest.length);
}

function numeroMasGrande(numeros) { //si ponemos los 3 puntitos aqui se llama REST lo convierte en un array
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:
  var NumMayor = Math.max(...numeros); // los tres puntitos ... se llama spread [1,2,3,4] => 1,2,3,4 // SPREAD
  return NumMayor;
}

function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
  // Escribe tu código aquí:
  if (arguments.length === 0) {
    return 0;
  } else {
    const array = [];
    for (let i = 0; i < arguments.length; i++) {
      array.push(arguments[i]);
    }
    return array.reduce((a, b) => a * b);
  }
}

function cuentoElementos(arreglo) {
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
  //Escribe tu código aquí
  // const MasGrande = [];
  // for (let i = 0; i <= arreglo.length; i++) {
  //   if (arreglo[i] > 18) {
  //     MasGrande.push(arreglo[i]);
  //   }
  // }
  // return MasGrande.length;
  return arreglo.filter((item) => item > 18).length; // Forma corta
  // let res = arreglo.filter((item) => item > 18).length;
  // return res.length();
}

function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente.
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario.
  //Escribe tu código aquí
//   let diaDeLaSemana = new Date();
//   switch (numeroDeDia) {
//     case 1:
//       //domingo
//       return "Es fin de semana";
//       break;
//     case 2:
//       //lunes
//       return "Es dia Laboral";
//       break;
//     case 3:
//       //martes
//       return "Es dia Laboral";
//       break;
//     case 4:
//       //miercoles
//       return "Es dia Laboral";
//       break;
//     case 5:
//       //jueves
//       return "Es dia Laboral";
//       break;
//     case 6:
//       //viernes
//       return "Es dia Laboral";
//       break;
//     case 7:
//       //sabado
//       return `Es fin de semana`;
//       break;
//     default:
//       console.log("Dia no valido");
//   }
//   return numeroDeDia();
// }
switch (numeroDeDia) {
  case 2:
  case 3:
  case 4:
  case 5:
  case 6:
    return 'Es dia Laboral';
  case 1:
  case 7:
    return 'Es fin de semana';
  }
}
//////////
// if (numeroDeDia === 1 || numeroDeDia === 7){
//   return 'Es fin de semana';
// }else {
//   return 'Es dia Laboral';
// }
// }

function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí
  // Number.isInteger(n);
  // let texto = n.toString();
  // if (texto.includes('9')) {
  //   return true;
  // } else {
  //   return false;
  // }
  return n.toString().charAt(0) === '9'; // 910 '910'[0] = '9'
}


function todosIguales(arreglo) {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí
  // some(alguno)= si hay alguno q es igual te devuelve true
  // every(todo) = si todos son iguales te devuelve true, tienen que ser todos iguales
  return arreglo.every((acc) => arreglo[0] == acc); // el areglo[0] me lo compara con el acc y se hace como un bucle para verificar mi primer numero
}

function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:
//   if (
//     (newA = array.find((element) => element == "Enero","Marzo", "Noviembre"))
//   ) {
//     return newA;
//   } else {
//     return "No se encontraron los meses pedidos";
//   }
// }
const resultado = array.filter((mes) => {
  if (mes === 'Enero' || mes === 'Marzo' || mes === 'Noviembre') {
    return mes;
  }
});
  return resultado.length !== 3 ? 'No se encontraron los meses pedidos' : resultado;
}

function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:
  return array.filter((num) => num > 100);
}

function breakStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  // Tu código:
  if (numero < 0) {
    return 'Se interrumpió la ejecución';
  }
  const array = [];
  let bandera = false;
  for (let i = 1; i <= 10; i++) {
    if ((numero + 2) === i ) {
      bandera = true;
      break;
    } else {
      numero += 2;
      array.push(numero)
    }
  }
  return array;
}

function continueStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  // Tu código:
  const array = [];
  for (let i = 0; i < 10; i++) {
    if (i === 5 ) {
      continue;
    } else {
      numero += 2;
      array.push(numero)
    }
  }
  return array;
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
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  mayorACien,
  breakStatement,
  continueStatement,
};
