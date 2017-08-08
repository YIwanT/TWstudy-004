function match(collection, ch){
  for (let item of collection){
    if (item === ch ){
      return true ;
    }
  }
  return false ;
}
function find(collection, ch){
  for (let item of collection){
    if (item.key === ch){
      return item ;
    }
  }
  return null ;
}
function create_updated_collection(collection_a, object_b) {
  //在这里写入代码
  let result = [] ;
  let summary = [];
  for (let item of collection_a){
    let obj = find(summary, item)
    if (obj){
      obj.count++;
    }else {
      summary.push({key: item, count: 1});
    }
  }

  for (let item of summary){
    let count = item.count ;
    if (match(object_b.value, item.key)){
      count = count - parseInt(count / 3) ;
    }
    result.push({key: item.key, count: count});
  }
  return result ;

}

module.exports = create_updated_collection;
