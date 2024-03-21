const APITareas = import.meta.env.VITE_API_TAREA;


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