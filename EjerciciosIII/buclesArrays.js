//Ejercicio 1

const arrayStrings = ['verde', 'azul', 'rojo', 'naranja', 'Amarillo', 'arena','café'];
//con for of
let newArray = (arr) => {
    let coloresConA = [];
    for (const color of arrayStrings) {
        if(color[0] === 'a' || color[0] === 'A') {
            coloresConA.push(color);
        }
    }
    console.log(coloresConA);
}

// con forEach
let newArray2 = (arr) => {
    let coloresConA = [];
    arrayStrings.forEach((color) => {
        if(color[0] === 'a' || color[0] === 'A') {
            coloresConA.push(color);
        }
    })
    console.log(coloresConA);
}

//con filter
let newArray3 = arrayStrings.filter((color) => {
    if(color[0] === 'a' || color[0] === 'A') {
        return color;
    }
});

//Ejercicio 2
//3 maximos intentos

/*const pinSecreto = '1234';
let pin = prompt('Introduce el pin:');
let intentos = 0;

while(intentos < 3){
    if(pin === pinSecreto) {
        console.log('Eso fue correcto!');
        break;
    } 
    else {
        console.log('Eso estaba mal, intenta de nuevo');
        intentos++
        pin = prompt(`Te quedan ${3-intentos} intentos.`);
    }
}

//intentos infinitos, se puede salir al escribir 'salir'
const pinCorrecto = '1234';
let pin2 = prompt('Introduce el pin:');

while(pin2 !== 'salir'){
    if(pin2 === pinCorrecto) {
        console.log('Eso fue correcto!');
        break;
    } 
    else {
        console.log('Eso estaba mal, intenta de nuevo');
        pin2 = prompt(`Para salir, escribe la palabra 'salir'.`);
    }
}*/

//Ejercicio 3
//checar si un string es un palindromo con for
/*const checarPalindromo = (string) => {
    let stringSinEspacio = string.split(' ').join('');
    let largo = stringSinEspacio.length;
    for (let i=0; i < largo/2; i++) {
        if(stringSinEspacio[i].toLowerCase() !== stringSinEspacio[largo-1-i].toLowerCase()) {
            return 'No es un palíndromo';
        }
    }
    return 'Es un palíndromo!';
}

const string = prompt('Escriba una palabra:');
const resultado = checarPalindromo(string);

console.log(resultado);*/

//checar si un string es un palíndromo con Built in Function reverse()
/*const checarPalindromo2 = (string2) => {
    const stringSinEspacio2 = string2.split(' ').join('');
    const stringReverse = stringSinEspacio2.split('').reverse().join('');
    if(stringSinEspacio2.toLowerCase() === stringReverse.toLowerCase()){
        return 'Es un palindromo';
    } else {return 'No es un palíndromo!';}
}

const string2 = prompt('Escriba una palabra:');
const resultado2 = checarPalindromo2(string2);

console.log(resultado2);*/

//Mismo ejercicio con array de Strings
const esPalindromoArray = (array) => {
    const arraySinEspacio = array.map(element => element.split(' ').join('').toLowerCase());
    const arrayReverse = arraySinEspacio.map(element =>  element.split('').reverse().join('').toLowerCase());
    //const arraySinEspacioMin = arraySinEspacio.toLowerCase();
    //const arrayReverseMin = arrayReverse.toLowerCase();
    
    return arraySinEspacio.map((string, index) => {
        return {
            string: array[index],
            esPalindromo: string === arrayReverse[index]
        };
    });
}
const arrayPalindromos = ['anita lava la tina', 'anitaa laba la tiina', 'Anita lava La tina'];
console.log(esPalindromoArray(arrayPalindromos));

//Ejercicio 4
//con if else
function likes(arrayNombres) {
    if (arrayNombres.length === 0) {
      return 'Nadie ha dado like';
    } else if (arrayNombres.length === 1) {
      return `${arrayNombres[0]} ha dado like`;
    } else if (arrayNombres.length === 2) {
      return `${arrayNombres[0]} y ${arrayNombres[1]} han dado like`;
    } else if (arrayNombres.length === 3) {
      return `${arrayNombres[0]}, ${arrayNombres[1]} y ${arrayNombres[2]} han dado like`;
    } else {
      return `${arrayNombres[0]}, ${arrayNombres[1]} y ${arrayNombres.length - 2} personas más han dado like`;
    }
  }

//con switch case
const likesSwitch = (array) => {
    switch (array.length) {
        case 0:
            return 'Nadie ha dado like';
        case 1:
            return `${array[0]} ha dado like`;
        case 2:
            return `${array[0]} y ${array[1]} han dado like`;
        case 3:
            return `${array[0]}, ${array[1]} y ${array[2]} han dado like`;
        default:
            return `${array[0]}, ${array[1]} y ${array.length -2} personas mas han dado like`;  
    }
}

//Ejercicio 5

const users = [
    {
      name: 'Juan',
      age: 25,
      city: 'Madrid',
      hobbies: ['fútbol', 'poker', 'programar'],
    },
    {
      name: 'María',
      age: 30,
      city: 'Barcelona',
      hobbies: ['pintar', 'leer', 'programar'],
    },
    {
      name: 'Pedro',
      age: 20,
      city: 'Madrid',
      hobbies: ['fútbol', 'programar'],
    },
    {
      name: 'Laura',
      age: 35,
      city: 'Barcelona',
      hobbies: ['pintar', 'leer', 'programar'],
    },
    {
      name: 'Pablo',
      age: 27,
      city: 'Madrid',
      hobbies: ['fútbol', 'poker', 'programar'],
    },
  ];

//Crea una función que devuelva un array con los nombres de las personas que viven en Madrid.
const usuariosDeMadrid = users.filter(usuario => usuario.city === 'Madrid');
const nombresMadrid = (array) => {
    return array.map(usuario => usuario.name);
}
  
console.log(nombresMadrid(usuariosDeMadrid));
// Crea una función que devuelva un array con los nombres de las personas que tengan más de 25 años.
const usuariosMayores = users.filter(usuario => usuario.age > 25);
const nombresMayores = (array) => {
    return array.map(usuario => usuario.name);
}

console.log(nombresMayores(usuariosMayores));
//Crea una función que devuelva un array con los nombres de las personas que tengan más de 25 años y que vivan en Madrid.
const usuariosMadridYMayores = usuariosDeMadrid.filter(usuario => usuario.age > 25);
const nombresMadridMayores = (array) => {
    return array.map(usuario => usuario.name);
}

console.log(nombresMadridMayores(usuariosMadridYMayores));
//Encuentra la primera persona que le guste programar.
const personaHobbyProgramar = (array) => {
    return array.find(usuario => usuario.hobbies.includes('programar'));
}

console.log(personaHobbyProgramar(users));
//Haz la suma de todas las edades de cada persona
const arrayEdades = users.map(usuario => usuario.age);
const suma = arrayEdades.reduce((acumulador, elemento) => {
    return acumulador + elemento;
});
console.log(suma);
//Crea un nuevo array solo con la ciudad de cada persona y su primer hobby. 
const ciudadYPrimerHobby = (array) => {
    return array.map((usuario) => {
        return {
            city: usuario.city,
            hobby: usuario.hobbies[0]
        }
    });
}

console.log(ciudadYPrimerHobby(users));

//Ejercicio 6
//Crea una función que reciba un array de strings y devuelva un array con las strings ordenadas alfabéticamente de menor a mayor
const ordenarAlfabetico = (array) => array.sort();
// teniendo en cuenta mayusculas y acentos
const ordenarAlfabetico2 = (array) => array.sort((a,b) => a.localeCompare(b));
console.log(ordenarAlfabetico2(arrayStrings));

//Dado el siguiente array de numeros, crea una función que devuelva un array sin los números duplicados.
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const numbersNoDuplicados = numbers.filter((value, index, arr) => {
    return arr.indexOf(value) === index;
});

console.log(numbersNoDuplicados);

//Dado el siguiente array de objetos, crea una función que devuelva un array sin los objetos duplicados.

const users1 = [
    {
      name: 'Juan',
      age: 25,
      city: 'Madrid',
      hobbies: ['fútbol', 'poker', 'programar'],
    },
    {
      name: 'María',
      age: 30,
      city: 'Barcelona',
      hobbies: ['pintar', 'leer', 'programar'],
    },
    {
      name: 'Pedro',
      age: 20,
      city: 'Madrid',
      hobbies: ['fútbol', 'programar'],
    },
    {
      name: 'Laura',
      age: 35,
      city: 'Barcelona',
      hobbies: ['pintar', 'leer', 'programar'],
    },
    {
      name: 'Pablo',
      age: 27,
      city: 'Madrid',
      hobbies: ['fútbol', 'poker', 'programar'],
    },
    {
      name: 'Juan',
      age: 25,
      city: 'Madrid',
      hobbies: ['fútbol', 'poker', 'programar'],
    },
    {
      name: 'María',
      age: 30,
      city: 'Barcelona',
      hobbies: ['pintar', 'leer', 'programar'],
    },
    {
      name: 'Pedro',
      age: 20,
      city: 'Madrid',
      hobbies: ['fútbol', 'programar'],
    },
    {
      name: 'Laura',
      age: 35,
      city: 'Barcelona',
      hobbies: ['pintar', 'leer', 'programar'],
    },
    {
      name: 'Pablo',
      age: 35,
      city: 'Madrid',
      hobbies: ['fútbol', 'poker', 'programar'],
    },
  ];

const usersNoDuplicados = (array) => {
    return array.filter((user, index) =>{
        const userString = JSON.stringify(user);
        return (
            array.findIndex((user) => JSON.stringify(user) === userString) === index
        );
    })
}

console.log(usersNoDuplicados(users1));