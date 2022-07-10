import { Test, TestingModule } from '@nestjs/testing';
import { Vehicles } from '../../entities/vehicles.entity';
import { CreateVehiclesService } from '../../services/createVehicles/CreateVehicles.service';
import { FindAllVehiclesService } from '../../services/findAllVehicles/FindAllPlayer.service';
import { UpdateVehiclesControllers } from '../UpdateVehicles/UpdatePlayer.controller';
import { FindAllVehiclesController } from './FIndAllplayers.controller';

describe('find all Vehicles Controller', () => {
  let findVehiclesController: FindAllVehiclesController;
  let findAllVehiclesService: FindAllVehiclesService;
  const VehiclesEntity = new Vehicles();

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UpdateVehiclesControllers],

      providers: [
        {
          provide: CreateVehiclesService,
          useValue: {
            find: jest.fn().mockResolvedValue(VehiclesEntity),
          },
        },
      ],
    }).compile();

    findVehiclesController = module.get<FindAllVehiclesController>(
      FindAllVehiclesController,
    );
    findAllVehiclesService = module.get<FindAllVehiclesService>(
      FindAllVehiclesService,
    );
  });

  it('should be defined', () => {
    expect(findVehiclesController).toBeDefined();
    expect(findVehiclesController).toBeDefined();
  });

  describe('find all Vehicles by id', () => {
    it('Should be Create a new Vehicles', async () => {
      // arrange

      // act
      const vehicles = await findVehiclesController.handle();

      // Assert

      expect(vehicles).toEqual(VehiclesEntity);
      expect(findAllVehiclesService.execute).toHaveBeenCalledTimes(1);
      expect(findAllVehiclesService.execute).toHaveBeenCalledWith();
    });
  });
});
