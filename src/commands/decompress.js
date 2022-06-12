import { createUnzip } from 'node:zlib'
import {
  createReadStream,
  createWriteStream
} from 'node:fs'
import path from 'path';
import { getAbsPath } from './getAbsPath.js';
import { consolePath } from './consolePath.js';

export const decompress = async(pathToFile, pathToDestination) => {

  const absPathToFile = getAbsPath(pathToFile);
  const absPathToDest = getAbsPath(pathToDestination);
  const fileName = (String(absPathToFile.split('/').slice(-1)).split('.').slice(0, -1)).join('.');

  const unzip = createUnzip();
  const source = createReadStream(absPathToFile);
  const destination = createWriteStream(path.resolve(absPathToDest, fileName));
  source.pipe(unzip).pipe(destination)
    .on('error', () => { console.log('Operation failed') })
  consolePath()
};