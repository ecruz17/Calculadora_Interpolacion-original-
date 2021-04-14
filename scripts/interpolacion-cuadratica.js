function calcularCuadratica() {
    
    var x0=parseFloat(document.getElementById('x0c').value);
    var fx0=parseFloat(document.getElementById('fx0c').value);
    var x1=parseFloat(document.getElementById('x1c').value);
    var fx1=parseFloat(document.getElementById('fx1c').value);
    var x2=parseFloat(document.getElementById('x2c').value);
    var fx2=parseFloat(document.getElementById('fx2c').value);
    var x=parseFloat(document.getElementById('xc').value);
    var fx=parseFloat(document.getElementById('fxc').value);
    var decimales=parseFloat(document.getElementById('decimales1').value);  

    if(decimales !== decimales) {
        decimales = 3;
    }
       

    b0 = fx0;
    b1 = ((fx1-fx0)/(x1-x0));
    b2 = (((fx2-fx1)/x2-x1)-((fx1-fx0)/x1-x0))/(x2-x0);
    fx = b0+(b1)(x-x0)+(b2)(x-x0)(x-x1);

    document.getElementById('fxc').value=fx;

    console.log(fx);
    
   /* let res = this.truncateDecimals(fx, decimales);
    document.getElementById('fxc').value=res; */

         
}

function reiniciarCuadratica() {
    document.getElementById('x0c').value='';
    document.getElementById('fx0c').value='';
    document.getElementById('x1c').value='';
    document.getElementById('fx1c').value='';
    document.getElementById('x2c').value='';
    document.getElementById('fx2c').value='';
    document.getElementById('fxc').value='';
    document.getElementById('xc').value='';
    document.getElementById('decimales1').value='';
} 

/*
truncateDecimals = function (number, digits) {

    var multiplier = Math.pow(10, digits),
    adjustedNum = number * multiplier,
    truncatedNum = Math[adjustedNum < 0 ? 'ceil' : 'floor'](adjustedNum);
    
    return truncatedNum / multiplier;
    
}; */