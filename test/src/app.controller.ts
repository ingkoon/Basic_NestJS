import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller() // => decorator
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    // code => 비즈니스 로직의 실행
    return this.appService.getHello();
  }
}
