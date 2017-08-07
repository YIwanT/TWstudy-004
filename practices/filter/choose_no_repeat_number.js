'use strict';

function notfind(collection, num){
    for (let item of collection ){
        if (item == num){
            return false ;
        }
    }
    return true ;
}
function choose_no_repeat_number(collection) {

  //在这里写入代码
  let result = [] ;
  for (let item of collection){
      if (notfind(result, item)){
          result.push(item);
      }
  }
  return result ;
}

module.exports = choose_no_repeat_number;
