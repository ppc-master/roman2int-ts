const valueMap = new Map<string, number>([
  ['I', 1], ['V', 5], ['X', 10],
]);


export const roman2int = (value: string): number => {
  let result = 0
  for (let i = value.length - 1; i >= 0; --i) {
    let n = valueMap.get(value.charAt(i))
    if (!n) {
      continue;
    }
    if (result > 4 * n) {
      result -= n;
    } else {
      result += n;
    }
  }
  return result
}
