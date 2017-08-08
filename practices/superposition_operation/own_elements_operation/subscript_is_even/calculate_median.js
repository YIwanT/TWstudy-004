'use strict';
var calculate_median = function(collection){
  let  result = 0 ;
  let array = [] ;
  for (let item of collection) {
    if (item % 2 == 0 ){
      array.push(item);
    }
  }
  if (array.length % 2 == 0){
    result = (array[parseInt(array.length / 2 )] + array[parseInt(array.length / 2 ) - 1] ) / 2  ;

  }else  {
    result = array[parseInt(array.length / 2 )] ;
  }
return result ;
};
module.exports = calculate_median;
