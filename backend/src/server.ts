import express from 'express';
import './database/connection';
const app = express();

app.use(express.json());
//Rota = conjunto
//Recurso = usuario
//metodos http
//parametros


// Query params: https://localhost:3333/users?search=ygor
// Route params: https://localhost:3333/users/1 
// Body : https://localhost:3333/users

app.get('/users/', (request, response) => {
    return response.json(request.params);
})

app.listen(3333);
// REQ / RES