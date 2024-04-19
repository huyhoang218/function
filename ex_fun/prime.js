function isPrime(number){
    for (let i = 2; i < Math.sqrt(number); i++) {
        if (number % i === 0){
            return false
        }
    }
    return true
}
let num = +prompt('Nhap so nguyen to can kiem tra')
if (isPrime(num)) alert(num + ' la so nguyen to')
else alert(num + ' khong la so nguyen to')