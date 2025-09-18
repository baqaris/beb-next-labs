function isPalindrome(n){

const somthing = String(n);
const reversed = somthing.split("").reverse().join("");
return somthing === reversed;

}

console.log(isPalindrome(12));