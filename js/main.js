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
/*
FancyGCD
*/
function FancyGCD(a, b) {
  if(b === 0) { return a; }
  else {
    return FancyGCD(b, a%b);
  }
}

console.log('4I. FancyGCD : '+ FancyGCD(69,33));
//===============================================================================
/*
5. remove Duplicate from Sorted array
*/
function removeDuplicate(arr) {
  if(arr.length <= 1) {
    return arr;
  }
  for(var i = 0; i < arr.length; i++) {
    if(arr[i] === arr[i+1]) {
      arr.splice(i,1);
      i = i - 1;
    }
  }
  return arr;

}
console.log('5. removeDuplicate "sorted" : ' + removeDuplicate([1,1,3,3,3,4,5,5,6,7,7]));

  //===============================================================================
/*
6. remove Duplicate from UnSorted array
*/
function removeDuplicateTwo(arr) {
  var hash = {};
  var outArray =[];
  var elm;
  
  for(var i = 0; i < arr.length; i++) {
    elm = arr[i];
    if(!hash[elm]) {
      outArray.push(elm);
      hash[elm] = true;
    }
  }
  return outArray;
}
console.log('6. removeDuplicate "UnSorted" : ' + removeDuplicateTwo([1,3,3,3,1,5,6,7,8,1]));
//===============================================================================
/*
7. merge two sorted array
*/
function mergeArraies(arr1, arr2) {
  var a = 0, b = 0, result = [];
  
  while(a < arr1.length && b < arr2.length) {
    if(arr1[a] <= arr2[b]) {
      result.push(arr1[a]);
      a++;
    } else {
      result.push(arr2[b]);
      b++;
    }
  }
  while(a < arr1.length) {
    result.push(arr1[a]);
    a++;
  }
  while(b < arr2.length) {
    result.push(arr2[b]);
      b++;
  }
  return result;
}

console.log('7. mergeTwoArraies : ' + mergeArraies([1,3,5,7,9], [0,2,4,6,8,10]));

//===============================================================================