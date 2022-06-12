import crypto from 'crypto';
import fs from 'fs';
import { consolePath } from './consolePath.js';
import { getAbsPath } from './getAbsPath.js';

export const calculateHash = async(pathToFile) => {

  let data = '';
  const absPathToFile = getAbsPath(pathToFile);
  const readableStream = fs.createReadStream(absPathToFile, 'utf-8');

  readableStream.on('data', chunk => data += chunk);
  readableStream.on('end', () => {
    console.log(crypto.createHash('sha256').update(data).digest('hex'));
    consolePath();
  });

  readableStream.on('error', error => {
    console.log('Operation failed');
    consolePath();
  });

};