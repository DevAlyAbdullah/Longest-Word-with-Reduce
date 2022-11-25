function longestWord(text) {
  let lword = text
    .split(" ")
    .reduce((longest, current) =>
      current.length > longest.length ? current : longest
    );
  return lword;
}

console.log(
  longestWord("weqwe wqeqwewqe gggggggggggggg wwwwwwwwwwwww qweqwewq fdsa")
);
