export const checkNaN = (num: Number) => {
  if (Number.isNaN(num)) {
    return new Error('NaN은 Number Type이지만 유효한 Number 값이 아닙니다.');
  }
};
