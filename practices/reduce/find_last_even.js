'use strict';

function find_last_even(collection) {
  //在这里写入代码
  let  result = 0;
  for (let item of collection) {
    if (item % 2 == 0) {
      result = item ;

    }

  }
  return result  ;
}

module.exports = find_last_even;
