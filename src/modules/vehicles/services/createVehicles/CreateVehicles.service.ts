import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateVehiclesDTO } from '../../dtos/create-vehicles.dto';
import { Vehicles } from '../../entities/vehicles.entity';
import { VehiclesRepository } from '../../repositories/implementations/VehiclesRepository';

@Injectable()
export class CreateVehiclesService {
  constructor(private vehiclesRepository: VehiclesRepository) {}

  async execute(data: CreateVehiclesDTO): Promise<Vehicles> {
    const vehicles = await this.vehiclesRepository.findByPlate(data.plate);

    if (vehicles) {
      throw new BadRequestException('Ups, Este Veiculo Jà existe.');
    }

    return await this.vehiclesRepository.create(data);
  }
}
