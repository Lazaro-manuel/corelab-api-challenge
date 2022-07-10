import { Body, Controller, Get, Param } from '@nestjs/common';
import { AddFavoriteDTO } from '../../dtos/AddFavoriteDTO';
import { Vehicles } from '../../entities/vehicles.entity';
import { AddFavoriteVehiclesService } from '../../services/addFavoriteVehicles/addFavoriteVehicles.service';

@Controller('/vehicles')
export class AddFavoriteVehiclesController {
  constructor(private readonly vehiclesService: AddFavoriteVehiclesService) {}

  @Get(':id')
  async handle(
    @Param('id') id: string,
    @Body() data: AddFavoriteDTO,
  ): Promise<Vehicles> {
    return await this.vehiclesService.execute(id, data);
  }
}
