const realType = (data) => {
  if (Array.isArray(data)) {
    return "array";
  }
  if (data && data.toString() === "[object Object]") {
    return "object";
  }
  if (data === null) {
    return "null";
  }
  return typeof data;
};

console.log(realType(1));
console.log(realType("a"));
console.log(realType(true));
console.log(realType([]));
console.log(realType(null));
console.log(realType({}));
