import { Injectable } from '@nestjs/common';
import { Vehicles } from '../../entities/vehicles.entity';
import { VehiclesRepository } from '../../repositories/implementations/VehiclesRepository';

@Injectable()
export class DeleteVehiclesService {
  constructor(private vehiclesRepository: VehiclesRepository) {}

  async execute(id: Vehicles): Promise<void> {
    await this.vehiclesRepository.delete(id);
  }
}
