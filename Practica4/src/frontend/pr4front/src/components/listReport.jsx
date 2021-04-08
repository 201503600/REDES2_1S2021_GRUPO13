import React, { Component, useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Modal from 'react-bootstrap/Modal';
const useStyles = makeStyles({
    table: {
      minWidth: 650,
    },
  });

const axiosInstance = axios.create({
    headers: {
      "Access-Control-Allow-Origin": "*"
    }
  });

function createData(carnet, nombre_, proyecto, fecha, servidor) {
    return { carnet, nombre_, proyecto, fecha, servidor };
}
const rows = [
    
    createData('201504231', "jose", "fasdfas", "dfasdf", "4.0"),
    
  ];

export default function ListReport(){
    let interval;
    const [datasgg, setData] = useState([]);
    const [dataOne, setDataone] = useState([]);
    const classes = useStyles();
    var data = [];
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = async (e) => {
        setShow(true)
        let response = await axiosInstance
            .get(process.env.BACK||"http://localhost:3001/"+e.currentTarget.value)
            .then((res) => {
                
                data = res.data;
                
            return res.data;
            })
            .catch((e) => {
            console.log(e);
            });
            setDataone(response)
            console.log(response);
    };
    
    const getInterval = async () => {
        let response = await axiosInstance
            .get(process.env.BACK||"http://localhost:3001/")
            .then((res) => {
                
                data = res.data;
                
            return res.data;
            })
            .catch((e) => {
            console.log(e);
            });
            setData(response);
    };  
    useEffect(() => {
        interval = setInterval(() => getInterval(), 3000);
        return () => clearInterval(interval);
      }, []);
    //console.log(datasgg);
    return(
        
        <div className="App">
            <h2 >Lista de reportes</h2>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>Informacion Registro</Modal.Title>
                </Modal.Header>
                <Modal.Body><p>Carnet: {dataOne.carnet}</p><p>Nombre: {dataOne.nombre}</p>
                <p>Curso: {dataOne.curso}</p>
                <p>Detalle: {dataOne.detalle}</p>
                <p>Procesado por: {dataOne.servidor}</p>
                <p>Fecha: {dataOne.updatedAt} </p> 
                
                </Modal.Body>
                <Modal.Footer>
                <p><b>Solicitud atendida por el servidor {dataOne.servidoractual}</b></p> 
                <br></br>
                <><Button variant="secondary" onClick={handleClose}>
                    Close
                </Button></>
                </Modal.Footer>
            </Modal>
            
            <TableContainer component={Paper}>
                <Table className={classes.table} size="small" aria-label="a dense table">
                    <TableHead>
                    <TableRow>
                        <TableCell>Carnet</TableCell>
                        <TableCell align="right">Nombre</TableCell>
                        <TableCell align="right">Proyecto</TableCell>
                        <TableCell align="right">fecha</TableCell>
                        <TableCell align="right">Servidor</TableCell>
                        <TableCell align="right">Ver</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {datasgg && datasgg.map((row,index) => (
                        <TableRow key={index}>
                        <TableCell component="th" scope="row">
                            {row.carnet}
                        </TableCell>
                        <TableCell align="right">{row.nombre}</TableCell>
                        <TableCell align="right">{row.curso}</TableCell>
                        <TableCell align="right">{row.updatedAt}</TableCell>
                        <TableCell align="right">{row.servidor}</TableCell>
                        <TableCell align="right"><Button  value={row._id} variant="primary" onClick={handleShow}>
                Ver</Button></TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}

