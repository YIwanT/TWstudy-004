'use strict';

function get_letter_interval_2(number_a, number_b) {
  //在这里写入代码
  let result = [] ;
  
 var collection_a = ['t', 'u', 'v', 'w', 'x',
    'y', 'z', 'aa', 'ab', 'ac', 'ad', 'ae', 'af', 'ag',
    'ah', 'ai', 'aj', 'ak', 'al', 'am', 'an', 'ao', 'ap',
    'aq', 'ar', 'as', 'at', 'au', 'av', 'aw', 'ax', 'ay',
    'az', 'ba'
  ];
 
 if (number_a  > number_b){
    for (let i = number_a ; i >= number_b ;i--){
        
            result.push(collection_a[i-20]);
            
         
    } 
  }
  for (let i = number_a ; i <= number_b ;i++){
       
            result.push(collection_a[i-20]); 
    }
  return result ;
}

module.exports = get_letter_interval_2;

