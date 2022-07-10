import { IsBoolean, IsEmpty, IsOptional } from 'class-validator';

export class UpdateVehiclesDTO {
  @IsOptional()
  @IsEmpty()
  name?: string;

  @IsOptional()
  @IsEmpty()
  description?: string;

  @IsEmpty()
  @IsOptional()
  plate?: string;

  @IsBoolean()
  isFavorite?: boolean;

  @IsOptional()
  @IsEmpty()
  year?: Date;

  @IsOptional()
  @IsEmpty()
  color?: string;

  @IsOptional()
  @IsEmpty()
  price?: number;
}
