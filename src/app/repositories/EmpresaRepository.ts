import cadEmpresa from "../entities/Empresa";
import IEmpresa from "../interfaces/IEmpresa";
import { AppDataSource } from "../../database/data-source";

const empresaRepository = AppDataSource.getRepository(cadEmpresa);


const getEmpresas = (): Promise<IEmpresa[]> => {
    return empresaRepository.find();
}

const removerEmpresa = (id: number): Promise<IEmpresa[]> => {
    return empresaRepository.delete(id).then(() => {
        return empresaRepository.find();
    }).catch((error) => {
        throw new Error(`Falha ao remover empresa com id ${id}: ${error}`);
    });
};

export default { getEmpresas, removerEmpresa };