import { Injectable } from '@nestjs/common';
import { AddFavoriteDTO } from '../../dtos/AddFavoriteDTO';
import { VehiclesRepository } from '../../repositories/implementations/VehiclesRepository';

@Injectable()
export class AddFavoriteVehiclesService {
  constructor(private vehiclesRepository: VehiclesRepository) {}
  async execute(id: string, data: AddFavoriteDTO) {
    const vehicles = await this.vehiclesRepository.updateOne(id, data);
    return vehicles;
  }
}
