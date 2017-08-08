'use strict';
function aver(collection) {
  let result = [];
  let  array1 = [] ;
  let  array2 = [] ;
  let  array3 = [] ;
  for (let item of collection) {
    if ( item < 10  ){
      array1.push(item);

    }
    else if ( 10 <= item && item < 100 ) {
      array2.push(item);
      console.log(item);
    }else {
      array3.push(item);
    }
  }
  if (array1 != ''){
    let sum = 0 ;
    for (var i = 0; i < array1.length; i++) {
      sum += array1[i];
    }
    result.push(parseInt(sum / array1.length));
  }
  if (array2 != ''){
    let sum = 0 ;
    for (var i = 0; i < array2.length; i++) {
      sum += array1[i];
    }
    result.push(parseInt(sum / array2.length));
  }
  if (array3 != ''){
    let sum = 0 ;
    for (var i = 0; i < array3.length; i++) {
      sum += array1[i];
    }
    result.push(parseInt(sum / array3.length));
  }

  return result ;
}
var even_group_calculate_average = function(collection){
let  result = [] ;
let array = [];
  for (let item of collection) {
    if (item % 2 == 0 ){
      array.push(item);
    }
  }

  if (array == ''){
    result.push(0);

  }
  else {
    result = aver(array);

  }
return result ;
};
module.exports = even_group_calculate_average;
