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
const useStyles = makeStyles({
    table: {
      minWidth: 650,
    },
  });

function createData(carnet, nombre_, proyecto, fecha, servidor) {
    return { carnet, nombre_, proyecto, fecha, servidor };
}
const rows = [
    
    createData('201504231', "jose", "fasdfas", "dfasdf", "4.0"),
    
  ];

export default function ListReport(){
    let interval;
    const [datasgg, setData] = useState({ carnet: 0,createdAt:"ff",curso:"ff",detalle:"ff" , nombre: "ff", servidor: "ff",updatedAt:"ff",_id:"ff" });
    const classes = useStyles();
    var data = [];
    const getInterval = async () => {
        let response = await axios
            .get("http://3.13.15.158:3001/")
            .then((res) => {
                
                data = res.data;
                
            return res.data;
            })
            .catch((e) => {
            console.log(e);
            });
            setData(response);
    };  
    getInterval();
    console.log(datasgg);
    return(
        <div className="App">
            <h2 >Lista de reportes</h2>
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
                    {rows.map((row) => (
                        <TableRow key={row.carnet}>
                        <TableCell component="th" scope="row">
                            {row.carnet}
                        </TableCell>
                        <TableCell align="right">{row.nombre}</TableCell>
                        <TableCell align="right">{row.curso}</TableCell>
                        <TableCell align="right">{row.updatedAt}</TableCell>
                        <TableCell align="right">{row.servidor}</TableCell>
                        <TableCell align="right"><Button>Ver</Button></TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}