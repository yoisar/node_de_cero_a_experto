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

const getEmpleado = (id, callback) => {
    const empleado = empleados.find(e => e.id == id)?.nombre;
    if (empleado) {
        callback(null, empleado);
    } else {
        callback(`Empleado con id ${id} no existe`);
    }
}
// salarios

const getSalario = (id, callback) => {
    const salario = salarios.find(s => s.id == id)?.salario;

    if (salario) {
        callback(null, salario);
    } else {
        callback(`Salario con id ${id} no existe`);
    }
}
const id = 1;


getEmpleado(id, (err, empleado) => {

    if (err) {
        console.log('ERROR!');
        return console.log(err);

    }

    getSalario(id, (err, salario) => {

        if (err) {
            console.log('ERROR!');
            return console.log(err);
        }
        console.log('El empleado :', empleado, 'tiene un salarioa de: ', salario);
    })

})








