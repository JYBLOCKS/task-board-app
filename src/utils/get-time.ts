const date = new Date();
const addZero = (num: number) => {
  return num > 9 ? num : `0${num}`;
};
export const getTime = () =>
  `${addZero(date.getHours())}:${addZero(date.getMinutes())}, ${addZero(
    date.getDate()
  )}/${addZero(date.getMonth())}/${addZero(date.getFullYear())}`;
