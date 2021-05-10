INSTALACION PROTOC: https://grpc.io/docs/protoc-installation/
$ apt install -y protobuf-compiler
$ protoc --version 

CREAR PROYECTO GO: https://grpc.io/docs/languages/go/quickstart/
$ go mod init cliente

Para compilar Protocol:
$ export GO111MODULE=on  
$ go get google.golang.org/protobuf/cmd/protoc-gen-go google.golang.org/grpc/cmd/protoc-gen-go-grpc

Update:
$ export PATH="$PATH:$(go env GOPATH)/bin"


En la carpeta client:
$ go run grpc-client/client.go

![Diagrama gRPC](../images/diagrama.jpg)

# SERVIDORES

$ sudo docker run -it -d -p 50051:50051 --name=servidor sandyfabiola13/servidor_redes2:v1

# API 1

$ sudo docker run -it -d -p 8081:8081 --name=api1 sandyfabiola13/api_redes2:v1

# API 2

$ sudo docker run -it -d -p 8081:8081 --name=api2 sandyfabiola13/api2_redes2:v1


