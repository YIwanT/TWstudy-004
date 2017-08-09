'use strict';

function spilt_to_zero(number, interval) {
  //在这里写入代码
  let result = [] ;
  let array = [] ;
  let intnumber = number * 10;
  let intinterval = interval * 10 ;
  let  num = intnumber / intinterval ;
  result.push(intnumber)
  for (var i = 0; i < num; i++) {
    intnumber =  intnumber - intinterval ;
    result.push(intnumber);
  }
  if (intnumber > 0){
    intnumber = intnumber - intinterval ;
    result.push(intnumber);
  }
  for (let item of result) {
    array.push(item / 10 );
  }
  return array ;
}

module.exports = spilt_to_zero;
