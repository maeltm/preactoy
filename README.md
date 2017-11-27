# PReacToy

| Name             | Service  | Container | Tech                       |
|------------------|----------|-----------|----------------------------|
| Frontend         | Frontend | frontend  | React, React-Router, Redux |
| Backend          | Backend  | backend   | Node.js, Express           |
| Databse          | Database | database  | MongoDB                    |
| Functional Tests | Test     | N/A       | TestCafe                   |

## Prerequisite

 - [node.js](https://nodejs.org) v6+
 - [Docker](https://www.docker.com) stable
 - [Docker Compose](https://docs.docker.com/compose) latest

## Backend

### Installation

```bash
    cd backend
    npm install
```

### Start Backend Service in local

```bash
    npm start
```

### Start Backend Service with Docker and docker-compose

```bash
    docker-compose up backend
```

## Frontend

### Installation

```bash
    cd frontend
    npm install
```

### Start Backend Service in local

```bash
    npm start
```

### Start Backend Service with Docker and docker-compose

```bash
    docker-compose up frontend
```

## Mongodb

### Start Backend Service with Docker and docker-compose

```bash
    docker-compose up database
```

## Start all in one step

```bash
    docker-compose up
```
