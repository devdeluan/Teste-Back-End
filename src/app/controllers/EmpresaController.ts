import { Request, Response, Router } from 'express';
import cadEmpresa from '../entities/Empresa';
import IEmpresa from '../interfaces/IEmpresa';
import EmpresaRepository from '../repositories/EmpresaRepository';


const empresaRouter = Router();

empresaRouter.get('/', async (_req: Request, res: Response): Promise<Response> => {
    const empresas = await EmpresaRepository.getEmpresas();
    return res.status(200).json(empresas);
});

empresaRouter.get('/:cnpj', async (_req: Request, res: Response): Promise<Response> => {
    const empresas = await EmpresaRepository.getEmpresas();
    return res.status(200).json(empresas);
});

// empresaRouter.put('/:id', async (req: Request, res: Response): Promise<Response> => {
//     const id = parseInt(req.params.id);
//     const empresas = await EmpresaRepository.atualizarEmpresa(id, req.body);
//     return res.status(200).json(empresas);
// });

// empresaRouter.post('/', async (req: Request, res: Response): Promise<Response> => {
//     const empresas = await EmpresaRepository.novaEmpresa(req.body);
//     return res.status(200).json(empresas);
// });


empresaRouter.delete('/:id', async (req: Request, res: Response): Promise<Response> => {
    const id = parseInt(req.params.id);
    await EmpresaRepository.removerEmpresa(id);
    return res.status(201).json({message: 'Removido com sucesso'});
})


export default empresaRouter;