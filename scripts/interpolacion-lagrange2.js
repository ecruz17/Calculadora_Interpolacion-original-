function calcularLagra2() {
    
    var x0=parseFloat(document.getElementById('x0l2').value);
    var fx0=parseFloat(document.getElementById('fx0l2').value);
    var x1=parseFloat(document.getElementById('x1l2').value);
    var fx1=parseFloat(document.getElementById('fx1l2').value);
    var x2=parseFloat(document.getElementById('x2l2').value);
    var fx2=parseFloat(document.getElementById('fx2l2').value);
    var x=parseFloat(document.getElementById('xl2').value);
    var fx=parseFloat(document.getElementById('fxl2').value);
    var decimales=parseFloat(document.getElementById('decimales3').value);  

    if(decimales !== decimales) {
        decimales = 3;
    }
       
    fx=((((x-x1)/(x0-x1))*((x-x1)/(x0-x2)))*(fx0))+((((x-x0)/(x1-x0))*((x-x2)/(x1-x2)))*(fx1))+((((x-x0)/(x2-x0))*((x-x1)/(x2-x1)))*(fx2))

    /* document.getElementById('fxl2').value=fx;

    console.log(fx); */

    let res = this.truncateDecimals(fx, decimales);
    
    document.getElementById('fxl2').value=res;
         
}

function reiniciarLagra2() {
    document.getElementById('x0l2').value='';
    document.getElementById('fx0l2').value='';
    document.getElementById('x1l2').value='';
    document.getElementById('fx1l2').value='';
    document.getElementById('x2l2').value='';
    document.getElementById('fx2l2').value='';
    document.getElementById('fxl2').value='';
    document.getElementById('xl2').value='';
    document.getElementById('decimales3').value='';
} 


truncateDecimals = function (number, digits) {

    var multiplier = Math.pow(10, digits),
    adjustedNum = number * multiplier,
    truncatedNum = Math[adjustedNum < 0 ? 'ceil' : 'floor'](adjustedNum);
    
    return truncatedNum / multiplier;
    
};

function calcularErrorActivate() {
    document.getElementById('check').onchange = function() {
        document.getElementById('valorReal').disabled = !this.checked;
        document.getElementById('btnErrorP1').disabled = !this.checked;
    };
    
}

function calcularErrorL() {

    var errorP=parseFloat(document.getElementById('errorPorcentual').value);
    var ep=parseFloat(document.getElementById('valorReal1').value);

    errorP = ((this.res-ep)/ep)*100;
    document.getElementById('errorPorcentual').value=errorP;
    
}