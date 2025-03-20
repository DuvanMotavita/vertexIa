import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { VertexControllerController } from './controllers/vertex-controller/vertex-controller.controller';
import { VertexServiceService } from './services/vertex-service/vertex-service.service';

@Module({
  imports: [],
  controllers: [AppController, VertexControllerController],
  providers: [AppService, VertexServiceService],
})
export class AppModule {}
