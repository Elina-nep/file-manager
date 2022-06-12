import { copy } from "./copy.js";
import { remove } from "./delete.js";


export const move = async(pathToFile, pathToNewDirectory) => {

  copy(pathToFile, pathToNewDirectory).then(() => { remove(pathToFile); }).catch(() => {
    console.log('Operation failed')
  });


}