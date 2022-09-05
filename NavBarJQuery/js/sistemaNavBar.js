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
function acionarSeqTabuada() {
    $("#janelaTabuada").hide();
    $("#janelaFormulario").hide();
    $("#janelaCalcImc").hide();
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
function acionarTabUnica() {
    $("#janelaFormulario").hide();
    $("#janelaCalcImc").hide();
    $("#janelaSeqTabuada").hide();
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
function acionarCalcImc() {
    $("#janelaFormulario").hide();
    $("#janelaSeqTabuada").hide();
    $("#janelaTabuada").hide();
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
function acionarForm() {
    $("#janelaSeqTabuada").hide();
    $("#janelaTabuada").hide();
    $("#janelaCalcImc").hide();
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

function acionarAjaxViaCep() {
    $("#janelaFormulario").hide();
    $("#janelaSeqTabuada").hide();
    $("#janelaTabuada").hide();
    $("#janelaCalcImc").hide();
    elemento = "#janelaAjaxViaCep";
    menu = "#menuAtivo";
    esconderElemento(menu);
    if($(elemento).is(":visible")){
        esconderElemento(elemento);
    }
    else {
        mostrarElemento(elemento);
    }
}