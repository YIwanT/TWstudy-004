'use strict';
function aver(collection) {
  let result = [];
  let  array1 = [] ;
  let  array2 = [] ;
  let  array3 = [] ;
  let sum = 0 ;
  let sum1 = 0;
  let sum2 = 0 ;
  for (let item of collection) {
    if ( item < 10  ){
      array1.push(item);
    }
    else if ( 10 <= item && item < 100 ) {
      array2.push(item);

    }else {
      array3.push(item);
    }
  }
  if (array1 != '' && array2 != ''){
  for (let item of array1) {
    sum += item ;
  }
 result.push(sum / array1.length)
  for (let item of array2) {
    sum1 += item ;
  }
  result.push(sum1 / array2.length)
  for (let item of array3) {
    sum2 += item ;
  }
  result.push(sum2 / array3.length)
}else {
    for (let item of array3) {
      sum2 += item ;
    }
    result.push(sum2 / array3.length)
  }
  return result ;
}
var even_group_calculate_average = function(collection){
let  result = [] ;
let array = [];
  let oushu = [] ;
  for (var i = 0; i < collection.length; i++) {
    if (i % 2 != 0 ){
      array.push(collection[i]);
    }

  }
  for (let item  of array) {
    if (item % 2 == 0){
      oushu.push(item);
    }
  }
  if (oushu == ''){
    result.push(0);
  }else {
    result = aver(oushu);
  }
return result ;
};
module.exports = even_group_calculate_average;
