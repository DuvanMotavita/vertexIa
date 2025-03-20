import { Test, TestingModule } from '@nestjs/testing';
import { VertexServiceService } from './vertex-service.service';

describe('VertexServiceService', () => {
  let service: VertexServiceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [VertexServiceService],
    }).compile();

    service = module.get<VertexServiceService>(VertexServiceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
