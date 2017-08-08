'use strict';

function average_uneven(collection) {

  //在这里写入代码
  let result = 0 ;
  let sum = 0 ;
  let count  = 0 ;
  for (let item of collection) {
    if (item % 2 != 0 ){
      sum += item ;
      count++;
    }
  }
  return result = sum / count ;
}

module.exports = average_uneven;
