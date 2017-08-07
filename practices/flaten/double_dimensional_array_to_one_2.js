'use strict';

function notfind(result, ch){
    for (let item of result ){
        if (item === ch){
            return false ;
        }
    }
    return true ;
}
function double_to_one(collection) {

  //在这里写入代码
  let result = [] ;
  let summary =[] ;
  for (let item of collection ){
  
      if (item.length > 0){
          for (let i = 0; i < item.length ; i++){
               summary.push(item[i]);
           }

         
           //console.log(item);
      }else {
           summary.push(item);
      }
  }
  for (let item of summary){
      if (notfind(result, item)){
          result.push(item);
      }
  }
  return result ;
}


module.exports = double_to_one;
