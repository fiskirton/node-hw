import { Controller, Get, Param, StreamableFile } from '@nestjs/common';
import { createReadStream } from 'fs';
import { join } from 'path/posix';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('static/text/:filename')
  getFile(@Param('filename') filename: string): StreamableFile {
    const file = createReadStream(join(__dirname, `../static/${filename}`));
    return new StreamableFile(file);
  }
}
