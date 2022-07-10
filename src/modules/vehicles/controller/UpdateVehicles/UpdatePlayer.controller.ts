import {
  Body,
  Controller,
  Param,
  Put,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { UpdateVehiclesDTO } from '../../dtos/updateVehicles.dto';
import { UpdateVehiclesService } from '../../services/UpdateVehicles/UpdateVehicles.service';

@Controller('vehicles')
export class UpdateVehiclesControllers {
  constructor(private readonly vehiclesService: UpdateVehiclesService) {}

  @UsePipes(ValidationPipe)
  @Put(':id')
  async handle(@Param('id') id: string, @Body() data: UpdateVehiclesDTO) {
    return this.vehiclesService.execute(id, data);
  }
}
