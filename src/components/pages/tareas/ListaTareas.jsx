import { Button, Table } from "react-bootstrap";
import { Link } from 'react-router-dom';
import { leerTareas } from "../../../helpers/queries";
import { useState, useEffect } from "react";
import ItemTarea from './ItemTarea'

const ListaTareas = () => {

    const [tareas, setTareas] = useState([])

    useEffect(()=>{
        obtenerTareas()
    },[]);

    const obtenerTareas = async()=>{
        const respuesta = await leerTareas()
        if (respuesta.status === 200) {
            const datos = await respuesta.json();
            setTareas(datos);
        }else{
            console.log('error')
        }
    }



    return (
        <section className="container mainSection">
      <div className="d-flex justify-content-between align-items-center mt-5">
        <h1 className="display-4 ">Tareas</h1>
      </div>
      <hr />
      <Table responsive striped bordered hover>
        <thead>
          <tr className="text-center">
            <th>Tarea</th>
            <th>Fecha</th>
            <th>Hora</th>
            <th>Prioridad</th>
            <th>Opciones</th>
          </tr>
        </thead>
        <tbody>
          {
            tareas.map((tarea)=><ItemTarea key={tarea.id} tarea={tarea} setTareas={setTareas}/>)
          }
        </tbody>
      </Table>
    </section> 
    );
};

export default ListaTareas;