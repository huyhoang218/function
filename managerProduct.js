let arrayListProduct = ['Sony Xperia', 'Samsung Galaxy', 'Nokia6', 'Xiaomi Redmi Note 4', 'Apple iphone', 'Oppo']
let data = ''
function displayProduct(arrayListProduct){
    for (let i = 0; i < arrayListProduct.length; i++) {
        data += i
        for (let j = 0; j < 3; j++) {
            data += arrayListProduct[i]
        }
    }
    return data
}
