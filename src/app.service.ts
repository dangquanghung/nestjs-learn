import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  getNestjs(): string {
    return 'now you get here nestjs';
  }
}
