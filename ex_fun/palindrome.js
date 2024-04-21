//Đệ quy
function isPalindrome(arr){
    let length = arr.length
    if(length === 1) return true
    if(length === 2) return arr[0] === arr[1]
    if(arr[0] === arr[length - 1]){
        return isPalindrome(arr.slice(1, length - 1))
    }
    return false
}
let array = []
array = prompt('Enter the word to check')
if(isPalindrome(array)) console.log('Array is palindrome')
else console.log('Array is not palindrome')

//Cách2
// function isPalindrome(arr){
//     let length = Math.floor(arr.length/2)
//     for (let i = 0; i < length; i++) {
//         if(arr[i] !== arr[arr.length - i - 1]){
//             return false
//         }
//     }
//     return true
// }
// let array = []
// array = prompt('Enter the word to check')
// if(isPalindrome(array)) console.log("array is palindrome")
// else console.log("array is not palindrome")
