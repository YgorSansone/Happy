import {Router} from 'express';
import OrphanagesController from './controllers/OrphanagesController';
const routes = Router();
//Rota = conjunto
//Recurso = usuario
//metodos http
//parametros


// Query params: https://localhost:3333/users?search=ygor
// Route params: https://localhost:3333/users/1 
// Body : https://localhost:3333/users

routes.post('/orphanages/', OrphanagesController.create);

export default routes;