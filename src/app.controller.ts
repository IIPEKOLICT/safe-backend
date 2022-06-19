import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { EndPoint } from './constants/enums';
import { HealthCheckDto } from './shared/dtos/health-check.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get(EndPoint.TEST)
  healthCheck(): HealthCheckDto {
    return this.appService.healthCheck();
  }
}
