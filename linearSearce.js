

let arr=[10,20,30,40,50,40,650,85,88,60];

function LinearSearce(arr,target){

    for (let i = 0; i < arr.length; i++) {
        // console.log(arr[i])
        if (arr[i]===target) {
            return{
               "Data is found index":i
            }
        }
        
    }
    return "Data is not found"

}
console.log(LinearSearce(arr,50));