//题目：给出2*n + 1 个的数字(数组)，除其中一个数字之外其他每个数字均出现两次，找到这个数字。
function find(collection, num) {
  for (let item of collection) {
    if (item.key == num) {
      return item ;
    }
  }
  return null ;
}

function findnumber(colletcion
) {
  let result ;
  let array = [] ;
  for (let item of colletcion) {
    let obj = find(array, item )
    if (obj) {
      obj.count++;
    }
    else {
      array.push({key:item, count: 1});
    }
  }
  for (let item of array) {
    if (item.count == 1) {
      result = item.key ;
    }
  }
  console.log(result);
};


findnumber([1,1,2,2,3,3,4,4,5,5,6]);
