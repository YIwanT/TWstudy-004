'use strict';

function get_intersection(collection_a, collection_b) {
  //在这里写入代码
  let result = [] ;
  for (let item_b of collection_b){
      for (let item_a of collection_a){
          if (item_a === item_b){
              result.push(item_a);
          }
      }
  }
  return result ;
}

module.exports = get_intersection;
