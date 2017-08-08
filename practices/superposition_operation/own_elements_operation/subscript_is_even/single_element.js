'use strict';
function notincludes(collection) {
  let result = [] ;
  for (var i = 0; i < collection.length; i++) {
    for (var j = 0; j < collection.length; j++) {
     if (collection[i] = collection[j]){

     }

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
   if  ( i % 2  != 0){

       array.push(collection[i]);

   }

  }
  console.log(array);
return result = notincludes(array) ;
};
module.exports = single_element;
