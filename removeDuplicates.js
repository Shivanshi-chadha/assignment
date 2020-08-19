const removeDups = (data) => {
  let arr = [];
  data.forEach((element) => {
    if (!arr.includes(element)) {
      arr.push(element);
    }
  });
  return arr;
};

console.log(removeDups([1, 0, 1, 0]));
console.log(removeDups(["The", "big", "cat"]));
console.log(removeDups(["John", "Taylor", "John"]));
