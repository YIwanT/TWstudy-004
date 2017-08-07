'use strict';
function find(object, ch){
    let array = Object.keys(object) ;
    for (let item of array){
        if (item == ch){
            return true ;

        }
    }
    return false ;
}
function grouping_count(collection) {

  //在这里写入代码
  let result = {} ;
  for (let item of collection ){
      if (find(result, item)){
          result[item] = result[item] + 1 ;
      }else {
          result[item] = 1 ;
      }
  }
  return result ;
 }

module.exports = grouping_count;
