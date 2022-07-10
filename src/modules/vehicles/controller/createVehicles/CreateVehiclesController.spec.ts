import { Test, TestingModule } from '@nestjs/testing';
import { CreateVehiclesDTO } from '../../dtos/create-vehicles.dto';
import { Vehicles } from '../../entities/vehicles.entity';
import { CreateVehiclesService } from '../../services/createVehicles/CreateVehicles.service';
import { CreateVehiclesControllers } from './createVehiclesController';

describe('Vehicles Controller', () => {
  let createVehiclesController: CreateVehiclesControllers;
  let createVehiclesService: CreateVehiclesService;
  const VehiclesEntity = new Vehicles();

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CreateVehiclesControllers],

      providers: [
        {
          provide: CreateVehiclesService,
          useValue: {
            add: jest.fn().mockResolvedValue(VehiclesEntity),
          },
        },
      ],
    }).compile();

    createVehiclesController = module.get<CreateVehiclesControllers>(
      CreateVehiclesControllers,
    );
    createVehiclesService = module.get<CreateVehiclesService>(
      CreateVehiclesService,
    );
  });

  it('should be defined', () => {
    expect(createVehiclesController).toBeDefined();
    expect(createVehiclesService).toBeDefined();
  });

  describe('Create Vehicles', () => {
    it('Should be Create a new Vehicles', async () => {
      // arrange
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
      const vehicles = await createVehiclesController.add(data);

      // Assert

      expect(vehicles).toEqual(VehiclesEntity);
      expect(createVehiclesService.execute).toHaveBeenCalledTimes(1);
      expect(createVehiclesService.execute).toHaveBeenCalledWith(data);
    });
  });
});
