'use strict';

function compute_median(collection) {
  //在这里写入代码
  let result  = 0 ;
  let Array = collection ;
  if (Array.length % 2 == 0) {

    for (var i = 0; i < Array.length; i++) {
      for (var j = 0; j < Array.length; j++) {
        let swap = 0;
        if (Array[i] > Array[j]) {
          swap = Array[i];
          Array[i] = Array[j];
          Array[j] = swap;
        }


      }
    }
    let num = parseInt(Array.length / 2);

    if (Array.length % 2 == 0) {
      result = (Array[num] + Array[num - 1]) / 2;
    }
  }else {
    let num = parseInt(Array.length / 2);
    result = Array[num] ;
  }

  return result ;
}

module.exports = compute_median;


