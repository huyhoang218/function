function getMinArray(arr){
    let min = arr[0]
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min){
            min = arr[i]
        }
    }
    return min
}

let newArray = [3,2,4,-1,3,5,6,76,46,6]
let min = getMinArray(newArray)
console.log(min)