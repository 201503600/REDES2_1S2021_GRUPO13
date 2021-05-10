package main

import (
	"context"
	"encoding/json"
	"fmt"
	"log"
	"net/http"
	"os"

	pb "cliente/proto"

	"google.golang.org/grpc"
)

var (
	//address = "cliente-grpc:50051"
	address = "10.0.2.45:50051"
)

func failOnError(err error, msg string) {
	if err != nil {
		log.Fatalf("%s: %s", msg, err)
	}
}

func postAsistencia(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	if r.Method == "GET" {
		w.WriteHeader(http.StatusOK)
		w.Write([]byte("{\"message\": \"ASISTENCIA\"}"))
		return
	}

	// Parsing body
	var body map[string]interface{}
	err := json.NewDecoder(r.Body).Decode(&body)
	failOnError(err, "Parsing JSON")
	data, _ := json.Marshal(body)

	doUnary(data)

	w.WriteHeader(http.StatusCreated)
	w.Write([]byte(`{"message": "Asistencia ingresada"}`))
}

func postReporte(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	if r.Method == "GET" {
		w.WriteHeader(http.StatusOK)
		w.Write([]byte("{\"message\": \"REPORTE\"}"))
		return
	}

	// Parsing body
	var body map[string]interface{}
	err := json.NewDecoder(r.Body).Decode(&body)
	failOnError(err, "Parsing JSON")
	body["way"] = "Servidor " + os.Getenv("SERVIDOR")
	data, _ := json.Marshal(body)

	doUnary2(data)

	w.WriteHeader(http.StatusCreated)
	w.Write([]byte(`{"message": "Reporte ingresado"}`))
}

func main() {
	fmt.Println("Starting...")
	http.HandleFunc("/asistencia", postAsistencia)
	http.HandleFunc("/reporte", postReporte)
	log.Fatal(http.ListenAndServe(":8081", nil))

}

func doUnary(x []byte) {
	fmt.Println("unary...")
	cc, err := grpc.Dial(address, grpc.WithInsecure(), grpc.WithBlock())
	if err != nil {
		log.Fatalf("did not connect: %v", err)
	}
	defer cc.Close()
	c := pb.NewGreeterClient(cc)
	req := &pb.GreetRequest{Data: string(x)}
	res, err := c.Greet(context.Background(), req)
	if err != nil {
		log.Fatalf("error while calling Greet RPC: %v", err)
	}
	log.Printf("Response: %s\n", res.GetMessage())
}

func doUnary2(x []byte) {
	fmt.Println("unary...")
	cc, err := grpc.Dial(address, grpc.WithInsecure(), grpc.WithBlock())
	if err != nil {
		log.Fatalf("did not connect: %v", err)
	}
	defer cc.Close()
	c := pb.NewGreeterClient(cc)
	req := &pb.GreetRequest{Data: string(x)}
	res, err := c.Greet2(context.Background(), req)
	if err != nil {
		log.Fatalf("error while calling Greet RPC: %v", err)
	}
	log.Printf("Response: %s\n", res.GetMessage())
}
