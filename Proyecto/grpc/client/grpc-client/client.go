package main

import (
	"context"
	"encoding/json"
	"fmt"
	"log"
	"net"
	"time"

	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
	"go.mongodb.org/mongo-driver/mongo/readpref"

	//"github.com/go-redis/redis"

	//"github.com/go-redis/redis/v8"
	"google.golang.org/grpc"

	pb "servidor/proto"
)

const (
	port = ":50051"
)

type server struct {
	pb.UnimplementedGreeterServer
}

type Bird struct {
	Carnet            int
	Nombre_estudiante string
	Nombre_evento     string
	Id_evento         int
	Imagen            string
}

func (s *server) Greet(ctx context.Context, in *pb.GreetRequest) (*pb.GreetResponse, error) {
	ConnectionMongodb(in.GetData())
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

	var data Bird
	json.Unmarshal([]byte(message), &data)

	res, err := collection.InsertOne(context.Background(), bson.M{
		"carnet":            data.Carnet,
		"nombre_estudiante": data.Nombre_estudiante,
		"nombre_evento":     data.Nombre_evento,
		"id_evento":         data.Id_evento,
		"imagen":            data.Imagen,
	})
	id := res.InsertedID
	fmt.Println(id)

}
