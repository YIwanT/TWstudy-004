
function array(number) {
  let result = [] ;
  if (number == 0 ){
      result.push(0);
  }
  else if (number == 1){
      result.push(1);
  }else {
    for (var i = 0; i < number; i++) {
      if (i == 0 ){
        result.push(0);
      }
      else  if (i == 1){
        result.push(1);
      }
      else {
        result.push(result[i - 1] + result[i - 2]);
      }
    }
  }
  console.log(result);
}

array(10);


