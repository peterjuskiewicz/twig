
/**
 * 
 * @param {Array<any>} arr - Array of items to group
 * @param {number} n - Number of groups
 * @throws Will throw an error if number of groups is greater than array length
 * @returns {Array<Array<any>>} Grouped array
 */

const groupArrayElements = (arr, n) => {
  if (arr.length === 0) {
    return [];
  }

  if (n > arr.length) {
    throw "number of groups cannot be greater than array length";
  }

  // array to store groups
  let newArray = [];

  // determine number of items in a group
  let itemsInGroup = Math.ceil(arr.length / n);

  do {
    let group = arr.splice(0, itemsInGroup);

    newArray.push(group);
  } while (arr.length !== 0);

  return newArray;
};

module.exports = groupArrayElements;
