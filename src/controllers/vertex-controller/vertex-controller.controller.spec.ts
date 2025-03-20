import { Test, TestingModule } from '@nestjs/testing';
import { VertexControllerController } from './vertex-controller.controller';

describe('VertexControllerController', () => {
  let controller: VertexControllerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [VertexControllerController],
    }).compile();

    controller = module.get<VertexControllerController>(VertexControllerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
