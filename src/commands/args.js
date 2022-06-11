export const parseArgs = (commands) => {
  let conMess = [];
  commands.forEach((el) => {
    if (el.startsWith('--'))
      conMess.push(el.slice(2))
  });
  return (conMess)
};