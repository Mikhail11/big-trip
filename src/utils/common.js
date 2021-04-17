export function getRandomDataFromArray(array) {
  return array[generateRandomNumber(0, array.length-1)];
}

export function generateRandomNumber(a = 0, b = 1) {
  const min = Math.ceil(Math.min(a, b));
  const max = Math.floor(Math.max(a, b));
  return Math.floor(min + Math.random() * (max - min + 1));
}
