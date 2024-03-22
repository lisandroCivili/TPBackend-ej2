import { Container, Form, Button } from "react-bootstrap";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams, useNavigate } from 'react-router-dom';
import { crearTarea, obtenerTarea } from "../../helpers/queries";
import Swal from 'sweetalert2'


const Inicio = ({titulo, editando}) => {

    const {
        register,
        handleSubmit,
        formState: {errors},
        reset,
        setValue
      } = useForm()


      const {id} = useParams();
      const navegacion = useNavigate()
      useEffect(()=>{
        if (editando) {
          cargarDatos()
        }
      },[])

      const cargarDatos = async()=>{
        const respuesta = await obtenerTarea(id)
        if (respuesta.status === 200) {
          const datos = await respuesta.json()
          setValue('tarea', datos.tarea)
          setValue('prioridad', datos.prioridad)
          setValue('fechaHora', datos.fechaHora)
        }else{
          console.log("No se obtuvieron datos")
        }
      }

    const datosValidados = async(tarea)=>{
        const respuesta = await crearTarea(tarea)
        if (respuesta.status === 201) {
            Swal.fire({
                title: "Tarea creada",
                text: `Se creo la tarea con éxito`,
                icon: "success"
              });
              navegacion('/mistareas')
            }else{
              Swal.fire({
                title: "Ocurrio un error",
                text: "No se puedo crear la tarea, intente nuevamente en unos minutos.",
                icon: "error"
              });
            }
        }

  return (
    <Container>
      <div className="border border-black d-flex justify-content-center">
        <Form className="d-flex flex-column w-75" onSubmit={handleSubmit(datosValidados)}>
          <Form.Group className="mb-3 w-75" controlId="formBasicEmail">
            <Form.Label className="fs-3">{titulo}</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ej: Asistir a reunion de trabajo"
              {...register("tarea",{
                required: true,
                minLength: {
                    value: 10,
                    message: "Debe ingresar minimo 10 caracteres.",
                },
                maxLength: {
                    value: 50,
                    message:
                      "Debe ingresar máximo 50 caracteres.",
                  },
              })}
            />
            <Form.Text className="text-danger">
            {errors.tarea?.message}
          </Form.Text>
          </Form.Group>
          <Form.Group controlId="formPrioridad">
          <Form.Label className="fs-4">Prioridad:</Form.Label>
          <Form.Check
            type="radio"
            label="Baja"
            name="prioridad"
            id="prioridadBaja"
            value="Baja"
            {...register("prioridad",{
                required: "Debe ingresar el nivel de prioridad."
            })}
          />
          <Form.Text className="text-danger">
            {errors.prioridad?.message}
          </Form.Text>
          <Form.Check
            type="radio"
            label="Media"
            name="prioridad"
            id="prioridadMedia"
            value="Media"
            {...register("prioridad",{
                required: "Debe ingresar el nivel de prioridad."
            })}
          />
          <Form.Check
            type="radio"
            label="Alta"
            name="prioridad"
            id="prioridadAlta"
            value="Alta"
            {...register("prioridad",{
                required: "Debe ingresar el nivel de prioridad."
            })}
          />
        </Form.Group>
        <Form.Group controlId="formFechaHora" className="w-25 fs-4">
          <Form.Label>Fecha y Hora:</Form.Label>
          <Form.Control
            type="datetime-local"
            {...register("fechaHora",{
                required: "Debe ingresar fecha y hora."
            })}
          />
          <Form.Text className="text-danger">
            {errors.fechaHora?.message}
          </Form.Text>
        </Form.Group>
        <div className="d-flex gap-2">
          <Button variant="primary" type="submit" className="my-3 w-25">
            Guardar
          </Button>
        </div>
        </Form>
      </div>
    </Container>
  );
}

export default Inicio;
