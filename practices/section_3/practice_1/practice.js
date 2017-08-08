function include(collection, ch){
  for (let item of collection ){
    if (item === ch ){
      return true ;
    }
  }
  return false ;
}
function create_updated_collection(collection_a, object_b) {
  //在这里写入代码
  let result = [] ;
  for (let item of collection_a){
    if (include(object_b.value, item.key)){
      item.count--;
    }
    result.push({key: item.key, count: item.count});
  }
  return result ;
}

module.exports = create_updated_collection;
