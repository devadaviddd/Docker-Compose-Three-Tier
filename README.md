

### DOCKER COMPOSE THREE TIER
Create a fullstack network external using bridge network 

```
docker network create --driver bridge fullstack-net 
```

## Run Fullstack Services
Running the fullstack application
```
docker-compose up --build
```


## Run Database Service 
Running the database container
```
cd database
docker-compose up --build
```
Checking database connection
```
mysql -h 127.0.0.1 -P 3306 -u root -p 12345678
```

## Run Backend Service
Running the backend container making sure the Database Service is running on port 3306
```
cd backend
docker build -t backend-image .
docker run -p 8000:8000 --network fullstack-net backend-image  
```

Checking backend fetch the data from database
```
curl localhost:8000
```

## Run Frontend Service
Running the frontend container making sure Database and Backend containers are on live
```
cd frontend
docker build -t frontend-image .
docker run -p 3000:3000 --network fullstack-net frontend-image  
```

Checking frontend call the backend api
```
curl localhost:3000
```
