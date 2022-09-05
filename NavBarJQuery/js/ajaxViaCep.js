function submitCep() {
    const cep = $("input#cep").val();
    $.ajax({
        type:"GET",
        url:"https://viacep.com.br/ws/" + cep  +"/json/",
        dataType:"json",
        success:function(data) {
            const elem = '<div id="dados">' + '<span>logradouro:' + data.logradouro +'</span>' + '</div>'
            $(elem).appendTo("#janelaConteudo");
        },
        error:function() {
            alert("Ops! Algo deu errado!")
        },
        beforSend:function(){
            
        }
    })
}
