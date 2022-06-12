import fs from 'fs';
import * as path from 'path';
import { consolePath } from './consolePath.js';
import { getAbsPath } from './getAbsPath.js';

export const copy = async(pathToFile, pathToNewDirectory) => {

  const absPathToFile = getAbsPath(pathToFile);
  const absPathToDest = getAbsPath(pathToNewDirectory);

  fs.access(path.resolve(absPathToDest, String(absPathToFile.slice('/')[-1])), (err) => {
    if (!err) console.log('Operation failed');
    return;
  })

  const source = fs.createReadStream(absPathToFile)
  const destination = fs.createWriteStream(path.resolve(absPathToDest, String((absPathToFile.split('/')).slice(-1))))

  source.pipe(destination).on('error', () => { console.log('Operation failed') }).on('close', () => { consolePath() })

}