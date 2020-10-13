import {Router} from 'express';
import multer from 'multer';
import OrphanagesController from './controllers/OrphanagesController';
import uploadConfig from './config/upload';
const routes = Router();
const upload = multer(uploadConfig);
//Rota = conjunto
//Recurso = usuario
//metodos http
//parametros


// Query params: https://localhost:3333/users?search=ygor
// Route params: https://localhost:3333/users/1 
// Body : https://localhost:3333/users

routes.get('/orphanages/', OrphanagesController.index);
routes.get('/orphanages/:id', OrphanagesController.show);
routes.post('/orphanages/', upload.array('images') ,OrphanagesController.create);

export default routes;