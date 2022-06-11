import { promises as fs } from 'fs';

export const remove = async(pathToFile) => {
  try {
    await fs.unlink(pathToFile)
  } catch { throw new Error('Operation failed') }
};