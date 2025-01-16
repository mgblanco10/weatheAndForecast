export const isValidCoordinate = (value) => {
  const regex = /^-?\d*[.,]?\d*$/;
  return regex.test(value);
};
