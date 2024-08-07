
import { abs } from ".";

describe("abs function ", () => {
  test("with badly pre defined parameters", () => {
    const wrongNumbs: number[] = [0, 1, 100, 42, 666, 7, 777, 8];
    wrongNumbs.forEach((num) => {
      expect(abs(num)).toEqual(Math.abs(num));
    });
  });

  // test("witha a single random parameter", () => {
  //   const num = faker.number.int({ min: Number.MIN_SAFE_INTEGER });
  //   console.log("🚀 ~ test ~ num:", num);
  //   expect(abs(num)).toEqual(Math.abs(num));
  // });

  // test("with 100 random parameters", () => {
  //   [...Array(100)].forEach(() => {
  //     const num = faker.number.int({ min: Number.MIN_SAFE_INTEGER });
  //     console.log("🚀 ~ test ~ num:", num);
  //     expect(abs(num)).toEqual(Math.abs(num));
  //   });
  // });
});
