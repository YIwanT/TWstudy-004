'use strict';

function average_to_letter(collection) {

  //在这里写入代码
  let result = '' ;
  let  sum  = 0 ;
  for (let item of collection
    ) {
    sum  += item ;
  }
  let aver = parseInt(sum / collection.length)
  result = String.fromCharCode(97 + aver);
  return result ;
}


module.exports = average_to_letter;

