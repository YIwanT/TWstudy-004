'use strict';

function compute_average(collection) {
  //在这里写入代码
  let result ;
  let sum  = 0
  for (let i = 0 ; i < collection.length ; i++){
      sum = sum + collection[i];
  }
  return result = sum / collection.length ;
}

module.exports = compute_average;

