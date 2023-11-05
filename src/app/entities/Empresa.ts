import { Entity, Column, PrimaryGeneratedColumn  } from 'typeorm';

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

export default cadEmpresa;