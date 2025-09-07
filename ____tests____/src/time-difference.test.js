const { calculateTimeDifference } = require("../../src/time-difference"); // replace with your actual filename

describe("calculateTimeDifference", () => {
  test("returns 0h 0m 0s for 0 milliseconds", () => {
    const result = calculateTimeDifference(0);
    expect(result).toEqual({
      duration: "0h 0m 0s",
      hours: 0,
      minutes: 0,
      seconds: 0,
    });
  });

  test("calculates only seconds correctly", () => {
    const result = calculateTimeDifference(4500); // 4.5 seconds
    expect(result).toEqual({
      duration: "0h 0m 4s",
      hours: 0,
      minutes: 0,
      seconds: 4,
    });
  });

  test("calculates minutes and seconds correctly", () => {
    const result = calculateTimeDifference(125000); // 2 minutes 5 seconds
    expect(result).toEqual({
      duration: "0h 2m 5s",
      hours: 0,
      minutes: 2,
      seconds: 5,
    });
  });

  test("calculates hours, minutes, and seconds correctly", () => {
    const result = calculateTimeDifference(
      3 * 3600 * 1000 + 15 * 60 * 1000 + 42 * 1000
    ); // 3h 15m 42s
    expect(result).toEqual({
      duration: "3h 15m 42s",
      hours: 3,
      minutes: 15,
      seconds: 42,
    });
  });

  test("handles large durations correctly", () => {
    const result = calculateTimeDifference(100000000); // ~27h 46m 40s
    expect(result).toEqual({
      duration: "27h 46m 40s",
      hours: 27,
      minutes: 46,
      seconds: 40,
    });
  });
});
