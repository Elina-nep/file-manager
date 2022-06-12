import path from 'path';
import fs from 'fs';
import { consolePath } from './consolePath.js';

export const goToDir = (currentDir, newPath, homeDir) => {
  if (path.isAbsolute(newPath)) {

    if (!newPath.includes(homeDir)) {
      newPath = currentDir.getPath();
    }
  } else {
    newPath = path.normalize(`${currentDir.getPath()}/${newPath}`)
    if (!newPath.includes(homeDir)) {
      newPath = homeDir;
    }
  }

  fs.access(newPath, (err) => {
    if (err) {
      console.log('Operation failed');
      newPath = currentDir.getPath();
    }
    fs.lstat(newPath, (err, stats) => {

      if (err || !stats.isDirectory()) {
        console.log('Operation failed');
        newPath = currentDir.getPath();
      }

      currentDir.setPath(newPath);
      consolePath()
    });
  })
}