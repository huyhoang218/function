function footToMeter(foot){
    return 0.305 * foot
}
function meterToFoot(meter){
    return 3.297 * meter
}
let inputFoot = +prompt('Nhap foot')
let inputMeter = +prompt('Nhap meter')
document.write(inputFoot + ' foot = ' + footToMeter(inputFoot) +' meter')
document.write('<br>')
document.write(inputMeter + ' meter = ' + meterToFoot(inputMeter) +' foot')