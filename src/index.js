module.exports = function check(str, bracketsConfig) {
  // your solution
  let openBrackets = [];

  if (str.length % 2 !== 0)
    return false;

  for (let i = 0; i < str.length; i++) {
    bracketsConfig.forEach(element => {
      if (openBrackets[openBrackets.length - 1] == element[0] && str[i] == element[1]) {
        openBrackets.pop();
      } else if (str[i] == element[0]) {
        openBrackets.push(str[i]);
      }
    });
  }

  if (openBrackets.length === 0)
    return true;
  else
    return false;

}
