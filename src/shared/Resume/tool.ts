export function pluralize(num: number, forms: [string, string, string]) {
  const cases = [2, 0, 1, 1, 1, 2];
  return forms[
    num % 100 > 4 && num % 100 < 20 ? 2 : cases[Math.min(num % 10, 5)]
  ];
}
