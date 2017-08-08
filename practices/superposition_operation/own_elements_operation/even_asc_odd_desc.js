'use strict';
function oushusort(collection) {
  let swap = 0 ;
  for (var i = 0; i < collection.length;
       i++
  ) {
    for (var j = 0; j < collection.length; j++) {
      if (collection[i] < collection[j]){
        swap = collection[j];
        collection[j] = collection[i];
        collection[i] = swap ;
      }

    }

  }
}
function jishusort(collection) {
  let swap = 0 ;
  for (var i = 0; i < collection.length;
       i++
  ) {
    for (var j = 0; j < collection.length; j++) {
      if (collection[i] > collection[j]){
        swap = collection[j];
        collection[j] = collection[i];
        collection[i] = swap ;
      }

    }

  }
}
var even_asc_odd_desc = function(collection) {
  let result = [];
  let jishu = [];
  let oushu = [];
  for (let item of collection) {
    if (item % 2 == 0) {
      oushu.push(item);

    }
    else {
      jishu.push(item);
    }
  }
  oushusort(oushu);
  jishusort(jishu);
  for (let item of oushu) {
    result.push(item);
  }
  for (let item of jishu) {
    result.push(item);
  }

return result ;
};
module.exports = even_asc_odd_desc;
