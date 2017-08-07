'use strict';

function get_letter_interval(number_a, number_b) {
  //在这里写入代码
  let result = [] ;
  
  var collection_a = ['a', 'b', 'c', 'd', 'e'];
 
 if (number_a  > number_b){
    for (let i = number_a ; i >= number_b ;i--){
        
            result.push(collection_a[i-1]);
            
         
    } 
  }
  for (let i = number_a ; i <= number_b ;i++){
       
            result.push(collection_a[i-1]); 
    }
  return result ;
}

module.exports = get_letter_interval;
