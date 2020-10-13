import express from 'express';
import './database/connection';

import routes from './routes';
const app = express();
//MVC
//MODEL
//VIEWS
//CONTROLLES
app.use(express.json());
app.use(routes);

app.listen(3333);
// REQ / RES