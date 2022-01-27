import { ApiProperty, PickType } from '@nestjs/swagger';
import { Cat } from '../cats.schema';

export class ReadOnlyCatDto extends PickType(Cat, [
  'email',
  'name',
  'id',
] as const) {
  @ApiProperty({
    example: '321312',
    description: 'id',
  })
  id: string;

  @ApiProperty({
    example: 'test@kakao.com',
    description: 'email',
  })
  email: string;

  @ApiProperty({
    example: 'test',
    description: 'name',
  })
  name: string;
}
