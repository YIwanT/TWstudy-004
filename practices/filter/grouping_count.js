'use strict';

function find (object, ch){
  
}
function grouping_count(collection) {

  //在这里写入代码
  let result = {} ;

  for (let item of collection){
      let obj = find(result, item);
      if (obj){
          result.obj++;
      }else {
          result.item = 1;
      }
  }
   for (let item of result ){
       console.log(item);
   }


  return result ;
}

module.exports = grouping_count;
