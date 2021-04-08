# Práctica 4

## Docker-compose
Para levantar el frontend, el loadbalancer,los 3 servidores y la base de datos:
```Shell
$ docker-compose up -d
```

Para ver el historial de acciones:
```Shell
$ docker-compose logs
```

Para dar de baja:
```Shell
$ docker-compose down
```

Ver los contenedores creados:
```Shell
$ docker ps -a
```

## Docker Network

Lista las redes:
```Shell
$ docker network ls
```

Para inspeccionar cada una de las redes:
```Shell
$ docker network inspect src_frontend_network
$ docker network inspect src_service_network
$ docker network inspect src_db_network
```



## Comunicación entre contenedores

Para ingresar a la terminar de los contenedores:
```Shell
$ docker exec -it frontend1 /bin/ash
$ docker exec -it src_nginx_1 /bin/bash
```

* En el caso de contenedor con nginx, de primero instalar al contenedor:
```Shell
$ apt-get update
$ apt-get install iputils-ping
```

Comprobando comunicación dentro de cada contenedor a otro contenedor:
```Shell
$ ping <IP_DESTINO>
```


