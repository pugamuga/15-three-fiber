export const customProgress = (pr: number): number => {
  let newProgress: number = 0;

  if (pr < 100) {
    if (Number(pr.toFixed(0)) > newProgress) {
      newProgress = Number(pr.toFixed(0));
    } else {
      setInterval(() => {
        newProgress++;
      }, 100);
    }
  } else {
    setInterval(() => {
      newProgress++;
    }, 100);
  }
  console.log(newProgress);
  return newProgress;
};
