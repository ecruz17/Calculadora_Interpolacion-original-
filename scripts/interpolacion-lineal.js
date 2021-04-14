function calcularLineal() {

    var x1=parseFloat(document.getElementById('x1').value);
    var y1=parseFloat(document.getElementById('y1').value);
    var x2=parseFloat(document.getElementById('x2').value);
    var y2=parseFloat(document.getElementById('y2').value);
    var x3=parseFloat(document.getElementById('x3').value);
    var y3=parseFloat(document.getElementById('y3').value);
    var decimales=parseFloat(document.getElementById('decimales').value);      

    if(decimales !== decimales) {
        decimales = 3;
    }
        
    y3 = (y1 + (x3-x1)*((y2-y1)/(x2-x1)));
    let res = this.truncateDecimals(y3, decimales);
    document.getElementById('y3').value=res;
    
}

function reiniciarLineal() {
document.getElementById('x1').value='';
document.getElementById('y1').value='';
document.getElementById('x2').value='';
document.getElementById('y2').value='';
document.getElementById('x3').value='';
document.getElementById('y3').value='';
document.getElementById('decimales').value='';
} 

truncateDecimals = function (number, digits) {

var multiplier = Math.pow(10, digits),
adjustedNum = number * multiplier,
truncatedNum = Math[adjustedNum < 0 ? 'ceil' : 'floor'](adjustedNum);

return truncatedNum / multiplier;

};
