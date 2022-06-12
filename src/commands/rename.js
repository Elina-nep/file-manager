import fs from 'fs';
import path from 'path';
import * as path from 'path';
import { fileURLToPath } from 'url'
import { dirname } from 'path'

export const rename = async(pathToFile, newFilename) => {

  const absPathToFile = getAbsPath(pathToFile);
  const absPathToNewFile = absPathToFile.split(path.sep)
  const absPathToDest = getAbsPath(pathToNewDirectory);

  fs.access(pathToFile, (err) => {
    if (!err) throw new Error('Operation failed')
    fs.rename(pathToFile, path.resolve(dirname(pathToFile), newFilename), err => {
      if (err) throw new Error('Operation failed')
    });
  })
};