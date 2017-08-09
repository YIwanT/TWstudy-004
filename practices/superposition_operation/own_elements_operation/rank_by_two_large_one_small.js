'use strict';
function sortNumber(a,b)
{
  return a - b
}

function rank_by_two_large_one_small(collection){
  //这里写代码。。。

  collection.sort(sortNumber);

  for (var i = 0; i < collection.length; ) {
    let swap = 0 ;
   if (collection[i] < collection[i + 2]){
     swap = collection[i + 2];
     collection[i + 2] = collection[i];
     collection[i] = swap ;
   }
   i += 3

  }
  for (var i = 0; i < collection.length; ) {
    let swap = 0 ;
    if (collection[i] > collection[i + 1]){
      swap = collection[i + 1];
      collection[i + 1] = collection[i];
      collection[i] = swap ;
    }
    i += 3

  }

  return collection;
}
module.exports = rank_by_two_large_one_small;
