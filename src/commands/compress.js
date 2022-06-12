import { createGzip } from 'node:zlib'
import {
  createReadStream,
  createWriteStream
} from 'node:fs'
import path from 'path';
import { getAbsPath } from './getAbsPath.js';
import { consolePath } from './consolePath.js';

export const compress = async(pathToFile, pathToDestination) => {

  const absPathToFile = getAbsPath(pathToFile);
  const absPathToDest = getAbsPath(pathToDestination);
  const fileName = String(absPathToFile.split(path.sep).slice(-1));

  const gzip = createGzip();
  const source = createReadStream(absPathToFile);
  const destination = createWriteStream(path.resolve(absPathToDest, `${fileName}.gz`));
  source.pipe(gzip).pipe(destination).on('error', () => { console.log('Operation failed') })
  consolePath()
};