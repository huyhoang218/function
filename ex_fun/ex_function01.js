//Bài 1: Tạo hàm alertMessage() hiển thị hộp thoại chứa chuỗi  "Xin chao". Gọi hàm từ trong phần <body> của trang web.
function alertMessage(){
    alert('Xin Chao')
}

//Bài 2: Tạo hàm nhận vào một đối số dạng số, tăng giá trị đối số đó lên 1 và trả lại giá trị cho lời gọi hàm.
// Gọi hàm từ trong phần <body> của trang web và hiển thị kết quả lên màn hình.
function increaseValue(num){
    return num + 1;
}
let number = +prompt('Nhap so')
document.getElementById('value').innerHTML = increaseValue(number)

//Bài 3: Tạo hàm nhận vào hai tham số. Nếu giá trị của tham số thứ nhất lớn hơn tham số thứ hai, hiển thị hộp thoại thông báo cho người dùng.
// Nếu giá trị của tham số thứ nhất nhỏ hơn hoặc bằng tham số thứ hai, trả về tổng của hai tham số.
function getNumber(num1, num2){
    if(num1 > num2) alert('Number 1 > number 2')
    else return num1 + num2
}
let number1 = +prompt('Enter the first number')
let number2 = +prompt('Enter the second number')
let sum = getNumber(number1, number2)
alert('The sum of two numbers is: ' + sum)

//Bài 4: Thêm các hàm alert() vào những vị trí thích hợp trong đoạn mã sau để bạn có thể nhìn thấy giá trị của biến result trước và sau lời gọi hàm.
// Đoạn mã có dạng như sau:
function addNumbers() {
    firstNum = 4;
    secondNum = 8;
    result = firstNum + secondNum;
    return result;
}

result = 0;
alert('before calling the function ' + result)
result = addNumbers();
alert('after calling the function ' + result)

// Bài 5
function getArr(nameStar){
    for (let i = 0; i < star.length; i++) {
        if (nameStar === star[i]) return true
    }
    return false
}
let star = ['Polaris', 'Aldebaran', 'Deneb', 'Vega', 'Altair', 'Dubhe', 'Regulus']
let star2 = ['Ursa Minor', 'Tarurus', 'Cygnus', 'Lyra', 'Aquila', 'Ursa Major', 'Leo']
let inputNameStar = prompt('Nhập tên ngôi sao')
let indexStar2 = star.indexOf(inputNameStar)
if(getArr(inputNameStar)){
    alert(star2[indexStar2])
}else {
    document.write('Không tìm thấy chòm sao tương ứng')
}

