import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

import { processGltf } from 'gltf-pipeline';
import gltf from './broken.json';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async getTest() {
    const options = {
      dracoOptions: {
        compressionLevel: 10,
      },
    };

    try {
      const result = await processGltf(gltf, options);
      console.log(result.gltf);
    } catch (e) {
      console.log(e);
    }

    console.log('done');
  }
}
