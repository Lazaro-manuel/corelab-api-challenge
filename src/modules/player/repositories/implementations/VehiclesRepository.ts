import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateVehiclesDTO } from '../../dtos/create-vehicles.dto';
import { Vehicles } from '../../entities/vehicles.entity';
import { IVehiclesRepository } from '../IVehiclesRepository';

@Injectable()
export class VehiclesRepository implements IVehiclesRepository {
  constructor(
    @InjectRepository(Vehicles)
    private readonly ormRepository: Repository<Vehicles>,
  ) {}

  public async create(data: CreateVehiclesDTO): Promise<Vehicles> {
    const vehicles = this.ormRepository.create(data);

    await this.ormRepository.save(vehicles);
    return vehicles;
  }

  public async findAllVehicles(): Promise<Vehicles[]> {
    const vehicles = await this.ormRepository.find();
    return vehicles;
  }

  public async getById(id: string): Promise<Vehicles> {
    return await this.ormRepository.findOneBy({ id });
  }

  public async update(id: string, data: CreateVehiclesDTO): Promise<Vehicles> {
    const vehicles = await this.ormRepository.preload({
      id,
      ...data,
    });

    return await this.ormRepository.save(vehicles);
  }

  public async findByPlate(plate: Vehicles): Promise<Vehicles> {
    const plates = await this.ormRepository.findOne({ where: plate });
    return plates;
  }

  public async delete(id: Vehicles): Promise<void> {
    await this.ormRepository.delete(id);
  }
}
