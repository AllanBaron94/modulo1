let gastos = [];
let idExiste = '';
let cantidadEsNumero = '';


const listarGastos = () => {
    let listaGastos = '';
    
    gastos.forEach(element => {
        listaGastos += `${element.id}:              ${element.cantidad}€` + '<br />';
    });
    document.getElementById("ListadeGastos").innerHTML = listaGastos;
    
}

const buscarValor = (valor) => {
    let check = [];
    gastos.forEach( element => {
        if(element.id.split(' ').join('').toLowerCase() === valor.split(' ').join('').toLowerCase()) {
            check.push(1);
        }
    });
    if (check.length > 0) {
        idExiste = 'si';
    }
}

const checarCantidad = (valor) => {
    if (isNaN(valor) === false) {
        cantidadEsNumero = 'si';
    }
}

const agregar = (valor) => {
    gastos.push(valor);
    listarGastos();
}

let editar = (valor) => {
    gastos.find((ele, i) => {
        if (ele.id.split(' ').join('').toLowerCase() === valor.split(' ').join('').toLowerCase()) {
            let nuevoNombre = prompt('Nuevo nombre o id del gasto:');
            let nuevaCantidad = prompt('Escriba la cantidad gastada:');
            checarCantidad(nuevaCantidad);
            
            if (cantidadEsNumero === 'si') {
            gastos[i].id = nuevoNombre;
            gastos[i].cantidad = nuevaCantidad;
            } else {
                alert('La cantidad debe de ser un número!');
            }
        }
    });
    cantidadEsNumero = '';
}

let eliminar = (valor) => {
    gastos.forEach((ele, i) => {
        if(ele.id.split(' ').join('').toLowerCase() === valor.split(' ').join('').toLowerCase()) {
            gastos.splice(i, 1);
        } 
    });
}

const agregarGasto = () => {
    let id = prompt('Escriba el nombre o id del gasto:');
    let cantidad = prompt('Escriba la cantidad gastada:');
    let gasto = {
        id: id,
        cantidad: cantidad
        }
    checarCantidad(cantidad);
    if (cantidadEsNumero === 'si') {
        agregar(gasto);
    } else {
        alert('La cantidad debe de ser un número!');
    }
    cantidadEsNumero = '';
}

const editarGasto = () => {
    if (gastos.length === 0) {
        alert('No hay ningun gasto que editar');
    } 
    else {
        let gastoAEditar = prompt('Escriba el nombre/id del gasto que desea editar:');
        buscarValor(gastoAEditar);
        
        if(idExiste === 'si') {
            editar(gastoAEditar);
        } else {
            alert('No hay ningun gasto con ese id!. Intente de nuevo.');
        }

        idExiste = '';
        listarGastos();
    }
}

const eliminarGasto = () => {
    if (gastos.length === 0) {
        alert('No hay ningun gasto que eliminar');
    } else {
        let gastoAEliminar = prompt('Escriba el nombre/id del gasto que desea eliminar:');
        buscarValor(gastoAEliminar);
        
        if(idExiste === 'si') {
            eliminar(gastoAEliminar);
        } else {
            alert('No hay ningun gasto con ese id!. Intente de nuevo.');
        }

        idExiste='';
        listarGastos();
    }
}

const sumarGastos = () => {
    let arrayCantidades = gastos.map(gasto => +gasto.cantidad);
    let suma = arrayCantidades.reduce((partialSum, a) => partialSum + a, 0);
    let total = `El total de los gastos es: ${suma}€`;

    document.getElementById("sumaGastos").innerHTML = total;
}