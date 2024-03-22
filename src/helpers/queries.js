const APITareas = import.meta.env.VITE_API_TAREA;

export const leerTareas = async ()=>{
    try {
        const respuesta = await fetch(APITareas);
        return respuesta
    } catch (error) {
        console.log(error)
    }
}

export const obtenerTarea = async(id)=>{
    try {
        const respuesta = await fetch(APITareas+'/'+id)
        return respuesta
    } catch (error) {
        console.log(error)
    }
}

export const crearTarea = async(nuevaTarea)=>{

    try {
        const respuesta = fetch(APITareas, {
            method: "POST",
            headers: {
                "Content-Type":"application/json"
            },
            body: JSON.stringify(nuevaTarea)    
        })
        return respuesta
    } catch (error) {
        console.log(error)
    }
}

export const borrarTarea = async(id)=>{
    try {
        const respuesta = fetch(APITareas+'/'+id,{
            method: "DELETE"
        })
        return respuesta
    } catch (error) {
        console.log(error)
    }
}