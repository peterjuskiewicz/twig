const groupArrayElements = (arr, n) => {
  if (arr.length === 0) {
    return [];
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

export default groupArrayElements;
