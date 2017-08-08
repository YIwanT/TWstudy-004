function find (collection, ch){
  for (let item of collection){
    if (item.key === ch ){
      return item;
    }
  }
  return null ;
}

function summarize (collection){
  let result = [];
  for (let item of collection){
    let obj = find(result, item);
    if (obj){
      obj.count++;

    }else{
      result.push({key: item, count: 1});
    }

  }
  return result ;
}

function push(array, key, count ){
  for (let i = 0 ; i < count ; i++){
    array.push(key);
  }
}

function split(item){
  let array = item.split("-");
  return {key: array[0], count: parseInt(array[1])};
}

function expand(collection){
  let array = [] ;
  for (let item of collection){
    if (item.length === 1){
      array.push(item);
    }else {
      let {key, count } = split(item);
      push(array, key, count);
    }
  }
  return array ;
}

function include(collection, ch){
  for (let item of collection ){
    if (item === ch){
      return true ;
    }
  }
  return false ;
}
function discount(collection, promotionItems){
  let result = [] ;
  for (let item of collection){
    let count = item.count ;
    if (include(promotionItems, item.key)){
      count = count - parseInt(count / 3);
    }
    result.push({key: item.key, count: count});
  }
  return result ;
}

function create_updated_collection(collection_a, object_b) {
  //在这里写入代码
  let expandedArray = expand(collection_a);
  let summarizeArray = summarize(expandedArray);
  return discount(summarizeArray, object_b.value);
}

module.exports = create_updated_collection;
