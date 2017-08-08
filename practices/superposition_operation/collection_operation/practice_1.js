'use strict';

function hybrid_operation(collection) {

  //在这里写入代码
  let result = 0 ;
  let array = [] ;
  for (let item of collection
    ) {
    array.push(item * 3 + 2);
  }
  for (let item of array
    ) {
    result += item ;
  }
  return result ;

}

module.exports = hybrid_operation;

