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
/*
2. Prime Factors
*/

function primeFactors(n){
  var factors = [];
  var divisor = 2;
  
  while(n > 2) {
    if(n % divisor === 0) {
      factors.push(divisor);
      n = n / divisor;
    }else {
      divisor++;
    }
  }
  if(n === 2) {
    factors.push(divisor);
  }

  return factors;
}

console.log('2. primeFactors : ' + primeFactors(69));
//===============================================================================
/*
3. Fibonacci
*/
function nthFibonacci(n) {
  if(n <=1) {
    return n;
  }
  else {
    return nthFibonacci(n-1) + nthFibonacci(n-2);
  }
}

console.log('3. nthFibonacci : ' + nthFibonacci(6));
//===============================================================================
/*
4. Greatest Common Divisor
*/
function GCD(a, b) {
  var divisor = 2;
  var gDivisor;
  
  if(a < 2 || b < 2) { return 1; }
  
  while(a >= divisor && b >= divisor) {
    if(a % divisor === 0 && b % divisor === 0) {
      gDivisor = divisor;
    }
    divisor++;
  }
  return gDivisor;
}

console.log('4. GreatestCommonDivisor : ' + GCD(14, 21));
//===============================================================================