'use strict';
function include(collection, num) {
  for (let item of collection) {
    if (item.key == num){
      return item ;
    }
  }
  return null ;
}
function notfind(collection) {
  let  result = [] ;
  let summary = [] ;
  for (let item of collection) {
    let  obj = include(summary, item);
    if(obj){
      obj.count++;
    }
    else {
      summary.push({key:item,count:1});
    }
  }
  for (let item of summary) {
    if(item.count == 1){
      result.push(item.key);
    }
  }
  return result ;
}
var single_element = function(collection){
let  result = [] ;
let  array = [] ;
  for (var i = 0; i < collection.length;
       i++
  ) {
    if (i % 2 != 0){
      array.push(collection[i]);
    }

  }

  result = notfind(array);
return result  ;
};
module.exports = single_element;
