// finding prime number program
// check prime number
let n = prompt('please enter the number you want to check\n');

let isPrimeNumber = true;
for (let i=2;i<n;i++){
   if(n%i===0){
       isPrimeNumber = false;
   }
}

if(isPrimeNumber === true){
    console.log(`${n} is a prime number`)
}else{
    console.log(`${n} is not a prime number`)
}

// palindrom number
let factorial=1221
let s = factorial%100
let x=s%10;
let y = x*100+s

if(y===factorial){
console.log('number is pallindrom');
}else{
    console.log('number is not a pallindroeme')
}
