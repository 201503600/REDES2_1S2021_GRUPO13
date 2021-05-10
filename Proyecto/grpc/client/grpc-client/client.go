package main

import (
	"context"
	"encoding/json"
	"fmt"
	"log"
	"net"
	"time"

	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/bson/primitive"
	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
	"go.mongodb.org/mongo-driver/mongo/readpref"

	"google.golang.org/grpc"

	pb "servidor/proto"
)

const (
	port = ":50051"
)

type server struct {
	pb.UnimplementedGreeterServer
}

type Asistencia struct {
	Carnet            int
	Nombre_estudiante string
	Nombre_evento     string
	Id_evento         int
	Imagen            string
}

type Reporte struct {
	Carnet  int
	Nombre  string
	Curso   string
	Detalle string
}

//var idDocumento = "hola"

func (s *server) Greet(ctx context.Context, in *pb.GreetRequest) (*pb.GreetResponse, error) {
	ConnectionMongodb(in.GetData())

	//fmt.Println(in.GetData())
	return &pb.GreetResponse{Message: in.GetData()}, nil
}

func (s *server) Greet2(ctx context.Context, in *pb.GreetRequest) (*pb.GreetResponse, error) {
	ConnectionMongodb2(in.GetData())
	//fmt.Println(in.GetData)
	return &pb.GreetResponse{Message: in.GetData()}, nil
}

func main() {

	fmt.Println("Listeng on port 50051")

	lis, err := net.Listen("tcp", port)
	if err != nil {
		log.Fatalf("failed to listen: %v", err)
	}

	s := grpc.NewServer()
	pb.RegisterGreeterServer(s, &server{})
	if err := s.Serve(lis); err != nil {
		log.Fatalf("failed to serve: %v", err)
	}

}

func ConnectionMongodb(message string) {

	ctx, cancel := context.WithTimeout(context.Background(), 10*time.Second)
	defer cancel()
	client, err := mongo.Connect(ctx, options.Client().ApplyURI("mongodb+srv://redes2:hola_123@cluster0.peofc.mongodb.net/proyecto?retryWrites=true&w=majority"))
	defer func() {
		if err = client.Disconnect(ctx); err != nil {
			panic(err)
		}
	}()
	ctx, cancel = context.WithTimeout(context.Background(), 2*time.Second)
	defer cancel()
	err = client.Ping(ctx, readpref.Primary())

	collection := client.Database("proyecto").Collection("asistencia")

	ctx, cancel = context.WithTimeout(context.Background(), 5*time.Second)
	defer cancel()

	var data Asistencia
	json.Unmarshal([]byte(message), &data)

	res, err := collection.InsertOne(context.Background(), bson.M{
		"carnet":            data.Carnet,
		"nombre_estudiante": data.Nombre_estudiante,
		"nombre_evento":     data.Nombre_evento,
		"id_evento":         data.Id_evento,
		"imagen":            data.Imagen,
	})

	idDocumento := res.InsertedID.(primitive.ObjectID).Hex()
	fmt.Println(idDocumento)
}

func ConnectionMongodb2(message string) {

	ctx, cancel := context.WithTimeout(context.Background(), 10*time.Second)
	defer cancel()
	client, err := mongo.Connect(ctx, options.Client().ApplyURI("mongodb+srv://redes2:hola_123@cluster0.peofc.mongodb.net/proyecto?retryWrites=true&w=majority"))
	defer func() {
		if err = client.Disconnect(ctx); err != nil {
			panic(err)
		}
	}()
	ctx, cancel = context.WithTimeout(context.Background(), 2*time.Second)
	defer cancel()
	err = client.Ping(ctx, readpref.Primary())

	collection := client.Database("proyecto").Collection("reporte")

	ctx, cancel = context.WithTimeout(context.Background(), 5*time.Second)
	defer cancel()

	var data Reporte
	json.Unmarshal([]byte(message), &data)

	res, err := collection.InsertOne(context.Background(), bson.M{
		"carnet":  data.Carnet,
		"nombre":  data.Nombre,
		"curso":   data.Curso,
		"detalle": data.Detalle,
	})
	idDocumento := res.InsertedID.(primitive.ObjectID).Hex()
	fmt.Println(idDocumento)

}
