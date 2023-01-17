
//brute force tehnique............

// let arr=[10,20,30,40,50,60,70,80,90];

// for (let i = 0; i < arr.length; i++) {


//     for (let j = 0; j < i; j++) {
//         let temp=arr[i]
//         arr[i]=arr[j];
//         arr[j]=temp;
        
//     }
    
// }
// console.log(arr);

//............two pointer approch...............

arr=[10,20,30,40,50,60,70,80,90];

let last=arr.length-1;
for(let i=0,j=last; i<j; i++,j--){
    let temp=arr[i]
    arr[i]=arr[j];
    arr[j]=temp;
}
console.log(arr);


