import Swal from 'sweetalert2'
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

import React from 'react';
import { borrarTarea, leerTareas } from '../../../helpers/queries';

const ItemTarea = ({ tarea, setTareas }) => {
  const {fechaHora} = tarea;

  const [fecha, hora] = fechaHora.split('T');
  const [anio, mes, dia] = fecha.split('-');
  const fechaFormateada = `${dia}/${mes}/${anio}`;
  const [horaSinSegundos] = hora.split(':');
  const horaFormateada = `${horaSinSegundos}:${horaSinSegundos}`;

  const eliminarTarea = ()=>{
    Swal.fire({
      title: "¿Seguro desea eliminar la tarea?",
      text: "No se puede revertir esta operación.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, eliminar",
      cancelButtonText: "Cancelar"
    }).then(async(result) => {
      if (result.isConfirmed) {
        const respuesta = await borrarTarea(tarea._id)
        if (respuesta.status === 200) {
          Swal.fire({
            title: "Tarea eleminada",
            text: `La tarea fue eliminado.`,
            icon: "success"
          });
          const listaActualRespuesta = await leerTareas();
          if (listaActualRespuesta.status === 200) {
            const listaActual = await listaActualRespuesta.json();
            setTareas(listaActual);
          }
        }else{
          Swal.fire({
            title: "Ocurrio un error",
            text: `No se pudo eliminar la tarea, intente nuevamente en unos minutos.`,
            icon: "error"
          });
        }
      }
    });
  }

  return (
    <tr>
      <td className="text-center fw-medium fs-5">{tarea.tarea}</td>
      <td className="text-center fw-medium fs-5">{fechaFormateada}</td>
      <td className="text-center fw-medium fs-5">{horaFormateada}</td>
      <td className="text-center fw-medium fs-5">{tarea.prioridad}</td>
      <td className="text-center">
        <Link className="me-lg-2 btn btn-warning" to={'/editar/'+tarea._id}>
          <i className="bi bi-pencil-square"></i>
        </Link>
        <Button variant="danger" onClick={eliminarTarea}>
          <i className="bi bi-trash"></i>
        </Button>
      </td>
    </tr>
  );
};

export default ItemTarea;


// const ItemTarea = ({tarea, setTareas}) => {
//     return (
//     <tr>
//       <td className="text-center fw-medium fs-5">{tarea.tarea}</td>
//       <td className="text-center fw-medium fs-5">{tarea.fechaHora}</td>
//       <td className="text-center fw-medium fs-5">{tarea.prioridad}</td>
//       <td className="text-center">
//         <Link className="me-lg-2 btn btn-warning" to={'/administrador/editar/'+tarea.id}>
//           <i className="bi bi-pencil-square"></i>
//         </Link>
//         <Button variant="danger" >
//           <i className="bi bi-trash"></i>
//         </Button>
//       </td>
//     </tr>
//     );
// };

// export default ItemTarea;