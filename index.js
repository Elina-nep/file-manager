// os.homedir()
// process.stdout.write()
import { parseInput } from './src/handler.js'
import { currentDir } from './src/location.js'
import os from 'os'

const fileManager = () => {
  const homeDir = os.homedir();
  currentDir.setPath(homeDir);

  let username = 'Username';
  process.argv.forEach((el) => {
    if (el.startsWith('--username=')) {
      username = el.slice(11)
      console.log(`Welcome to the File Manager, ${username}!`)
    }
  });

  console.log(`You are currently in ${currentDir.getPath()}`);
  process.stdin.on('data', (data) => {
    const line = String(data);
    parseInput(line.replace(/\r?\n/g, ""), homeDir, currentDir);

  })
  process.on('exit', () => {
    console.log(`Thank you for using File Manager, ${username}!`);

  }).on('SIGINT', () => {
    console.log('')
    process.exit(0);

  });
}

fileManager()