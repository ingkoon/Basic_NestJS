import { Request } from 'express';
import { Body, Controller, Get, Param, Req } from '@nestjs/common';
import { AppService } from './app.service';

//애플리케이션의 특정 요청을 수행하는 역할을 한다
@Controller('cats') // => decorator
export class AppController {
  //의존성 주입
  constructor(private readonly appService: AppService) {}

  //localhost: 8000 cats/hello
  @Get('hello/:id/:name')
  getHello(
    @Req() req: Request,
    @Body() Body,
    @Param() param: { id: string; name: string },
  ): string {
    // code => 비즈니스 로직의 실행
    console.log(param);
    return this.appService.getHello();
  }
}
