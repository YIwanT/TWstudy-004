// 题目：将一个正整数分解质因数。例如：输入90,打印出90=2335。
function printnum (num) {
  let result = num + '=' ;
  for (var i = 2; i <= num; ) {
    if (num % i == 0){
      result += i ;
      num = num / i ;

    }else  {
      i++ ;
    }

  }
  console.log(result);

}

printnum(90);
