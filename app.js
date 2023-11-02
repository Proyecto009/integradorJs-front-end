const variableDescuento = document.getElementById('categoria');
const resumen = document.getElementById('button-resume');
const borrar = document.getElementById('button-delete');
const inputCantidad = document.getElementById('numero');
const resultado = document.getElementById('valor');

const estudiante = document.getElementById('estudiante-button');
const trainee = document.getElementById('trainee-button');
const junior = document.getElementById('junior-button');


function calcularImporte() {
    if (inputCantidad.value){
        var precio = 200;
        var number = precio * inputCantidad.value;

        let arraysDiscount=[
            (variableDescuento[0].value=Math.floor(number*80)/100),
            (variableDescuento[1].value=Math.floor(number*50)/100),
            (variableDescuento[2].value=Math.floor(number*15)/100)
        ];
     
        if (arraysDiscount[0]){
            let total = number - arraysDiscount[0];
            resultado.innerText= `${total}`;
        }
        if (arraysDiscount[1]){
            let total = number - arraysDiscount[1];
            resultado.innerText= `${total}`;
        }
        if (arraysDiscount[2]){
            let total = number - arraysDiscount[2];
            resultado.innerText= `${total}`;
        }
    }
}; 

function borrarFormulario(innerText){
    resultado.innerText = ""; 
};

function categoria1(){
    var elemento = document.getElementById('categoria');
    elemento.value="1";
};
function categoria2(){
    var elemento = document.getElementById('categoria');
    elemento.value="2";
};
function categoria3(){
    var elemento = document.getElementById('categoria');
    elemento.value="3";
};

resumen.addEventListener('click', calcularImporte);
borrar.addEventListener('click', borrarFormulario);
estudiante.addEventListener('click', categoria1);
trainee.addEventListener('click', categoria2);
junior.addEventListener('click', categoria3);


