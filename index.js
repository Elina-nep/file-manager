// os.homedir()
// process.stdout.write()
import { parseInput } from './src/handler.js'
import { currentDir } from './src/location.js'
import os from 'os'

const fileManager = () => {
  const homeDir = os.homedir();
  currentDir.setPath(homeDir);

  console.log(`You are currently in ${currentDir.getPath()}`);
  process.stdin.on('data', (data) => {
    const line = String(data);
    parseInput(line.replace(/\r?\n/g, ""), homeDir, currentDir);

  });
}

fileManager()