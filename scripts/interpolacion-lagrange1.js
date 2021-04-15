function calcularLagra1() {
    
    var x0=parseFloat(document.getElementById('x0l').value);
    var fx0=parseFloat(document.getElementById('fx0l').value);
    var x1=parseFloat(document.getElementById('x1l').value);
    var fx1=parseFloat(document.getElementById('fx1l').value);
    var x=parseFloat(document.getElementById('xl').value);
    var fx=parseFloat(document.getElementById('fxl').value);
    var decimales=parseFloat(document.getElementById('decimales2').value);  

    if(decimales !== decimales) {
        decimales = 3;
    }

    fx=(((x-x1)/(x0-x1))*(fx0))+(((x-x0)/(x1-x0))*(fx1));

    let res = this.truncateDecimals(fx, decimales);
    document.getElementById('fxl').value=res;

}

function reiniciarLagra1() {
    document.getElementById('x0l').value='';
    document.getElementById('fx0l').value='';
    document.getElementById('x1l').value='';
    document.getElementById('fx1l').value='';
    document.getElementById('fxl').value='';
    document.getElementById('xl').value='';
    document.getElementById('decimales2').value='';
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