//Ejercicio 1
console.log('Hola mundo');
//Ejercicio 2
const nombre = 'allan baron';
let edad = 28;
const mayorDeEdad = true;
let direccion = {
    calle: 'Mercedesstr',
    numero: '7/3',
    codigoPostal:71063,
    municipio: 'Sindelfingen'
}
const coloresFavoritos = ['azul', 'gris', 'verde'];
const lenguajesFavoritos = ['javascript', 'python', 'flutter'];
const mejorLenguaje = lenguajesFavoritos[0];
const peorLenguaje = lenguajesFavoritos[2];
//ejercicio 3
const numero1 = 15;
const numero2 = 25;
console.log(numero1+numero2);
const numero3 = 37;
const numero4 = 21;
console.log(numero3-numero2);
console.log(numero4*numero2);
console.log(numero3/numero2);
//ejercicio 4
const saludo = 'hola';
if(saludo === 'hola') {
    console.log('Has saludado');
}
//ejercicio 5
const pokemons = ['squirtle', 'charmander', 'bulbasaur'];
console.log(`Los primeros 3 pokemones son:${pokemons[0]}, ${pokemons[1]} y ${pokemons[2]}.`);
//ejercicio 6
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

pokemons1.forEach(pokemon => {
if(pokemon.tipo === 'fuego') {
    console.log(`El pokemon ${pokemon.nombre} es un pokemon de fuego!`);
} else {
    console.log('Tipo de pokemon no identificado!');
}
});