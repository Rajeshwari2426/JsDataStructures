let n = new Array(10);
for (let i = 0; i < n.length; i++) {
n[i] = Math.floor(Math.random() * 999) ;
console.log(n[i]);
}

function secondSmallest(randomArr)
{
   firstNum = randomArr[0];
   secondNum = randomArr[1];
   for (let i = 0; i < 10; i++) {
       if (randomArr[i] < firstNum) {
           //Swap the numbers
           secondNum = firstNum;
           firstNum = randomArr[i];
       }
       if (randomArr[i] < secondNum && randomArr[i] != firstNum) {
           //Swap the numbers
           secondNum = randomArr[i]
       }
   }
   console.log("Second Minimum number is: "+secondNum);
}
function secondLargest(randomArr) {
   firstNum = randomArr[0];
   secondNum = randomArr[1];
   for (let i = 0; i < 10; i++) {
       if (randomArr[i] > firstNum) {
           //Swap the numbers
           secondNum = firstNum;
           firstNum = randomArr[i];
       }
       if (randomArr[i] > secondNum && randomArr[i] != firstNum) {
           //Swap the numbers
           secondNum = randomArr[i]
       }
   }
   console.log("second large number is: "+secondNum);
}
secondLargest(n);
secondSmallest(n);
