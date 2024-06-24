import { Sum } from "../sum";

test("sum of two numbers ", () => {
  const sum = Sum(3, 4);
  expect(sum).toBe(7);
});
