import fs from 'fs';
import * as path from 'path';
import { currentDir } from '../location.js';
import { consolePath } from './consolePath.js';

export const create = async(fileName) => {

  const newPath = path.normalize(`${currentDir.getPath()}/${fileName}`)

  const readableStream = fs.createReadStream(newPath, 'utf-8');

  readableStream.on('data', () => console.log('Operation failed'));
  readableStream.on('end', () => {
    console.log('Operation failed');
    consolePath()
  });
  readableStream.on('error', err => {
    const outputFile = fs.createWriteStream(newPath);
    outputFile.close();
    consolePath()
  });
};