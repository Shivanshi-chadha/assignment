const replaceVowel = (string) => {
  let str = "";
  for (var i = 0; i < string.length; i++) {
    switch (string[i]) {
      case "a":
        str += 1;
        break;
      case "e":
        str += 2;
        break;
      case "i":
        str += 3;
        break;
      case "o":
        str += 4;
        break;
      case "u":
        str += 5;
        break;
      default:
        str += string.charAt(i);
    }
  }
  return str;
};

console.log(replaceVowel("karachi"));
console.log(replaceVowel("chembur"));
console.log(replaceVowel("khandbari"));
