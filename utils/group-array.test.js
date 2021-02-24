const groupArrayElements = require("./group-array");

test("should group elements in the array", () => {
  const numberOfGroups = 3;

  const newArray = groupArrayElements([1, 2, 3, 4, 5], numberOfGroups);
  expect(newArray.length).toBe(3);
});

test("should return empty array if empty array provided", () => {
  const numberOfGroups = 3;

  const newArray = groupArrayElements([], numberOfGroups);
  expect(newArray.length).toBe(0);
});

test("should throw error if number of groups is greater than array length", () => {
  const numberOfGroups = 3;

  expect(() => {
    groupArrayElements([1], numberOfGroups);
  }).toThrow();
});
