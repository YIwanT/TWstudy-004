'use strict';

function notfind(collection, num){
    for (let item of collection){
        if (item === num){
            return false ;
        }
    }
    return true ;
}
function get_union(collection_a, collection_b) {
  //在这里写入代码
  let result = [] ;
  for (let item of collection_a){
      result.push(item);
  }
  for (let item of collection_b){
      if (notfind(result, item)){
          result.push(item);
      }
  }
  return result ;
  
}

module.exports = get_union;

