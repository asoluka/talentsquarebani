const toTitleCase = (str, firstWordOnly) => {
  if (firstWordOnly === true) {
    var newString = str.toLowerCase().replace(/(^\s*\w)/g, function (c) {
      return c.toUpperCase();
    });
    return newString;
  }

  return str
    ?.toLowerCase()
    .split(" ")
    .map(function (word) {
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(" ");
};

export default toTitleCase;
