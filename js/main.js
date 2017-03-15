/*
1. verify a prime number.
*/
function isPrime(n) {
  var divisor = 3;
  var limit = Math.sqrt(n);
  
  if(n === 2 || n === 3) {
    return true;
  } 
  if(n % 2 === 0) {
    return false;
  }
  while(divisor <= limit) {
    if(n % divisor === 0) {
      return false;
    } else {
      divisor +=2;
    }
  }
  return true;
}

console.log('1. isPrime : ' + isPrime(11));

//===============================================================================