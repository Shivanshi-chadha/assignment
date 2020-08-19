const specialReverse = (sentence, letter) => {
  const words = sentence.split(" ");
  words.forEach((word, index) => {
    if (word.charAt(0) === letter) {
      words.splice(index, 1, reverseTheWord(word));
    }
  });
  return words.join(" ");
};

const reverseTheWord = (word) => {
  let revWord = "";
  for (var i = word.length - 1; i >= 0; i--) {
    revWord += word[i];
  }
  return revWord;
};

console.log(specialReverse("word searches are super fun", "s"));
console.log(specialReverse("first man to walk on the moon", "m"));
console.log(specialReverse("peter piper picked pickled peppers", "p"));
