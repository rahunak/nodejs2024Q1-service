import { resolve } from 'path';
import { readFile } from 'fs/promises';
import { SwaggerModule } from '@nestjs/swagger';
import { parse } from 'yaml';

async function loadSwaggerConfig() {
  const config = await readFile(
    resolve(__dirname, '../../doc/api.yaml'),
    'utf-8',
  );
  return parse(config);
}

export async function setupSwaggerModule(app) {
  const config = await loadSwaggerConfig();
  SwaggerModule.setup('swagger', app, config);
}
