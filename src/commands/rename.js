import fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url'
import { dirname } from 'path'

export const rename = async(pathToFile, newFilename) => {
  fs.access(pathToFile, (err) => {
    if (!err) throw new Error('Operation failed')
    fs.rename(pathToFile, path.resolve(dirname(pathToFile), newFilename), err => {
      if (err) throw new Error('Operation failed')
    });
  })
};