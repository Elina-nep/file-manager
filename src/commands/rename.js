import fs from 'fs';
import path from 'path';
import { dirname } from 'path'

export const rename = async(pathToFile, newFilename) => {

  const absPathToFile = getAbsPath(pathToFile);
  const absPathToNewFile = path.normalize(`${String((absPathToFile.split(path.sep)).slice(-1))}/${newFilename}`);

  fs.access(absPathToNewFile, (err) => {
    if (!err) { console.log('Operation failed') } else {
      fs.rename(absPathToFile, newFilename, err => {
        if (err) console.log('Operation failed')
      });
    }
  })
};