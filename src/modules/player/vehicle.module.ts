import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CreateVehiclesControllers } from './controller/createVehicles/createVehiclesController';
import { CreateVehiclesService } from './services/createVehicles/CreateVehicles.service';
import { Vehicles } from './entities/vehicles.entity';
import { VehiclesRepository } from './repositories/implementations/VehiclesRepository';
import { FindAllVehiclesController } from './controller/FindAllVehicles/FIndAllplayers.controller';
import { FindAllVehiclesService } from './services/findAllVehicles/FindAllPlayer.service';
import { GetVehiclesController } from './controller/GetVehiclesByID/GetVehiclesController';
import { GetVehiclesService } from './services/GetVehiclesGetById/GetVehicles.service';
import { UpdatePlayersController } from './controller/UpdateVehicles/UpdatePlayer.controller';
import { UpdateVehiclesService } from './services/UpdateVehicles/UpdateVehicles.service';
import { DeleteVehiclesController } from './controller/DeleteVehicles/DeleteVehiclesController';
import { DeleteVehiclesService } from './services/DeleteVehicles/DeleteVehicles.service';

@Module({
  controllers: [
    CreateVehiclesControllers,
    FindAllVehiclesController,
    GetVehiclesController,
    UpdatePlayersController,
    DeleteVehiclesController,
  ],
  providers: [
    CreateVehiclesService,
    FindAllVehiclesService,
    GetVehiclesService,
    UpdateVehiclesService,
    DeleteVehiclesService,
    VehiclesRepository,
  ],
  imports: [TypeOrmModule.forFeature([Vehicles])],
  exports: [TypeOrmModule],
})
export class VehiclesModule {}
