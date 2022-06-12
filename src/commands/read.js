import fs from 'fs';
import { currentDir } from '../location.js';
import path from 'path';
import { consolePath } from './consolePath.js';

export const read = async(pathToFile) => {

  let data = '';
  const newPath = path.normalize(`${currentDir.getPath()}/${pathToFile}`)
  const readableStream = fs.createReadStream(newPath, 'utf-8');

  readableStream.on('data', chunk => data += chunk);
  readableStream.on('end', () => { process.stdout.write(data);
    consolePath() });
  readableStream.on('error', error => { console.log('Operation failed');
    consolePath() });

};