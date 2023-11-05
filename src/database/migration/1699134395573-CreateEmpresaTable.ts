import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class CreateEmpresaTable1699134395573 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'tb_empresa',
                columns: [
                    { name: 'id', type: 'int', isPrimary: true, generationStrategy: 'increment' },
                    { name: 'nome', type: 'varchar', length: '255', isNullable: false },
                    { name: 'nomeEmpresa', type: 'varchar', length: '255', isNullable: false, isUnique: true },
                    { name: 'cnpj', type: 'varchar', length: '255', isNullable: false, isUnique: true },
                    { name: 'telefone', type: 'varchar', length: '255', isNullable: false },
                    { name: 'email', type: 'varchar', length: '255', isNullable: false },
                    { name: 'cep', type: 'varchar', length: '255', isNullable: false },
                    { name: 'logradouro', type: 'varchar', length: '255', isNullable: false },
                    { name: 'numero', type: 'varchar', length: '255', isNullable: false },
                    { name: 'bairro', type: 'varchar', length: '255', isNullable: false },
                    { name: 'cidade', type: 'varchar', length: '255', isNullable: false },
                    { name: 'uf', type: 'varchar', length: '255', isNullable: false }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('tb_empresa')
    }

}
