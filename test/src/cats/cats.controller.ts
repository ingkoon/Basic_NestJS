import { CatRequestDto } from './dto/cats.erquest.dto';
import { SuccessInterceptor } from './../common/interceptors/success.interceptor';
import {
  Body,
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

  // 현재 로그인한 cat
  @Get()
  getCurrentCat() {
    return 'current cat';
  }

  @Post()
  async signUp(@Body() body: CatRequestDto) {
    return await this.catsService.signUp(body);
  }

  @Post('login')
  logIn() {
    return 'login';
  }

  @Post('logout')
  logOut() {
    return 'logout';
  }

  @Post('upload/cats')
  uploadCatImg() {
    return 'uploadimg';
  }
}
