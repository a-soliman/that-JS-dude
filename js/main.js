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
/*
8. swap number without temp
*/
function swap(a,b) {
  b = b - a;
  a = a + b;
  b = a - b;
  
  return [a, b];
}

console.log('8. swap inplace : ' + swap(5,3));
//============================================--===================================
/*
9. string reverse
*/
function reverseStr(str) {
  if(str.length <= 1) {
    return str;
  }
  var newStr = '';
  for(var i = str.length-1; i >= 0; i--) {
    newStr += str[i];
  }
  return newStr;
}
console.log('9. reverseStr : ' + reverseStr('Have a nice day'));

//========================================
// string reverse "clean"

function reverseStrTwo(str) {
  return str.split('').reverse().join('');
}
console.log('9I. reverseStr "clean" :' + reverseStrTwo('Have a nice day'));

//========================================
// as an extension
String.prototype.reverse = function() {
  if(!this || this.length < 2 ) {
    return this;
  }
  
  return this.split('').reverse().join('');
}
console.log('9II. reverseStr "extension" : ' + 'abc'.reverse())
//===============================================================================
/*
10. reverse words
*/
function reverseWords(str) {
  var revStr = [];
  var wordLen = 0;
  
  for(var i = str.length-1; i >= 0; i--) {
    if(str[i] === ' ' || i === 0) {
      if(i === 0) {
        revStr.push(' ');
      }
      revStr.push(str.substr(i, wordLen + 1));
      wordLen = 0;
    } else {
      wordLen++;
    }
  }
  return revStr.join('')

}

console.log('10. reverseWords : '+ reverseWords('Have a nice day'))

//========================================
//========================================
//cleaner method
function reverseWordsTwo(str) {
  return str.split(' ').reverse().join(' ')
}
console.log('10I. reverseWords "clean" : ' + reverseWordsTwo('Have a nice day'))

//===============================================================================
/*
11. First non repeating char
*/
function firstNonRepeatedChar(str) {
  var hash = {};
  var len = str.length;
  
  for(var i = 0; i < len; i++) {
    if(hash[str[i]]) {
      hash[str[i]]++;
    } else {
      hash[str[i]] = 1;
    }
  }
  for(var j in hash) {
    if(hash[j] === 1) {
      return j;
    }
  }
  return null;
}
console.log('11. firstNonRepeatedChar : ' + firstNonRepeatedChar('the quick brown fox jumps then quickly blow air'));

//===============================================================================
/*
12. remove duplicate char
*/
function removeDuplicateStr(str) {
  var newStr = '';
  
  for(var i = 0; i < str.length; i++) {
    if(str[i] !== str[i+1]) {
      newStr += str[i];
    }
  }
  return newStr;
}
console.log('12. removeDuplicateStr : ' + removeDuplicateStr('aahhmmeedd'));

//===============================================================================
/*
13. check palindrome
*/

function isPalindrome(str) {
  var i = 0;
  var j = str.length-1;
  
  while(i <= j) {
    if(i === Math.floor(str.length /2)) {
      return true;
    }
    else if(str[i] === str[j]) {
      i++;
      j--;
    } else {
      return false;
    }
  }
}

console.log('13. isPalindrome : ' + isPalindrome('madam'))
//========================================
// isPalindromeFancy

function isPalindromeFancy(str) {
  return str === str.split('').reverse().join('')
}
console.log('13I. isPalindromeFancy : ' + isPalindromeFancy('madam'));

//===============================================================================
/*
14. random between 5 to 7
If you have a function that generate random number between 1 to 5 how could u generate random number 1 to 7 by using that function?
*/

function random5() {
  return 1 + Math.floor(Math.random() * 5);
}
function random5to7(){
  return 5 + Math.floor(random5() /5*2);
}

console.log('14. random 5:7 : ' + random5to7())

//===============================================================================

/*
15. missing number
Question: from a unsorted array of numbers 1 to 100 excluding one number, how will you find that number.
*/
var numArray = [];
for(var i = 1; i <= 100; i++) {
  if(i === 50) {
    
  }else {
  numArray.push(i);
  }
}


function missingNum(arr) {
  var sum = 0;
  var actualSum = 0;
  var missing;
  //find the actualSum
  for(var i = 0; i < arr.length; i++) {
    actualSum += arr[i];
  }
  
  //find the sum of 1 to 100;
  for(var i = 1; i <=100; i++) {
    sum += i;
  }
  missing = sum - actualSum;
  return missing;
  
}

console.log('15. missingNum : ' + missingNum(numArray));

//===============================================================================
/*
16. Sum of two
Question: From a unsorted array, check whether there are any two numbers that will sum up to a given number?
*/
function sumOfTwo(arr, target) {
  var hash = {};
  
  for(var i = 0; i < arr.length; i++) {
    if(!hash[target - arr[i]]) {
      hash[arr[i]] = true;
    } else {
      return true;
    }
  }
  return false;
}

console.log('16. sumOfTwo : ' + sumOfTwo([6,4,3,2,1,7], 9));
//===============================================================================
/*
17. Largest Sum
*/

function lagestSum(arr) {
  var largetNum1=  0;
  var largetNum2 = 0;
  
  for(var i = 0; i < arr.length; i++) {
    if(arr[i] > largetNum1) {
      largetNum2 = largetNum1;
      largetNum1 = arr[i];
    } else if(arr[i] > largetNum2) {
      largetNum2 = arr[i];
    }
  }
  return largetNum2 + largetNum1;
}

console.log('17. lagestSum :' + lagestSum([1,2,3,4,5,6,7,8,9,10]))
//===============================================================================
/*
18. Counting Zeros
Question: Count Total number of zeros from 1 upto n?
*/
function countingZeros(n) {
  var count = 0;
  
  while(n > 0) {
    count += Math.floor(n/10);
    n = n / 10;
  }
  return count;
}
console.log('19. countingZeros : ' + countingZeros(2014))
//===============================================================================
/*
19. subString
Question: How can you match substring of a sting?
*/
function matchSubstring(str, subStr) {
  var len = str.length;
  var subLen = subStr.length;
  var i, j = 0;
  
  for(i = 0; i < len; i++) {
    if(str[i] === subStr[j]) {
      if(j === subLen -1) {
        return i - j;
      }
      j++;
    } else {
      j = 0;
    }
  }
  return -1;
}
console.log('19. matchSubstring : ' + matchSubstring('abbcdabbbbbck', 'bbbck'));
//===============================================================================
//subString => on edge cases

function matchSubstringTwo(str, subStr) {
  var strLen = str.length;
  var subLen = subStr.length;
  
  var start = 0, end = subLen -1, dif = end - start;
  
  for(var i = 0; i < strLen; i++) {
    if(str[i] === subStr[start] && str[i + dif] === subStr[end]) {
      start++;
      end--;
      dif -= 2;
      if(start > end) {
        return i + dif;
      }
    } else {
      start = 0;
      end = subLen -1;
      dif = end - start;
    }
  }
  return -1;
}
console.log('19II. matchSubstringTwo : ' + matchSubstringTwo('abbbbbck', 'bbbck'))

//===============================================================================