import { parseArgs } from "./args.js"
import os from "os"

export const getOsInfo = (arg) => {
  //   const args = parseArgs(commands);

  switch (String(arg).replace(/\r?\n/g, "")) {
    case ('--EOL'):
      {
        console.log(JSON.stringify(os.EOL));
        break;
      }
    case ('--cpus'):
      {
        const decimal = os.arch() === 'arm64' ? 10 : 1000
        const cpuInfo = os.cpus().map((el) => { return ({ model: el.model, speed: el.speed / decimal }) })
        console.log(cpuInfo);
        break;
      }
    case ('--homedir'):
      {
        console.log(os.homedir());
        break;
      }
    case ('--username'):
      {
        console.log(os.userInfo().username);
        break;
      }
    case ('--architecture'):
      {
        console.log(os.arch());
        break;
      }
    default:
      {
        console.log('Invalid input')
        break;
      }

  }

}