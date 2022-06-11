import path from 'path';
import { consolePath } from './consolePath.js';
import { currentDir } from '../location.js'

export const goUp = () => {
  currentDir.setPath(path.normalize(`${currentDir.getPath()}/..`));
  consolePath();
}