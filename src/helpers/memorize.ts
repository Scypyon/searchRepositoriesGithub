export const memo = (fn: (...args: any[]) => any) => {
  let cache = {};
  return (...args: any[]) => {
    let n = args[0];
    if (n in cache) {
      // @ts-ignore: Unreachable code error
      return cache[n];
    } else {
      let result = fn(n);
      // @ts-ignore: Unreachable code error
      cache[n] = result;
      return result;
    }
  };
};
