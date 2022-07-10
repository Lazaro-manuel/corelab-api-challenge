import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VehiclesModule } from './modules/vehicles/vehicle.module';

@Module({
  imports: [
    VehiclesModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'Docker',
      password: 'root',
      database: 'veiculos',
      entities: ['./dist/src/modules/**/entities/*.js'],
      migrations: ['./dist/src/shared/infra/database/migrations/*.js'],
      migrationsRun: true,
      synchronize: true,
      logging: true,
      autoLoadEntities: true,
    }),
  ],
  providers: [],
})
export class AppModule {}
