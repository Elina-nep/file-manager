import { promises as fs } from 'fs';
import { consolePath } from './consolePath.js';
import { getAbsPath } from './getAbsPath.js';

export const remove = async(pathToFile) => {
  const absPathToFile = getAbsPath(pathToFile);
  try {
    await fs.unlink(absPathToFile)
    consolePath()
  } catch {
    console.log('Operation failed')
    consolePath()
  }
};