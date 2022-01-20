import { Request } from 'express';
import { Body, Controller, Get, Param, Req } from '@nestjs/common';
import { AppService } from './app.service';

//애플리케이션의 특정 요청을 수행하는 역할을 한다
@Controller() // => decorator
export class AppController {
  //의존성 주입
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    // code => 비즈니스 로직의 실행
    return this.appService.getHello();
  }
}
