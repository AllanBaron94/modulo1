//Ejercicio 1: dobla el numero proporcionado
function doblarNum(numero) {
    return numero * 2;
}

const resultado1 = doblarNum(5);
console.log(resultado1);

//Ejercicio 2: regresa el cuadrado de un número
function cuadradoNum(numero) {
    return numero * numero;
}

const resultado2 = cuadradoNum(4);
console.log(resultado2);

//Ejercicio 3: calcula el area de un rectangulo
function areaRectangulo(base, altura) {
    console.log(base * altura);
}

areaRectangulo(8,10);

//Ejercicio 4: checa si el numero proporcionado es par o inpar
function parInpar(numero) {
    if(numero % 2 == 0) {
        console.log('El numero es par!');
    } else { console.log('El numero es inpar!');}
}
parInpar(8);
parInpar(7);

//Ejercicio 5
const personas = [

    { nombre: 'Juan', edad: 18 },
  
    { nombre: 'María', edad: 16 },
  
    { nombre: 'Pedro', edad: 20 },
  
    { nombre: 'Pablo', edad: 15 },
  
    { nombre: 'Laura', edad: 19 },
  
  ];
//Funcion muestra un array con las personas mayores de edad
function mayorDeEdad(array) {
    let mayoresDeEdad = [];
    array.forEach(element => {
        if(element.edad >= 18) {
            mayoresDeEdad.push(element.nombre);
        } else {console.log('No es mayor de edad!');}
    });
    return mayoresDeEdad;
}

console.log(mayorDeEdad(personas));

//Se crea un array con todas las edades y muestra la persona mas joven y la persona mayor
let arrayEdades = personas.map(elem => elem.edad);
let edadMenor = Math.min(...arrayEdades);
let edadMayor = Math.max(...arrayEdades); 
personas.forEach(element => {
    if(element.edad === edadMenor) {
        console.log(`La persona menor es: ${element.nombre}.`);
    } else if(element.edad === edadMayor) {
        console.log(`La persona mayor es: ${element.nombre}`);
    } 
});

//Ejercicio 6: array de pokemons de ejercicio pasado
const pokemons1 = [
    {nombre: 'Pikachu',
     tipo: 'electrico'
    },
    {nombre: 'Gastly',
     tipo: 'fantasma'      
    },
    {nombre:'Charizard',
     tipo: 'fuego'
    }
];
//Imprime en la consola los nombres de los pokemons
function nombrePokemons(array) {
    array.forEach(element => {
        console.log(element.nombre);
    })
}
nombrePokemons(pokemons1);
//Imprime en la consola los pokemones tipo fuego
function pokemonesFuego(array) {
    array.forEach(element => {
        if (element.tipo === 'fuego') {
            console.log(`${element.nombre} es tipo fuego.`);
        }
    })
}
pokemonesFuego(pokemons1);