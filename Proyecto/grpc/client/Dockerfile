FROM golang:1.16

# set necessary environmet variables
ENV GO111MODULE=on \
    CGO_ENABLED=0 \
    GOOS=linux \
    GOARCH=amd64

# Move to working directory /usr/usr/app
WORKDIR /build


# Copy and download dependency using go mod
COPY go.mod .
COPY go.sum .
RUN go mod download

# Copy the code intro the container
COPY . .

# Export necessary port
EXPOSE 50051

# Command to run when starting the container
CMD ["go","run","grpc-client/client.go"]