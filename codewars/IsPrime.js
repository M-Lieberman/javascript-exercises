
function isPrime(num) {
    if (num <= 1) {
      return false;
    }
    // we only need to check up to the square root of num
    // alternatively we can use (i*i <= num) in loop
    const rootNum = Math.sqrt(num);
    for (let i = 2; i <= rootNum; i++) {
      if (num % i == 0) {
        return false;
      }
    }
    return true;
  }
  

