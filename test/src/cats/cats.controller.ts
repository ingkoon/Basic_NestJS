import { SuccessInterceptor } from './../common/interceptors/success.interceptor';
import {
  Controller,
  Delete,
  Get,
  HttpException,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Put,
  UseFilters,
  UseInterceptors,
} from '@nestjs/common';
import { HttpExceptionFilter } from 'src/common/exceptions/http-exception.filter';
import { CatsService } from './cats.service';

@Controller('cats')
// 의존성 주입을 통한 인터셉터 사용, 관점지향형 프로그래밍
@UseInterceptors(SuccessInterceptor)
@UseFilters(HttpExceptionFilter)
export class CatsController {
  //의존성을 전달받아 라우팅 수행
  constructor(private readonly catsService: CatsService) {}

  // cats/
  @Get()
  getAllCat() {
    // throw new HttpException({ success: false, message: 'api is broken' }, 401);
    //   throw new HttpException('api broken', 401);
    console.log('hello cats');
    return { cats: ' get all cat api' };
  }

  // cats/:id
  @Get(':id')
  //파이프로 데이터 유효성 검사 및 변환을 수행하여 서버가 원하는 데이터를 얻을 수 있도록 도와주는 클래스입니다.
  getOneCat(@Param('id', ParseIntPipe) param: number) {
    console.log(param);
    console.log(typeof param);
    return 'one cat';
  }

  @Post(':id')
  createCat() {
    return 'create cat';
  }

  @Put(':id')
  updateCat() {
    return '';
  }

  @Patch(':id')
  updatePartialCat() {
    return 'aa';
  }

  @Delete(':id')
  deleteCat() {
    return 'delete cat';
  }
}
