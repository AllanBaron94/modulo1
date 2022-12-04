let gastos = [];
let idExiste = '';

const listarGastos = () => {
    let listaGastos = '';
    if (gastos.length === 0) {
        alert('No hay ningun gasto que eliminar');
    } else {
        gastos.forEach(element => {
           listaGastos += (element.id + '\t' + element.cantidad + '€<br />');
        });
        document.getElementById("ListadeGastos").innerHTML = listaGastos;
    }
}

/*const buscarValor = (valor) => {
    gastos.forEach( element => {
        if(element.id === valor) {
            idExiste = 'si';
        } else {
            idExiste = 'no';
        };
    });
}
let gastos1 = [{id: 'hotel', cantidad: 200}, {id: 'renta', cantidad: 200}, {id: 'comida', cantidad: 300}];
//let prueba = prompt('prueba:')
let pruebaEditar = () => {
    buscarValor(prueba);
    if (i === 0) {
            alert('No hay ningún gasto con ese id! Intente de nuevo.');
    }
};
//pruebaEditar();*/

const agregarGasto = () => {
    let id = prompt('Escriba el nombre o id del gasto:');
    let cantidad = prompt('Escriba la cantidad gastada');
    let gasto = {
    id: id,
    cantidad: cantidad
    }
    gastos.push(gasto);
    listarGastos();
}


const editarGasto = () => {
    if (gastos.length === 0) {
        alert('No hay ningun gasto que editar');
    } 
    else {
    let gastoAEditar = prompt('Escriba el nombre/id del gasto que desea editar:');
   
    gastos.find((ele, i) => {
        if (ele.id === gastoAEditar) {
            let nuevoNombre = prompt('Nuevo nombre o id del gasto:');
            let nuevaCantidad = prompt('Escriba la cantidad gastada:');
            gastos[i].id = nuevoNombre;
            gastos[i].cantidad = nuevaCantidad;
        }
    });

    listarGastos();
    }
}

const eliminarGasto = () => {
    if (gastos.length === 0) {
        alert('No hay ningun gasto que eliminar');
    } else {
    let gastoAEliminar = prompt('Escriba el nombre/id del gasto que desea eliminar:');
    
    gastos.find((ele, i) => {
        if(ele.id === gastoAEliminar) {
            gastos.splice(i, 1);
        } 
    });
    if(gastoAEliminar)

    listarGastos();
    }
}

