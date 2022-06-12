import { currentDir } from '../location.js';
import path from 'path';
import os from 'os';

export const getAbsPath = (pathToFile) => {
  const homeDir = os.homedir()
  if (path.isAbsolute(pathToFile)) {
    if (!pathToFile.includes(homeDir)) {
      return currentDir.getPath();
    } else return pathToFile;
  } else { return path.normalize(`${currentDir.getPath()}/${pathToFile}`) }
}