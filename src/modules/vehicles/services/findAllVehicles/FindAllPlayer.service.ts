import { Injectable } from '@nestjs/common';
import { VehiclesRepository } from '../../repositories/implementations/VehiclesRepository';

@Injectable()
export class FindAllVehiclesService {
  constructor(private vehiclesRepository: VehiclesRepository) {}

  async execute() {
    const vehicles = await this.vehiclesRepository.findAllVehicles();
    return vehicles;
  }
}
