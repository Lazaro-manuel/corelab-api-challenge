import { Test, TestingModule } from '@nestjs/testing';
import { CreateVehiclesDTO } from '../../dtos/create-vehicles.dto';
import { Vehicles } from '../../entities/vehicles.entity';
import { CreateVehiclesService } from '../../services/createVehicles/CreateVehicles.service';
import { UpdateVehiclesService } from '../../services/UpdateVehicles/UpdateVehicles.service';
import { UpdateVehiclesControllers } from './UpdatePlayer.controller';

describe('Update Vehicles Controller', () => {
  let updateVehiclesController: UpdateVehiclesControllers;
  let updateVehiclesService: UpdateVehiclesService;
  const VehiclesEntity = new Vehicles();

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UpdateVehiclesControllers],

      providers: [
        {
          provide: CreateVehiclesService,
          useValue: {
            add: jest.fn().mockResolvedValue(VehiclesEntity),
          },
        },
      ],
    }).compile();

    updateVehiclesController = module.get<UpdateVehiclesControllers>(
      UpdateVehiclesControllers,
    );
    updateVehiclesService = module.get<UpdateVehiclesService>(
      UpdateVehiclesService,
    );
  });

  it('should be defined', () => {
    expect(UpdateVehiclesControllers).toBeDefined();
    expect(UpdateVehiclesControllers).toBeDefined();
  });

  describe('Update Vehicles', () => {
    it('Should be Create a new Vehicles', async () => {
      // arrange
      const id = 'askaskasaksaskasmaksamksamsk';
      const data: CreateVehiclesDTO = {
        name: 'RIO',
        color: 'Black',
        description: 'Melhor carro do mundo',
        isFavorite: true,
        plate: '12-2323-0',
        price: 2232323,
        year: new Date(),
      };
      // act
      const vehicles = await updateVehiclesController.handle(id, data);

      // Assert

      expect(vehicles).toEqual(VehiclesEntity);
      expect(updateVehiclesService.execute).toHaveBeenCalledTimes(1);
      expect(updateVehiclesService.execute).toHaveBeenCalledWith(data);
    });
  });
});
