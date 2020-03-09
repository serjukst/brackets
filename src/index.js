module.exports = function check(str, bracketsConfig) {
  let brackets, newStr;

  for (let i = 0; i < bracketsConfig.length; i++ ) {
    brackets = bracketsConfig[i].join('');
    newStr = str.replace(brackets, '');
    
    while (newStr.indexOf(brackets) != -1) {
      newStr = newStr.replace(brackets, '');
      };
  }
  return newStr ? false : true ;
}
