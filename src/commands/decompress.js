import { createUnzip } from 'node:zlib'
import {
  createReadStream,
  createWriteStream
} from 'node:fs'

export const decompress = async(pathToFile, pathToDestination) => {
  const unzip = createUnzip();
  const source = createReadStream(pathToFile);
  const destination = createWriteStream(pathToDestination);
  source.pipe(unzip).pipe(destination)
};