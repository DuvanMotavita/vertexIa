import { VertexAI } from '@google-cloud/vertexai';
import { Injectable } from '@nestjs/common';

@Injectable()
export class VertexServiceService {
  /**
   * TODO(developer): Update these variables before running the sample.
   */
  async generate_from_text_input(
    projectId = 'flawless-psyche-371600',
    query: any,
  ) {
    const vertexAI = new VertexAI({
      project: projectId,
      location: 'us-central1',
    });

    const generativeModel = vertexAI.getGenerativeModel({
      model: 'gemini-1.5-flash-001',
    });

    const prompt = query.prompt;

    const resp = await generativeModel.generateContent(prompt);
    const contentResponse = await resp.response;
    return contentResponse;
  }
}
