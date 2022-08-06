import { Test, TestingModule } from '@nestjs/testing';
import { OrederController } from './oreder.controller';
import { OrederService } from './oreder.service';

describe('OrederController', () => {
  let controller: OrederController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OrederController],
      providers: [OrederService],
    }).compile();

    controller = module.get<OrederController>(OrederController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
