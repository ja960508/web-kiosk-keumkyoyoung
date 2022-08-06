import { Module } from '@nestjs/common';
import { OrederService } from './oreder.service';
import { OrederController } from './oreder.controller';

@Module({
  controllers: [OrederController],
  providers: [OrederService]
})
export class OrederModule {}
