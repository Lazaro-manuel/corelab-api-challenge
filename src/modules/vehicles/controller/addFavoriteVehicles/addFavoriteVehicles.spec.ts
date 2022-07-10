import { Test, TestingModule } from '@nestjs/testing';
import { AddFavoriteDTO } from '../../dtos/AddFavoriteDTO';
import { Vehicles } from '../../entities/vehicles.entity';
import { AddFavoriteVehiclesService } from '../../services/addFavoriteVehicles/addFavoriteVehicles.service';
import { AddFavoriteVehiclesController } from './AddFavoriteVehiclesController';

describe('Add favorite controller', () => {
  let addFavoriteController: AddFavoriteVehiclesController;
  let addFavoriteService: AddFavoriteVehiclesService;
  const VehiclesEntity = new Vehicles();

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AddFavoriteVehiclesController],

      providers: [
        {
          provide: AddFavoriteVehiclesService,
          useValue: {
            handle: jest.fn().mockResolvedValue(VehiclesEntity),
          },
        },
      ],
    }).compile();

    addFavoriteController = module.get<AddFavoriteVehiclesController>(
      AddFavoriteVehiclesController,
    );
    addFavoriteService = module.get<AddFavoriteVehiclesService>(
      AddFavoriteVehiclesService,
    );
  });

  it('should be defined', () => {
    expect(addFavoriteController).toBeDefined();
    expect(addFavoriteService).toBeDefined();
  });

  describe('Add Favorite Vehicles', () => {
    it('Should be Add Favorite Vehicles', async () => {
      // arrange
      const data: AddFavoriteDTO = {
        isFavorite: true,
      };
      const id = 'ratgdhjkdadyagdbhajnkdnadahdj';

      // act
      const vehicles = await addFavoriteController.handle(id, data);

      // Assert

      expect(vehicles).toEqual(VehiclesEntity);
      expect(addFavoriteService.execute).toHaveBeenCalledTimes(1);
      expect(addFavoriteService.execute).toHaveBeenCalledWith(data);
    });
  });
});
