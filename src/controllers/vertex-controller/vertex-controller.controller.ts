import { GenerateContentResponse } from '@google-cloud/vertexai';
import { Controller, Get, Param, Post } from '@nestjs/common';
import { VertexServiceService } from 'src/services/vertex-service/vertex-service.service';

@Controller('vertex')
export class VertexControllerController {
  constructor(private _vertexService: VertexServiceService) {}
  @Get(':prompt')
  getResult(@Param() params: any): Promise<GenerateContentResponse> {
    return this._vertexService.generate_from_text_input(
      'flawless-psyche-371600',
      params,
    );
  }
}
