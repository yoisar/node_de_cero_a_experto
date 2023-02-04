const empleados = [
    {
        id: 1,
        nombre: 'YOIs'
    },
    {
        id: 2,
        nombre: 'Liliana'
    },
    {
        id: 3,
        nombre: 'Camilo'
    },
    {
        id: 4,
        nombre: 'Adriano'
    }
]

const salarios = [

    {
        id: 1,
        salario: 2500

    },
    {
        id: 2,
        salario: 3500

    }
]

const getEmpleado = (id) => {
    return new Promise((resolve, reject) => {
        const empleado = empleados.find(e => e.id == id)?.nombre;
        (empleado) ?
            resolve(empleado) :
            reject(`Empleado con id ${id} no existe`);

    });
}

const getSalario = (id) => {
    return new Promise((resolve, reject) => {
        const salario = salarios.find(s => s.id == id)?.salario;
        (salario) ?
            resolve(salario) :
            reject(`Salrio  con id ${id} no existe`);

    });
}


const id = 3;
// getEmpleado(id)
//     .then(empleado => console.log(empleado))
//     .catch(err => console.log(err));

//     getSalario(id)
//     .then(salario => console.log(salario))
//     .catch(err => console.log(err));
let nombre;
getEmpleado(id)
    .then(empleado => {
        nombre = empleado;
        return getSalario(id);
    }
    ).then(salario => console.log('El empleado', nombre, 'tiene un salario de', salario))
    .catch(err => console.log(err));