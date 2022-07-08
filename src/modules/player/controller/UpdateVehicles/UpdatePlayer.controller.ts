import {
  Body,
  Controller,
  Param,
  Put,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { UpdateVehiclesDTO } from '../../dtos/updatePlayer.dto';
import { CreateVehiclesService } from '../../services/createVehicles/CreateVehicles.service';

@Controller('vehicles')
export class UpdatePlayersController {
  constructor(private readonly vehiclesService: CreateVehiclesService) {}

  @UsePipes(ValidationPipe)
  @Put(':id')
  async handle(@Param('id') id: string, @Body() data: UpdateVehiclesDTO) {
    return this.vehiclesService.execute(data);
  }
}
