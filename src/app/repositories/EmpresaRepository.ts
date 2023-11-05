import cadEmpresa from "../entities/Empresa";
import IEmpresa from "../interfaces/IEmpresa";
import { AppDataSource } from "../../database/data-source";

const empresaRepository = AppDataSource.getRepository(cadEmpresa);

const getEmpresas = (): Promise<IEmpresa[]> => {
    return empresaRepository.find();
}
export default { getEmpresas };