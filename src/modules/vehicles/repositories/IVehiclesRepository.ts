import { AddFavoriteDTO } from '../dtos/AddFavoriteDTO';
import { CreateVehiclesDTO } from '../dtos/create-vehicles.dto';
import { Vehicles } from '../entities/vehicles.entity';

export interface IVehiclesRepository {
  create(data: CreateVehiclesDTO): Promise<Vehicles>;
  findAllVehicles(): Promise<Vehicles[]>;
  getById(id: string): Promise<Vehicles>;
  update(id: string, data: CreateVehiclesDTO): Promise<Vehicles>;
  findByPlate(plate: string): Promise<Vehicles>;
  delete(id: Vehicles): Promise<void>;
  findByColor(color: string): Promise<Vehicles>;
  updateOne(id: string, data: AddFavoriteDTO): Promise<Vehicles>;
}
