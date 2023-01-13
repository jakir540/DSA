let num=[-1,0,3,5,9,10];

function BinarySearch(nums,target){
    let start = 0;
    let end = num.length-1
    while(start<=end){
        let mid =Math.floor((start+end)/2);
        if (nums[mid]===target) {
            return mid;
        }
        else if(nums[mid] < target){
            start=mid+1;
            
        }else{
            end=mid-1
        }
    }
    return -1
}

console.log(BinarySearch(num,-1));