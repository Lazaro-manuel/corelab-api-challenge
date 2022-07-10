import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateVehiclesDTO } from '../../dtos/create-vehicles.dto';
import { UpdateVehiclesDTO } from '../../dtos/updateVehicles.dto';
import { Vehicles } from '../../entities/vehicles.entity';
import { VehiclesRepository } from '../../repositories/implementations/VehiclesRepository';

@Injectable()
export class UpdateVehiclesService {
  constructor(private vehiclesRepository: VehiclesRepository) {}

  async execute(id: string, data: UpdateVehiclesDTO): Promise<Vehicles> {
    const vehicles = await this.vehiclesRepository.update(id, data);

    if (!vehicles) {
      throw new NotFoundException(`Ups, desculpe! Veiculos não encontro!`);
    }

    return vehicles;
  }
}
