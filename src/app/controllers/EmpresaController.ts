import { Request, Response, Router } from 'express';
import cadEmpresa from '../entities/Empresa';
import EmpresaRepository from '../repositories/EmpresaRepository';
import IEmpresa from '../interfaces/IEmpresa';

const empresaRouter = Router();

empresaRouter.get('/', async (_req: Request, res: Response): Promise<Response> => {
    const empresas = await EmpresaRepository.getEmpresas();
    return res.status(200).json(empresas);
});



export default empresaRouter;