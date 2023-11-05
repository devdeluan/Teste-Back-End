import { Router } from 'express';
import empresaRouter from '../controllers/EmpresaController';

const routers = Router();

routers.use('/empresas', empresaRouter);

export default routers;
