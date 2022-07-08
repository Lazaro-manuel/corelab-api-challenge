import { Controller, Get } from '@nestjs/common';
import { FindAllVehiclesService } from '../../services/findAllVehicles/FindAllPlayer.service';

@Controller('/vehicles')
export class FindAllVehiclesController {
  constructor(private readonly vehiclesService: FindAllVehiclesService) {}

  @Get('/')
  async handle() {
    return await this.vehiclesService.execute();
  }
}
