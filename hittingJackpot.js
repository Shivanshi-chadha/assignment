const testJackpot = (arr) => {
  let firstWord = arr[0];
  const obj = {
    element: firstWord,
  };

  for (var i = 1; i <= arr.length - 1; i++) {
    if (arr[i] !== obj.element) {
      return false;
    }
  }
  return true;
};

console.log(testJackpot(["@", "@", "@", "@"]));
console.log(testJackpot(["abc", "abc", "abc", "abc"]));
console.log(testJackpot(["SS", "SS", "SS", "SS"]));
console.log(testJackpot(["&&", "&", "&&&", "&&&&"]));
console.log(testJackpot(["SS", "SS", "SS", "Ss"]));
