import React, { Component, useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { FormControl,InputLabel,Input,FormHelperText ,TextareaAutosize} from '@material-ui/core';
import Button from '@material-ui/core/Button';
export default function NewReport(){
    const [carnet, setCarnet] = useState('');
    const [nombre, setNombre] = useState('');
    const [curso, setCurso] = useState('');
    const [detalle, setDetalle] = useState('');
    async function handleClick(e) {
        console.log(carnet+" "+nombre +" "+ curso);
        var objeto = {
            carnet: carnet,
            nombre: nombre,
            curso: curso,
            detalle: detalle
        }
        let response = await axios.post(process.env.BACK||"http://3.13.15.158:3001/", objeto);
        console.log(response.data);
        
        //console.log(objeto)
    }

    return(
        <div className="App">
            <h2 >Ingreso de reportes de practicantes</h2>
            <FormControl>
            <InputLabel htmlFor="mi-campo">Carnet</InputLabel>
            <Input id="mi-campo" aria-describedby="mi-texto-de-ayuda"  onChange={event => setCarnet(event.target.value)}/>
            <FormHelperText id="mi-texto-de-ayuda">Ingrese nombre completo</FormHelperText>
            <Input id="mi-campo2" aria-describedby="mi-texto-de-ayuda" onChange={event => setNombre(event.target.value)}/>
            <FormHelperText id="mi-texto-de-ayuda">Ingrese el nombre de la clase</FormHelperText>
            <Input id="mi-campo3" aria-describedby="mi-texto-de-ayuda" onChange={event => setCurso(event.target.value)} />
            <FormHelperText id="mi-texto-de-ayuda">Curso/proyecto</FormHelperText>
            <TextareaAutosize aria-label="empty textarea" placeholder="Cuerpo del reporte..." onChange={event => setDetalle(event.target.value)} />
            
            <Button variant="contained" color="primary" onClick={handleClick} >
                Registrar
                </Button>
            </FormControl>
        </div>
    );
}