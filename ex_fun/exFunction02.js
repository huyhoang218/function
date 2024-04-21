//Bài 1: Viết hàm tính bình phương của một số bất kỳ được đưa vào. Gọi hàm vừa xây dựng được.
// function getSquare(num){
//     return num * num
// }
// let number = +prompt('Enter a number')
// document.write(getSquare(number))

//Bài 2: Viết hàm tính diện tích, hàm tính chu vi hình tròn. Gọi hàm vừa xây dựng được
// function getAcreageCircle(radius){
//     return 3.14 * radius * radius
// }
// function getPerimeterCicrcle(radius){
//     return 2 * 3.14 * radius
// }
// let inputRadius = +prompt('Enter the radius of the circle')
// document.writeln('Acreage: ' + getAcreageCircle(inputRadius))
// document.write('Perimeter: ' + getPerimeterCicrcle(inputRadius))

//Bài 3: Viết hàm tính giai thừa của một số nguyên bất kỳ được đưa vào. Gọi hàm vừa xây dựng được.
// function factorial(num){
//     if(num === 0) return  1
//     return num * factorial(num - 1)
// }
// let number = +prompt('Enter a number')
// document.write(factorial(number))

//Bài 4: Viết hàm kiểm tra xem ký tự nhập vào có phải là ký tự số không. Nếu là ký tự số hàm trả về true, ngược lại trả về false.
// function checkChar(char){
//     if (isNaN(char)) return false
//     else  return true
// }
// let inputChar = prompt('Enter characters')
// if (checkChar(inputChar)) alert(inputChar + ' is numeric characters')
// else alert(inputChar + ' is not numeric characters')

//Bài 5: Viết hàm nhận vào 3 số nguyên bất kỳ, trả về số nguyên có giá trị nhỏ nhất.
// function checkNum(num1, num2, num3) {
//     let min = num1
//     if (num2 < min) min = num2
//     if (num3 < min) min = num3
//     return min
// }
// let number1 = +prompt('Enter the first number')
// let number2 = +prompt('Enter the second number')
// let number3 = +prompt('Enter the third number')
// document.write(checkNum(number1,number2,number3))

//Bài 6: Viết hàm nhận vào một số, kiểm tra xem nếu số đưa vào có phải là nguyên dương không. Nếu là nguyên dương trả về true, ngược lại trả về false.
// function checkNumber(num){
//     if(num >= 0) return true
//     else return false
// }
// let number = +prompt('Enter a number')
// if(checkNumber(number)) document.write(number + ' >= 0')
// else document.write(number + ' < 0')

//Bài 7: Viết hàm truyền vào 2 số nguyên bất kì, thực hiện đổi chỗ hai số nguyên đó.
// function swap(num1, num2){
//     return [num2, num1]
// }
// let number1 = +prompt('Enter the first number')
// let number2 = +prompt('Enter the second number')
//
// console.log(swap(number1,number2))

//Bài 8: Viết hàm truyền vào mảng số nguyên bất kỳ, sau đó đảo ngược mảng số nguyên đó.
// function swapArray(arr){
//     return  arr.reverse()
// }
// function enterArray(arr, length){
//     for (let i = 0; i < length; i++) {
//         arr[i] = +prompt('index ' + i)
//     }
// }
// let lengthArray = +prompt('Enter the length of the arrray')
// let array = []
// enterArray(array, lengthArray)
// swapArray(array)
// console.log(array)

//Bài 9: Viết hàm truyền vào một mảng ký tự, và một ký tự bất kỳ, kiểm tra xem ký tự bất kỳ đó có nằm trong mảng không.
// Nếu có trả về số lần xuất hiện của ký tự đó, nếu không trả về -1.
// function checkCharInArray(arr, char){
//     let count = 0
//     for (let i = 0; i < arr.length; i++) {
//         if(arr[i] === char){
//             count++
//         }
//     }
//     if (count === 0) return -1
//     else return count
// }
// function enterArray(arr, length){
//     for (let i = 0; i < length; i++) {
//         arr[i] = prompt('index ' + i)
//     }
// }
// let lengthArray = +prompt('Enter the length of the array')
// let array = []
// let character = prompt('Enter a character')
// enterArray(array, lengthArray)
// console.log(checkCharInArray(array, character))