import { currentDir } from "../location.js";

export const consolePath = () => {
  console.log(`You are currently in ${currentDir.getPath()}`);
}