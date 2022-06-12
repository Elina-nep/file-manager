import { getName } from "./get-name"
export const welcomeUser = () => {
  let userName = getName();
  console.log(`Welcome to the File Manager, ${userName}!`)
};