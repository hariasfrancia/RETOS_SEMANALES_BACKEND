const alumnos = []

export const anadirAlumno = (req, res) => {
    alumnos.push(req.body)
    return res.json({
        content: alumnos[alumnos.length -1]
    })
}

export const listarAlumnos = (req, res) => {
    return res.json({
        content: alumnos
    })
}

export const listarAlumnoPorId = (req, res) => {
    const id = req.params.id - 1
    if(alumnos[id]){
        return res.json({
            content: alumnos[id]
        })
    }
    return res.status(404).json({
        content: `El Alumno ${id} no existe`
    })
}

export const actualizarAlumno = (req, res) => {
    if(alumnos[id]){
        const id = req.params.id -1
        return res.json({
        content: alumnos[id]
        })
    }
    return res.status(404).json({
        content: `El Alumno ${id} no existe`
    })
}

export const eliminarAlumno = (req, res) => {
    const id = rq.params.id -1
    if(alumnos[id]){
        const alumno_eliminado = alumnos.splice(id, 1)
        return res.json({
        content: alumno_eliminado
        })
    }
    return res.status(404).json({
        content: `El Alumno ${id} no existe`
    })
}