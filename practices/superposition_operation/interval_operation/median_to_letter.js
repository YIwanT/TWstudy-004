'use strict';

function median_to_letter(collection) {

  //在这里写入代码
  let result ;
  let num = 0 ;
  let count = parseInt(collection.length / 2) ;
  if (collection.length % 2 == 0){
    num = (collection[count] + collection[count + 1]) / 2 ;
  }
  else {
    num = collection[count + 1] ;
  }
if (num > 26){
  result =  String.fromCharCode(97) + String.fromCharCode(96 + num - 26);
}else {
  result =  String.fromCharCode(96 + num);
}

  return result ;
}

module.exports = median_to_letter;
