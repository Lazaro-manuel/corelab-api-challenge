import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateVehiclesDTO } from '../../dtos/create-vehicles.dto';
import { VehiclesRepository } from '../../repositories/implementations/VehiclesRepository';

@Injectable()
export class CreateVehiclesService {
  constructor(private playerRepository: VehiclesRepository) {}

  async execute(data: CreateVehiclesDTO) {
    // const playerExit = await this.playerRepository.findByEmail(data.email);
    // if (playerExit) {
    //   throw new BadRequestException('Jogador ja existe');
    // }

    return await this.playerRepository.create(data);
  }
}
