import fs from 'fs';
import path from 'path';
import { dirname } from 'path'
import { consolePath } from './consolePath.js';
import { getAbsPath } from './getAbsPath.js';

export const rename = async(pathToFile, newFilename) => {

  const absPathToFile = getAbsPath(pathToFile);
  const absPathToNewFile = [((absPathToFile.split(path.sep)).slice(0, -1)).join(path.sep), path.sep, newFilename].join('');
  console.log(absPathToNewFile)

  fs.access(absPathToNewFile, (err) => {
    if (!err) {
      console.log('Operation failed')
      consolePath()
    } else {
      fs.rename(absPathToFile, absPathToNewFile, err => {
        if (err) console.log('Operation failed')
        consolePath()
      });
    }
  })
};