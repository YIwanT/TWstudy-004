'use strict';

function even_to_letter(collection) {

  //在这里写入代码
  let result = [] ;
  for (let item of collection
    ) {
    if ( item %  2 == 0 ){
      result.push(String.fromCharCode(96+item));
    }
  }
  return result ;
}

module.exports = even_to_letter;
