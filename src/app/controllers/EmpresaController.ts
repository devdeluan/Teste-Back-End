import { Request, Response, Router } from 'express';
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

empresaRouter.put('/:id', async (req: Request, res: Response): Promise<Response> => {
    const id = parseInt(req.params.id);
    const atualizarEmpresaData = req.body;

    const empresaAtualizada = await EmpresaRepository.atualizarEmpresa(id, atualizarEmpresaData);
    return res.status(200).json(empresaAtualizada);
});

empresaRouter.post('/', async (req: Request, res: Response): Promise<Response> => {
    const novaEmpresaData = req.body;
    const novaEmpresa = await EmpresaRepository.novaEmpresa(novaEmpresaData);
    return res.status(200).json(novaEmpresa);
});


empresaRouter.delete('/:id', async (req: Request, res: Response): Promise<Response> => {
    const id = parseInt(req.params.id);
    await EmpresaRepository.removerEmpresa(id);
    return res.status(201).json({message: 'Removido com sucesso'});
})


export default empresaRouter;