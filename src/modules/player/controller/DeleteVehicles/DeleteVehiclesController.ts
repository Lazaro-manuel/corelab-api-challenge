import { Controller, Delete, HttpCode, Param } from '@nestjs/common';
import { Vehicles } from '../../entities/vehicles.entity';
import { DeleteVehiclesService } from '../../services/DeleteVehicles/DeleteVehicles.service';

@Controller('/vehicles')
export class DeleteVehiclesController {
  constructor(private readonly vehiclesService: DeleteVehiclesService) {}

  @HttpCode(204)
  @Delete(':id')
  async handle(@Param('id') id: Vehicles) {
    return await this.vehiclesService.execute(id);
  }
}
