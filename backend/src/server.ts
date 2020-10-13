import express from 'express';
import './database/connection';
import {getRepository} from 'typeorm';
import Orphanage from './models/Orphanage';
const app = express();

app.use(express.json());
//Rota = conjunto
//Recurso = usuario
//metodos http
//parametros


// Query params: https://localhost:3333/users?search=ygor
// Route params: https://localhost:3333/users/1 
// Body : https://localhost:3333/users

app.post('/orphanages/', async (request, response) => {
    const {
        name,
        latitude,
        longitude,
        about,
        instructions,
        opening_hours,
        open_on_weekends
    } = request.body;

    const orphanagesRepository = getRepository(Orphanage);

    const orphanage = orphanagesRepository.create({
        name,
        latitude,
        longitude,
        about,
        instructions,
        opening_hours,
        open_on_weekends
    });
    await orphanagesRepository.save(orphanage);

    return response.json(request.body);
})

app.listen(3333);
// REQ / RES