module.exports = function check(str, bracketsConfig) {

  for (let i = 0; i < bracketsConfig.length;) {
    let brackets = bracketsConfig[i].join('');

    if (str.indexOf(brackets) !== -1) {
      str = str.replace(brackets, '');
      i = 0;
    } else i++
  }

  return !str;
}
