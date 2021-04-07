//NO BORRAR, animación de carga
window.addEventListener("load", function() {
    const LOADER = document.querySelector(".loader");
    LOADER.className += ' hidden';
});


export default class App{

//Formulas de interpolación
interpolacionLineal(x,fxreal,x0,fx0,x1,fx1){
    let fxinterpolado= fx0 + ((fx1-fx0)/x1-x0)(x-x0);
    if(fxreal!==0){
        let errorVerdadero= fxinterpolado-fxreal;
        let errorRelativoPorcentual= (errorVerdadero/fxreal)(100);
        return errorRelativoPorcentual;
    }
    return fxinterpolado;

}
}

let app= new App();

console.log(interpolacionLineal(6,0,5,14,7,22));