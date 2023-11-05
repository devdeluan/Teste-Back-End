import { Entity, Column, PrimaryGeneratedColumn  } from 'typeorm';
import { getRepository } from 'typeorm';
import IEmpresa from '../interfaces/IEmpresa';

@Entity('tb_empresa')
class cadEmpresa {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column('varchar', { length: 255, nullable: false })
    nome: string;

    @Column('varchar', { length: 255, nullable: false })
    nomeEmpresa: string;

    @Column('varchar', { length: 255, nullable: false })
    cnpj: string;

    @Column('varchar', { length: 255, nullable: false })
    telefone: string;

    @Column('varchar', { length: 255, nullable: false })
    email: string;

    @Column('varchar', { length: 255, nullable: false })
    cep: string;

    @Column('varchar', { length: 255, nullable: false })
    logradouro: string;

    @Column('varchar', { length: 255, nullable: false })
    numero: string;

    @Column('varchar', { length: 255, nullable: false })
    bairro: string;

    @Column('varchar', { length: 255, nullable: false })
    cidade: string;

    @Column('varchar', { length: 255, nullable: false })
    uf: string;
}

async function getAllEmpresas(): Promise<IEmpresa[]> {
  try {
    const empresas = await getRepository(cadEmpresa).find();
    return empresas;
  } catch (error) {
    throw new Error(`Falha ao buscar empresas: ${(error as Error).message}`);
  }
}


export default cadEmpresa;