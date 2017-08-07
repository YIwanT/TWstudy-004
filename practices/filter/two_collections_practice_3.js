'use strict';

function includes(collection, ch){
    for(let item of collection){
        if (ch % item === 0){
            return true ;
        }
    }
    return false ;
}
function choose_divisible_integer(collection_a, collection_b) {

  //在这里写入代码
  let result = [] ;
  for (let item of collection_a){
      if (includes(collection_b, item)){
          result.push(item);
      }
  }
  return result ;
}


module.exports = choose_divisible_integer;
