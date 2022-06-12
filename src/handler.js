import { calculateHash } from "./commands/calcHash.js";
import { compress } from "./commands/compress.js";
import { copy } from "./commands/copy.js";
import { create } from "./commands/create.js";
import { decompress } from "./commands/decompress.js";
import { remove } from "./commands/delete.js";
import { goUp } from "./commands/goUp.js";
import { list } from "./commands/list.js";
import { move } from "./commands/move.js";
import { read } from "./commands/read.js";
import { rename } from "./commands/rename.js";
import { goToDir } from "./commands/goToDir.js";
import { consolePath } from './commands/consolePath.js';
import { getOsInfo } from "./commands/os.js";

export const parseInput = (line, homeDir, currentDir) => {
  const inputCommand = line.split(' ');
  switch (String(inputCommand[0])) {
    case ('up'):
      {
        if (homeDir !== currentDir.getPath()) {
          goUp();
        } else consolePath();
        break
      }
    case ('cd'):
      {
        goToDir(currentDir, String(inputCommand[1]), homeDir);
        break;
      }
    case ('ls'):
      {
        list();
        break;
      }
    case ('cat'):
      {
        read(String(inputCommand[1]));
        break;
      }
    case ('add'):
      {
        create(String(inputCommand[1]));
        break;
      }
    case ('rn'):
      {
        rename(String(inputCommand[1]), String(inputCommand[2]));
        break;
      }
    case ('cp'):
      {
        copy(String(inputCommand[1]), String(inputCommand[2]))

        break;
      }
    case ('mv'):
      {
        move(String(inputCommand[1]), String(inputCommand[2]))

        break;
      }
    case ('rm'):
      {
        remove(String(inputCommand[1]))
        break;
      }
    case ('os'):
      {
        getOsInfo(inputCommand[1]);
        consolePath();
        break;
      }
    case ('hash'):
      {
        calculateHash(String(inputCommand[1]))
        break;
      }
    case ('compress'):
      {
        compress(String(inputCommand[1]), String(inputCommand[2]));
        break;
      }
    case ('decompress'):
      {
        decompress(String(inputCommand[1]), String(inputCommand[2]));
        break;
      }

    case ('.exit'):
      {
        process.exit(0);
      }

    default:
      {
        process.stdout.write('Invalid input\n');
        break;
      }

  }
}