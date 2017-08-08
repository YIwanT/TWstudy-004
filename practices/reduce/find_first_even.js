'use strict';

function find_first_even(collection) {
  //在这里写入代码
  let  result = 0;
  for (let item of collection) {
    if (item % 2 == 0) {
      result = item ;
      break ;
    }

  }
  return result  ;
}

module.exports = find_first_even;

