import { ApiProperty, PartialType } from '@nestjs/swagger';
import { IsNotEmpty, IsPhoneNumber, IsString } from 'class-validator';
import { SignupDeliverymanDto } from './signup-deliveryman.dto';

export class UpdateDeliverymanDto extends PartialType(SignupDeliverymanDto) {
  @ApiProperty({
    example: 'Falonchi1',
    description: 'Deliveryman ismi',
  })
  @IsNotEmpty()
  @IsString()
  first_name: string;

  @ApiProperty({
    example: 'Falonchi1',
    description: 'Deliveryman ismi',
  })
  @IsNotEmpty()
  @IsString()
  last_name: string;

  @ApiProperty({
    example: 'AB9420042',
    description: 'Deliveryman pasport seriyasi',
  })
  @IsNotEmpty()
  @IsString()
  passport_series: string;

  @ApiProperty({
    example: '+998901234567',
    description: 'Deliveryman telefon raqami',
  })
  @IsNotEmpty()
  @IsPhoneNumber()
  phone: string;

  @ApiProperty({
    example: 'photo.jpg',
    description: 'Deliveryman fotosi',
  })
  @IsString()
  photo: string;
}
