'use strict';
var calculate_average = function(collection){
let result = 0;
let  array = [] ;
let sum = 0 ;
  for (var i = 0; i < collection.length; i++) {
    if (i % 2 != 0){
      array.push(collection[i]);
    }

  }
  for (let item of array) {
    sum += item ;
  }
  result = sum / array.length
return  result ;
};
module.exports = calculate_average;
