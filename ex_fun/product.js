let productList = [
    'Sony Xperia',
    'Samsung Galaxy',
    'Nokia',
    'Iphone 15',
    'Oppo',
    'Xiaomi',
    'Huawei'
]
function showAllProduct() {
    let data = ''
    for (let i = 0; i < productList.length; i++) {
        data += `<tr>
        <td>${productList[i]}</td>
        <td><input type="button" value="Edit"></td>
        <td><input type="button" value="Delete"></td>
    </tr>`
    }
    document.getElementById('list').innerHTML = data
    document.getElementById('number').innerHTML = productList.length + ' products'
}
showAllProduct()

function addNewProduct(){
    let newProduct = document.getElementById('newProduct').value
    productList.push(newProduct)
    showAllProduct()
    document.getElementById('newProduct').value = ''
    document.getElementById('newProduct').focus()
}

function editProduct(){
    
}

function deleteProduct(){

}
