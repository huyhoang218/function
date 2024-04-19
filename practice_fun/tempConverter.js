function tempConvert(valNum){
    valNum = document.getElementById('inputF').value
    valNum = parseFloat(valNum)
    document.getElementById('outputC').innerHTML = (valNum - 32)/1.8
}