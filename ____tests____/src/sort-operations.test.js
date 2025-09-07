const { sortData, sortArrayObjectData } = require("../../src/sort-operations");

describe("sortData", () => {
  it("should sort numbers in ascending order by default", () => {
    const result = sortData([3, 1, 2]);
    expect(result).toEqual([1, 2, 3]);
  });

  it("should sort numbers in descending order when orderType = 'des'", () => {
    const result = sortData([3, 1, 2], "des");
    expect(result).toEqual([3, 2, 1]);
  });

  it("should return empty array if input is empty", () => {
    const result = sortData([], "asc");
    expect(result).toEqual([]);
  });

  it("should handle single element array", () => {
    const result = sortData([42]);
    expect(result).toEqual([42]);
  });
});

describe("sortArrayObjectData", () => {
  it("should sort objects by numeric field ascending", () => {
    const data = [{ age: 30 }, { age: 20 }, { age: 40 }];
    const result = sortArrayObjectData(data, "age", "asc");
    expect(result).toEqual([{ age: 20 }, { age: 30 }, { age: 40 }]);
  });

  it("should sort objects by numeric field descending", () => {
    const data = [{ age: 30 }, { age: 20 }, { age: 40 }];
    const result = sortArrayObjectData(data, "age", "des");
    expect(result).toEqual([{ age: 40 }, { age: 30 }, { age: 20 }]);
  });

  it("should sort objects by string field ascending", () => {
    const data = [{ name: "Charlie" }, { name: "Alice" }, { name: "Bob" }];
    const result = sortArrayObjectData(data, "name", "asc");
    expect(result).toEqual([
      { name: "Alice" },
      { name: "Bob" },
      { name: "Charlie" },
    ]);
  });

  it("should sort objects by string field descending", () => {
    const data = [{ name: "Charlie" }, { name: "Alice" }, { name: "Bob" }];
    const result = sortArrayObjectData(data, "name", "des");
    expect(result).toEqual([
      { name: "Charlie" },
      { name: "Bob" },
      { name: "Alice" },
    ]);
  });

  it("should return empty array if input is empty", () => {
    const result = sortArrayObjectData([], "name", "asc");
    expect(result).toEqual([]);
  });

  it("should handle single element array", () => {
    const result = sortArrayObjectData([{ score: 100 }], "score", "asc");
    expect(result).toEqual([{ score: 100 }]);
  });
});
