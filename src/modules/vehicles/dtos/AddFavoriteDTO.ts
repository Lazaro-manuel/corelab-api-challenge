import { IsBoolean } from 'class-validator';

export class AddFavoriteDTO {
  @IsBoolean()
  isFavorite?: boolean;
}
