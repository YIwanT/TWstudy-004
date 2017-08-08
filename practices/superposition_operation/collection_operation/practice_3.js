'use strict';

function hybrid_operation_to_uneven(collection) {

  //在这里写入代码
  let result = 0 ;
  let array = [] ;
  for (let item of collection
    ) {
    if (item % 2 != 0) {
      array.push(item * 3 + 5);
    }
  }
  for (let item of array
    ) {
    result += item ;
  }
  return result ;

}


module.exports = hybrid_operation_to_uneven;

