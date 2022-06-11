export const getName = () => {
  process.argv.forEach((el) => {
    if (el.startsWith('--username='))
      return (el.slice(11))
  });
};