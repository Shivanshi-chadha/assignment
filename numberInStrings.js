const numInStr = (arr) => {
  const newArr = [];
  let foundNum = false;
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr[i].length; j++) {
      if (!(isNaN(arr[i][j]) || arr[i][j].trim() === "")) {
        foundNum = true;
      }
    }
    if (foundNum) {
      newArr.push(arr[i]);
    }
    foundNum = false;
  }
  return newArr;
};

console.log(numInStr(["1a", "a", "2b", "b"]));
console.log(numInStr(["abc", "abc10"]));
console.log(numInStr(["abc", "ab10c", "a10bc", "bcd"]));
console.log(numInStr(["this is a test", "test1"]));
