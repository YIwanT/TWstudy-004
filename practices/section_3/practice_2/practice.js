function includes(collection, ch ){
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
    let count = item.count
    if (includes(object_b.value, item.key)){
      count = count - parseInt(count / 3) ;
    }
    result.push({key: item.key , count: count});
  }
  return result ;
}

module.exports = create_updated_collection;
