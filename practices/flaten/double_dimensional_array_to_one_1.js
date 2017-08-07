'use strict';

function double_to_one(collection) {

  //在这里写入代码
  let result = [] ;
  for (let item of collection ){
  
      if (item.length > 0){
          for (let i = 0; i < item.length ; i++){
               result.push(item[i]);
           }

         
           //console.log(item);
      }else {
           result.push(item);
      }
  }
  return result ;
}

module.exports = double_to_one;
