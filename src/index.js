module.exports = function reverse (n) {
  let param = ('' + n).split('').reverse();
  if (param[param.length - 1] === '-') {
    return param.join('').slice(0, -1);
  } else return param.join('');
}
