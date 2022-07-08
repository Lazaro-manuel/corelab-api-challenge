import { IsNotEmpty } from 'class-validator';

export class CreateVehiclesDTO {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  description: string;

  @IsNotEmpty()
  plate: string;

  @IsNotEmpty()
  isFavorite: boolean;

  @IsNotEmpty()
  year: Date;

  @IsNotEmpty()
  color: string;

  @IsNotEmpty()
  price: number;
}
