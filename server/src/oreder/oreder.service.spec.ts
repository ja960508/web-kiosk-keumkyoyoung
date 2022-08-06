import { Test, TestingModule } from '@nestjs/testing';
import { OrederService } from './oreder.service';

describe('OrederService', () => {
  let service: OrederService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OrederService],
    }).compile();

    service = module.get<OrederService>(OrederService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
