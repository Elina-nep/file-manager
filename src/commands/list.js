import fs from 'fs';
import { currentDir } from '../location.js';
import { consolePath } from './consolePath.js';

export const list = async() => {
  fs.readdir(currentDir.getPath(), (err, files) => {
    if (err) console.log('Operation failed');
    else {
      files.forEach(file => {
        console.log(file);
      });
    }
    consolePath();
  });
};