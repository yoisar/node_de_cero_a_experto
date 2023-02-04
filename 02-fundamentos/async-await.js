const empleados = [
    {
        id: 1,
        nombre: 'YOIS'
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

const getInfoUsuario = async (id) => {
    try {
        const empleado = await getEmpleado(id);
        const salario = await getSalario(id);
        return empleado;
    } catch (error) {
        throw error;

    }

}

const id = 3;

getInfoUsuario(id)
    .then(msg => console.log(msg))
    .catch(err=> console.log(err))
