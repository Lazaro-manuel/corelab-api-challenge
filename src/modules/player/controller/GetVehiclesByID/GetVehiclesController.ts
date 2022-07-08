import { Controller, Get, Param } from '@nestjs/common';
import { Vehicles } from '../../entities/vehicles.entity';
import { GetVehiclesService } from '../../services/GetVehiclesGetById/GetVehicles.service';

@Controller('/players')
export class GetVehiclesController {
  constructor(private readonly vehiclesService: GetVehiclesService) {}

  @Get(':id')
  async handle(@Param('id') id: string): Promise<Vehicles> {
    return await this.vehiclesService.execute(id);
  }
}
