function genString(n: number = Math.random()): string {
  return `Строка: ${n}`;
}

export function genList(): string[] {
  let res = [];
  for (let i = 0; i < 10; i++) {
    res.push(genString(i));
  }
  return res;
}
