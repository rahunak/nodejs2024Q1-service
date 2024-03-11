import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  index(): string {
    return '<div style="height:90vh;min-width:98vw;display:flex;justify-content:center;align-items:center"><h1>Hello all in my REST Service App!</h1></div>';
  }
}
