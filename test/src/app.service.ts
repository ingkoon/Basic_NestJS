import { Injectable } from '@nestjs/common';

// 프로바이더로 취급할 수 있다.
@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}
