# Servidor 1 

## Carnet: 201020126

## Endpoints

|No|Método|Ruta|Descripción|
|-|-|-|-|
|1|GET| http://3.13.15.158/| Retorna todos los reportes|
|2|GET| http://3.13.15.158/:_id |Reporna los datos de un reporte|
|3|POST| http://3.13.15.158/ |Creación de un reporte|
 
 ### Endpoint 2

#### Respuesta exitosa
```json
{
    "_id": "60596dd1c003e0b0d7b5053e",
    "carnet": 123456789,
    "nombre": "Juan Perez",
    "curso": "IPC2",
    "detalle": "Reporte de práctica",
    "servidor": "201020126",
    "createdAt": "2021-03-23T04:25:53.735Z",
    "updatedAt": "2021-03-23T04:25:53.735Z"
}

```

#### Respuesta fallida
```json
{
    "msg": "El reporte 60596dd1c003e0b0d7b5053 no existe"
}
```


### Endpoint 3

#### Petición
```json
{
    "carnet":123456789,
    "nombre": "Juan Perez",
    "curso":"IPC2",
    "detalle":"Reporte de práctica"
}
```

#### Respuesta
```json
{
    "nombre": "Juan Perez",
    "id": "605973cbbf2981b73c3c9c2c",
    "date": "2021-03-23T04:51:23.067Z"
}
```






