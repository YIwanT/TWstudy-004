'use strict';

function collect_min_number(collection) {
  //在这里写入代码
  let min = collection[0]; ;
  for (let item of collection ){
      if (item < min){
          min = item ;
      }
  }
  return min ;
}

module.exports = collect_min_number;

