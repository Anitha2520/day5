
//1. Do the below programs in anonymous function & IIFE
//3.Do the below programs in arrow functions
 
//a. Print odd numbers in an array
//Anonymous function
var odd=function(arr){
    var odd = [];
    for(var i=0;i<arr.length;i++){
     if(arr[i]%2!=0){
         odd.push(arr[i]);
     }
    
    } 
    return odd;
}
var arr12=[1,2,3,4,5,6,7,8,9,10];
console.log(odd(arr12));


//IIFE
(function odd(arr){
    var odd = [];
    for(var i=0;i<arr.length;i++){
     if(arr[i]%2!=0){
         odd.push(arr[i]);
     }
    
    }
    console.log(odd);
})(arr12);

//3.arrow functions


var oddarrow = (arr) => {
    var odd = [];
    for(var i=0;i<arr.length;i++){
        if(arr[i]%2!=0){
         odd.push(arr[i]);
        }
    } 
    return odd;

}
console.log(oddarrow(arr12));


//b. Convert all the strings to title caps in a string array
//Anonymous function
var capitalizefirstletter=function(arr){
    var res = [];
    for(var i=0;i<arr.length;i++){
        res.push(arr[i].charAt(0).toUpperCase() + arr[i].slice(1));
    } 
    return res;
}
var carr=["rose","lotus","lilli","jasmin"];
console.log(capitalizefirstletter(carr));

//IIFE
(function capitalizefirstletter(arr){
     var res = [];
    for(var i=0;i<arr.length;i++){
        res.push(arr[i].charAt(0).toUpperCase() + arr[i].slice(1));
    } 
    console.log(res);
})(carr);

//3.arrow functions
var arrowcapitalizefirstletter = (arr) => {
     var res = [];
    for(var i=0;i<arr.length;i++){
        res.push(arr[i].charAt(0).toUpperCase() + arr[i].slice(1));
    } 
    return res;
}
console.log(arrowcapitalizefirstletter(carr));

//c.Sum of all numbers in an array
//Anonymous function
var sumofallnumbers=function(arr){
    var sum = 0;
    for(var i=0;i<arr.length;i++){
         sum = sum + arr[i];
    }
    return sum;   
}
var sumnumbers = [12,13,14,25,36];
console.log(sumofallnumbers(sumnumbers));

//IIFE
(function sumofallnumbers(arr){
    var sum = 0;
    for(var i=0;i<arr.length;i++){
         sum = sum + arr[i];
    }
    console.log(sum); 
})(sumnumbers);

//3.Arrow function
var arrowsumofallnumbers = (arr) => {
    var sum = 0;
    for(var i=0;i<arr.length;i++){
         sum = sum + arr[i];
    }
    return sum;

}
console.log(arrowsumofallnumbers(sumnumbers));

//d. Return all the prime numbers in an array
//Anonymous function
const array = [1,2,3,4,5,6,7,8,9,10,23];
function isPrime(num) {
   
  for (let start = 2; num > start; start++) {
    if (num % start == 0) {
      return false;
    }
  }
  return num > 1;
}
console.log(array.filter(isPrime));

//3.arrow functions
numArray1 = array.filter((num) => {
  for (let start = 2; num > start; start++) {
    if (num % start == 0) {
      return false;
    }
  }
  return num > 1;
});
console.log(numArray1);


//e. Return all the palindromes in an array
//Anonymous function
function ispolidrome(parray){
    var arr = [];
    var str = parray.slice(0);
    var pal = str.toString().split("").reverse().join("").split(",");
    
    for (let i = 0; i < parray.length; i++) {
        for (let k = 0; k < pal.length; k++) {
            if (parray[i] == pal[k]) {
             arr.push(parray[i])
            }
        }
    }
    return arr;
    
}

var parray = [1221, "racecar",1222,"cannot",1331,1234];
console.log(ispolidrome(parray));

//IIFE
(function ispolidrome(parray){
     var arr = [];
    var str = parray.slice(0);
    var pal = str.toString().split("").reverse().join("").split(",");
    
    for (let i = 0; i < parray.length; i++) {
        for (let k = 0; k < pal.length; k++) {
            if (parray[i] == pal[k]) {
             arr.push(parray[i])
            }
        }
    }
    console.log(arr);
   
})(parray);

//3.Arrow function
var arrowispolidrome = (parray) => {
    var arr = [];
    var str = parray.slice(0);
    var pal = str.toString().split("").reverse().join("").split(",");
    
    for (let i = 0; i < parray.length; i++) {
        for (let k = 0; k < pal.length; k++) {
            if (parray[i] == pal[k]) {
             arr.push(parray[i])
            }
        }
    }
    return arr;
    
}

console.log(arrowispolidrome(parray));

//f.Return median of two sorted arrays of the same size.
//Anonymous function
function median(a, b) {
    
    //Sort the array
    let c = [...a, ...b].sort((a, b) => a - b);
   
    //Get the floor value
    const half = c.length / 2 | 0;
    
    //If odd then return middle element
    if (c.length % 2) return c[half];
}

const arrays1 = [1, 12, 15, 26, 38];
const arr2 = [2, 13, 17, 30, 45, 47];
console.log(median(arrays1, arr2));

//IIFE

(function median(a, b){
    
  let c = [...a, ...b].sort((a, b) => a - b);
   
    //Get the floor value
    const half = c.length / 2 | 0;
    
    //If odd then return middle element
    if (c.length % 2) {console.log( c[half])};
      
})(arrays1, arr2);

//g. Remove duplicates from an array
//Anonymous function
function remdup(arr) {
    var rarray = [];
    for(let i=0; i < arr.length; i++){  
        if(rarray.indexOf(arr[i]) === -1) {  
            rarray.push(arr[i]);  
        }  
    }
    return rarray;
}

var rarr = [10,20,30,40,10,20];
console.log(remdup(rarr));

//IIFE
(function remdup(arr){
    var rarray = [];
    for(let i=0; i < arr.length; i++){  
        if(rarray.indexOf(arr[i]) === -1) {  
            rarray.push(arr[i]);  
        }  
    }
    console.log(rarray);
})(rarr);

//h. Rotate an array by k times
//Anonymous function
function rotatearray(nums, k) {

  for (let i = 0; i < k; i++) {
      nums.unshift(nums.pop());
  }

  return nums;
}

var nums = [1, 2, 3, 4, 5];
var k = 2;
console.log(rotatearray(nums,k));

//IIFE

var nums1 = [1, 2, 3, 4, 5];
var k1 = 2;
(function rotatearray(nums, k){
   // console.log(k)
    for (let i = 0; i < k; i++) {
      nums.unshift(nums.pop());
  }

  console.log(nums);
})(nums1,k1);



  //end-here
