//Ejercicio 1 
const doblarNum = (numero = 5) => numero * 2;
console.log(`El doble de 5 es = ${doblarNum()}.`);
//Ejercicio 2
const cuadradoNum = (numero = 6) => numero * numero;
console.log(`El cuadrado de 6 es = ${cuadradoNum()}.`);
//Ejercicio 3
const areaRectangulo = (base = 6, altura = 8) => base * altura;
console.log(`El área del rectangulo es de: ${areaRectangulo()} cm^2.`);
//Ejercicio 4
const parInpar = (numero) => {
    if(numero%2 == 0) {
        console.log(`${numero} es par!`);
    } else {console.log(`${numero} es inpar!`);}
}
parInpar(6);
parInpar(9);
//Ejercicio 5
const personas = [

    { nombre: 'Juan', edad: 18 },
  
    { nombre: 'María', edad: 16 },
  
    { nombre: 'Pedro', edad: 20 },
  
    { nombre: 'Pablo', edad: 15 },
  
    { nombre: 'Laura', edad: 19 },
  
  ];
//Imprime a los mayores de edad
const mayorDeEdad = (array) => {
    let mayoresDeEdad = [];
    array.forEach(element => {
        if(element.edad >= 18) {
            mayoresDeEdad.push(element.nombre);
        }
    })
    return mayoresDeEdad;
}
console.log(mayorDeEdad(personas));
//Imprime a la persona mayor y la persona menor
let arrayEdades = personas.map(element => element.edad);

const personaMayor = (array) => {
    let edadMayor = Math.max(...arrayEdades);
    let edadMenor = Math.min(...arrayEdades);
    array.forEach(element => {
        if(edadMayor === element.edad) {
            console.log(`La persona mayor es: ${element.nombre}`);
        } else if(edadMenor === element.edad) {
            console.log(`La persona menor es: ${element.nombre}`);
        }
    })
}
personaMayor(personas);

//Ejercicio 6
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

const nombrePokemons = (array = pokemons1) => {
    array.forEach(element => {
        console.log(element.nombre);
    })
}
nombrePokemons();

const pokemonesFuego = (array = pokemons1) => {
    array.forEach(element => {
        if(element.tipo === 'fuego') {
            console.log(`${element.nombre} es tipo fuego!`);
        }
    })
}
pokemonesFuego();