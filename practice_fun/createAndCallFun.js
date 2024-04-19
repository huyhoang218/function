function processConfirm(answer){
    let result = ''
    if(answer){
        result = 'Chung ta se choi mot van co hay'
    }else {
        result = 'Co le de sau'
    }
    return result
}
let comfirmAnswer = confirm('Chung ta se choi mot tro choi')
let theAnswer = processConfirm(comfirmAnswer)
alert(theAnswer)