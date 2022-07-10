import { Test, TestingModule } from '@nestjs/testing';
import { Vehicles } from '../../entities/vehicles.entity';
import { CreateVehiclesService } from '../../services/createVehicles/CreateVehicles.service';
import { GetVehiclesService } from '../../services/GetVehiclesGetById/GetVehicles.service';
import { UpdateVehiclesControllers } from '../UpdateVehicles/UpdatePlayer.controller';
import { GetVehiclesController } from './GetVehiclesController';

describe('get Vehicles Controller', () => {
  let getVehiclesController: GetVehiclesController;
  let getVehiclesService: GetVehiclesService;
  const VehiclesEntity = new Vehicles();

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UpdateVehiclesControllers],

      providers: [
        {
          provide: CreateVehiclesService,
          useValue: {
            get: jest.fn().mockResolvedValue(VehiclesEntity),
          },
        },
      ],
    }).compile();

    getVehiclesController = module.get<GetVehiclesController>(
      GetVehiclesController,
    );
    getVehiclesService = module.get<GetVehiclesService>(GetVehiclesService);
  });

  it('should be defined', () => {
    expect(getVehiclesController).toBeDefined();
    expect(getVehiclesController).toBeDefined();
  });

  describe('get Vehicles by id', () => {
    it('Should be Create a new Vehicles', async () => {
      // arrange
      const id = 'askaskasaksaskasmaksamksamsk';

      // act
      const vehicles = await getVehiclesController.handle(id);

      // Assert

      expect(vehicles).toEqual(VehiclesEntity);
      expect(getVehiclesService.execute).toHaveBeenCalledTimes(1);
      expect(getVehiclesService.execute).toHaveBeenCalledWith(id);
    });
  });
});
