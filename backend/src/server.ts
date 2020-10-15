import express from 'express';
import './database/connection';
import path from 'path';

import routes from './routes';
const app = express();
//MVC
//MODEL
//VIEWS
//CONTROLLES
app.use(express.json());
app.use(routes);
app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')))
app.listen(3333);
// REQ / RES