const isPrime = num => {
    let count = 2;
    while(count < (num / 2)+1){
       if(num % count !== 0){
          count++;
          continue;
       };
       return false;
    };
    return true;
 };
 const primeBetween = (a, b) => {
    let count = 0;
    for(let i = Math.min(a, b); i <= Math.max(a, b); i++){
       if(isPrime(i)){
        console.log(i)

          count++;
          
       };
    };
    // console.log(i)

    // return count;
 };
 console.log(primeBetween(2, 21));
 