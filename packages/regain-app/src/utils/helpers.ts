export const calculateRealTime = (time: number) => {
  let minutes = Math.floor(time / 60);
  let seconds = Math.floor(time - minutes * 60);
  return minutes + ':' + seconds;
}

export const onlyUnique = (value, index, self) => {
  return self.indexOf(value) === index;
}
