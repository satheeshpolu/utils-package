const { formatNumber, formatDate } = require("../../src/formaters");

describe("formatNumber", () => {
  it("should add leading zero for single-digit positive numbers", () => {
    expect(formatNumber(5)).toBe("05");
  });

  it("should return the same number for double-digit positive numbers", () => {
    expect(formatNumber(12)).toBe(12);
  });

  //   it("should allow zero", () => {
  //     expect(formatNumber(0)).toBe("00");
  //   });

  //   it("should throw error for null or undefined", () => {
  //     expect(() => formatNumber()).toBe("Please provide the valid number");
  //   });

  it("should throw error for NaN values", () => {
    expect(() => formatNumber("abc")).toThrow(
      "Please provide the valid number instead of abc"
    );
  });

  it("should return negative numbers as is", () => {
    expect(formatNumber(-5)).toBe(-5);
  });
});

describe("formatDate", () => {
  it("should format current date by default", () => {
    const result = formatDate();
    expect(result).toMatch(/\d{2}\.\d{2}\.\d{4} \d{2}:\d{2}/);
  });

  it("should format a given date correctly", () => {
    const date = new Date("2023-12-25T08:05:00");
    const result = formatDate(date, "/");
    expect(result).toBe("02/12/2023 08:05");
  });

  it("should throw error if non-date value is passed", () => {
    expect(() => formatDate("not-a-date")).toThrow(
      "Please provide the Date instead of not-a-date"
    );
  });
});
