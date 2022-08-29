
function calcular() {
    //pega valor input do form
    let tab1 = document.getElementById("tab1").value;
    let tab2 = document.getElementById("tab2").value;
    // validacao valores 1 > 2
    if (tab2<tab1) {
        let aux = tab2;
        tab2 = tab1;
        tab1 = aux;
    }
    //valida valores de 1 a 10

        do{
            
            const container = document.createElement("ul");
            for (let i = 1; i <= 10; i++) {
                let linha = document.createElement("li");
                linha.className = "tab" + tab1
                let result = tab1 + " X " + i + " = " + tab1*i;
                linha.appendChild(document.createTextNode(result));
                container.appendChild(linha);
            }
            // document.body.appendChild(container);
            $(container).appendTo("#seqTabResult");
            tab1++
        } while (tab1<=tab2);
          
}

function limparTela() {
    $("#tab1").text.limparTela;
    $("#tab2").text.limparTela;
    $("#seqTabResult").text ("");
}