import { createGzip } from 'node:zlib'
import {
  createReadStream,
  createWriteStream
} from 'node:fs'

export const compress = async(pathToFile, pathToDestination) => {
  const gzip = createGzip();
  const source = createReadStream(pathToFile);
  const destination = createWriteStream(pathToDestination);
  source.pipe(gzip).pipe(destination)
};