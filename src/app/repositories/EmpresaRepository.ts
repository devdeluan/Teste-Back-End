import cadEmpresa from "../entities/Empresa";
import IEmpresa from "../interfaces/IEmpresa";
import { AppDataSource } from "../../database/data-source";

const empresaRepository = AppDataSource.getRepository(cadEmpresa);


const getEmpresas = (): Promise<IEmpresa[]> => {
    return empresaRepository.find();
}

const novaEmpresa = (novaEmpresaData: Partial<cadEmpresa>): Promise<cadEmpresa> => {
    const novaEmpresa = empresaRepository.create(novaEmpresaData);
    return empresaRepository.save(novaEmpresa);
}

const atualizarEmpresa = async (id: number, atualizarEmpresaData: Partial<cadEmpresa>): Promise<cadEmpresa | undefined> => {
    const empresaExistente = await empresaRepository.findOne({where: {id}});
    if (!empresaExistente) {
        throw new Error (`Empresa com id ${id} não encontrada.`);
    }
    empresaRepository.merge(empresaExistente, atualizarEmpresaData);
    return empresaRepository.save(empresaExistente);
}

const removerEmpresa = (id: number): Promise<IEmpresa[]> => {
    return empresaRepository.delete(id).then(() => {
        return empresaRepository.find();
    }).catch((error) => {
        throw new Error(`Falha ao remover empresa com id ${id}: ${error}`);
    });
};

export default { getEmpresas, removerEmpresa, novaEmpresa, atualizarEmpresa };