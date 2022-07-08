import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreateVehiclesDTO } from '../../dtos/create-vehicles.dto';
import { Vehicles } from '../../entities/vehicles.entity';
import { CreateVehiclesService } from '../../services/createVehicles/CreateVehicles.service';

@Controller('vehicles')
export class CreateVehiclesControllers {
  constructor(private readonly playerService: CreateVehiclesService) {}

  @Post('/')
  @UsePipes(ValidationPipe)
  @HttpCode(HttpStatus.CREATED)
  async add(@Body() createVehiclesDTO: CreateVehiclesDTO): Promise<Vehicles> {
    return await this.playerService.execute(createVehiclesDTO);
  }
}
