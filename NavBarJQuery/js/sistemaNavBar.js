function start() {
    menu = "#menuAtivo";
    console.log($(this))
    if($(menu).is(":visible")){
        esconderElemento($(menu));
    } else {
        mostrarElemento($(menu));
    }   
}

function esconderElemento(elemento) {
   $(elemento).hide();
}

function mostrarElemento(elemento) {
    $(elemento).show();
}
function acionarSeqTabuada(elemento) {
    elemento = "#janelaSeqTabuada";
    menu = "#menuAtivo";
    esconderElemento(menu);
    if($(elemento).is(":visible")){
        esconderElemento(elemento);
    }
    else {
        mostrarElemento(elemento);
    }
}
function acionarTabUnica(elemento) {
    elemento = "#janelaTabuada";
    menu = "#menuAtivo";
    esconderElemento(menu);
    if($(elemento).is(":visible")){
        esconderElemento(elemento);
    }
    else {
        mostrarElemento(elemento);
    }
}
function acionarCalcImc(elemento) {
    elemento = "#janelaCalcImc";
    menu = "#menuAtivo";
    esconderElemento(menu);
    if($(elemento).is(":visible")){
        esconderElemento(elemento);
    }
    else {
        mostrarElemento(elemento);
    }
}
function acionarForm(elemento) {
    elemento = "#janelaFormulario";
    menu = "#menuAtivo";
    esconderElemento(menu);
    if($(elemento).is(":visible")){
        esconderElemento(elemento);
    }
    else {
        mostrarElemento(elemento);
    }
}