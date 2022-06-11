import { parseArgs } from "./args.js"

export const getOsInfo = (commands) => {
  const args = parseArgs(commands);
  args.forEach((arg) => {
    switch (String(arg).replace(/\r?\n/g, "")) {
      case ('EOL'):
        {

          break;
        }
      case ('cpus'):
        {

          break;
        }
      case ('homedir'):
        {

          break;
        }
      case ('username'):
        {

          break;
        }
      case ('architecture'):
        {

          break;
        }
      default:
        {
          throw new Error('Invalid input')
          break;
        }

    }
  })
}