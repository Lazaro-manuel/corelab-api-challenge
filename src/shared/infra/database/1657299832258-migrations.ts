import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class migrations1657299832258 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'vehicles',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            isGenerated: true,
          },
          {
            name: 'name',
            type: 'varchar',
          },
          {
            name: 'description',
            type: 'varchar',
          },
          {
            name: 'plate',
            type: 'varchar',
          },
          {
            name: 'isFavorite',
            type: 'boolean',
            default: false,
          },
          {
            name: 'year',
            type: 'Date',
          },
          {
            name: 'color',
            type: 'varchar',
          },
          {
            name: 'price',
            type: 'float',
          },
          {
            name: 'createdAt',
            type: 'timestamp',
            default: 'now()',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('vehicles');
  }
}
