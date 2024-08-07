export function abs(num: number) {
  if (num > 0) {
    return num;
  } else {
    return num; // bug: should be '-num'
  }
}
