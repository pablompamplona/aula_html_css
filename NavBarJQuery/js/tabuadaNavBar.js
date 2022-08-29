function calcularTab() {
    const tab = $("#tabuadaJanela").val();
    // $("#tabuadaSelecionada").text("Tabuada do " + tab);
    let result = "";
    for (let index = 1; index <= 10; index++) {
        result += `<div id="linhaTabJanela"><span id="tabElementTabJanela">${tab} x</span> <span id="tabElementIndexJanela">${index} =</span> <span id="tabElementResultJanela">${tab*index}<\span></div>`
    
    }
    $("#tabuadaResultado").text ("");
    let resultBox = `<div id="tabBoxJanela"><span id="titleTab">Tabuada do ${tab}</span><br><br>${result}</div>`;
    $(resultBox).appendTo("#tabuadaResultado");

}