//NO BORRAR, animación de carga
window.addEventListener("load", function() {
    const LOADER = document.querySelector(".loader");
    LOADER.className += ' hidden';
});


export default class App{

//Formulas de interpolación
interpolacionLineal(x,x0,fx0,x1,fx1){
    let fxinterpolado= fx0 + ((fx1-fx0)/x1-x0)(x-x0);
    return fxinterpolado;

}

obtenerError(fxreal,fxinterpolado){
    if(fxreal!==0){
        let errorVerdadero= fxinterpolado-fxreal;
        let errorRelativoPorcentual= (errorVerdadero/fxreal)(100);
        return errorRelativoPorcentual;
    }
}

interpolacionCuadratica(x,x0,fx0,x1,fx1,x2,fx2){
    let b0=fx0;
    let b1=(fx1-fx0)/(x1-x0);
    let b2=(((fx2-fx1)/x2-x1)-((fx1-fx0)/x1-x0))/(x2-x0);
    return b0+(b1)(x-x0)+(b2)(x-x0)(x-x1);
}

interpolacionLagrange1erOrden(x,x0,fx0,x1,fx1){
    return ((x-x1)/(x0-x1))(fx0)+((x-x0)/(x1-x0))(fx1);
}

interpolacionLagrange2doOrden(x,x0,fx0,x1,fx1,x2,fx2){
    return ((x-x1/x0-x1)(x-x2/x0-x2))(fx0)+((x-x0/x1-x0)(x-x2/x1-x2))(fx1)+((x-x0/x2-x0)(x-x1/x2-x1))(fx2);
}



}


let app= new App();

console.log(interpolacionLineal(6,0,5,14,7,22));