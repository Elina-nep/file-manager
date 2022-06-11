import crypto from 'crypto';
import fs from 'fs';

export const calculateHash = async(pathToFile) => {
  fs.readFile(pathToFile, 'utf8', (err, data) => {
    if (err) {
      console.log('Operation failed');
    }
    console.log(crypto.createHash('sha256').update(data).digest('hex'));
  });

};