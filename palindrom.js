// check the  palindrom 


function palindrom(str){
let last=str.length-1;
   for(let i=0,j=last;i<j; i++,j--){
    if (str[i]==str[j]) {
        return true
    }
   }
   return false;
}
let result=palindrom('racecar');
// let result1=palindrom('racecar');


console.log(result);



// find the first number of palindrom is?


function palindromArr(arr){
    let count=0
    for (let i = 0; i < arr.length; i++) {
        if(palindrom(arr[i])){
            // return arr[i];
            count++;
        }
        
    }
    console.log(count);
    return "";
}

let returnValue=palindromArr(['mama','mom','racecar','papa','wow','aba','baba'])
console.log(returnValue);