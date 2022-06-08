import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    const d = new Date();
    let time = d.toUTCString();
    return `Hello on: ${time}`;
  }
}
