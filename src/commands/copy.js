import fs from 'fs';
import * as path from 'path';

export const copy = async(pathToFile, pathToNewDirectory) => {

  fs.access(path.resolve(pathToNewDirectory, String(pathToFile.slice('/')[-1])), (err) => {
    if (!err) throw new Error('Operation failed');
  })

  fs.createReadStream(pathToFile).pipe(fs.createWriteStream(
      path.resolve(pathToNewDirectory, String(pathToFile.slice('/')[-1]))))
    .on('error', (e) => { throw new Error('Operation failed') });;

  // fs.copyFile(pathToFile, path.resolve(pathToNewDirectory, String(pathToFile.slice('/')[-1])), err => {
  //   if (err) throw new Error('Operation failed')
  // })

}