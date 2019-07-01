/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  let stack = []
  for (let i = 0; i < s.length; i++) {
    let char = s.charAt(i)
    if (char == '(' || char == '{' || char == '[') {
      stack.push(char)
    } else {
      if (char == ')') {
        if (stack[stack.length - 1] == '(') {
          stack.pop()
        } else {
          return false
        } 
      } else if (char == ']') {
        if (stack[stack.length - 1] == '[') {
          stack.pop()
        } else {
          return false
        } 
      } else if (char == '}') {
        if (stack[stack.length - 1] == '{') {
          stack.pop()
        } else {
          return false
        } 
      }
    }
  }
  return stack.length == 0
};

