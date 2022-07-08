import { Injectable, NotFoundException } from '@nestjs/common';
import { Vehicles } from '../../entities/vehicles.entity';
import { VehiclesRepository } from '../../repositories/implementations/VehiclesRepository';

@Injectable()
export class GetVehiclesService {
  constructor(private vehiclesRepository: VehiclesRepository) {}

  async execute(id: string): Promise<Vehicles> {
    const vehicles = await this.vehiclesRepository.getById(id);

    if (!vehicles) {
      throw new NotFoundException('Jogador não encontrado.');
    }
    return vehicles;
  }
}
