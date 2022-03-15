//prime factorization using arrays
let readline = require("readline-sync");
let n = readline.question("Enter the number: ");
function primeFactors(n){
    var factors = [], 
        divisor = 2;
  
    while(n>2){
      if(n % divisor == 0){
         factors.push(divisor); 
         n= n/ divisor;
      }
      else{
        divisor++;
      }     
    }
    return factors;
  }
  console.log(primeFactors(n));