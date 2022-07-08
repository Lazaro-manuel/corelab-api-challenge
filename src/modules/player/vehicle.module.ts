import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CreateVehiclesControllers } from './controller/createVehicles/createVehiclesController';
import { CreateVehiclesService } from './services/createVehicles/CreateVehicles.service';
import { Vehicles } from './entities/vehicles.entity';
import { VehiclesRepository } from './repositories/implementations/VehiclesRepository';

@Module({
  controllers: [CreateVehiclesControllers],
  providers: [CreateVehiclesService, VehiclesRepository],
  imports: [TypeOrmModule.forFeature([Vehicles])],
  exports: [TypeOrmModule],
})
export class VehiclesModule {}
