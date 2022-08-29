function calcularImc() {
    const peso = document.getElementById('peso');
    const altura = document.getElementById('altura');
    const result = document.getElementById('result');

    let imc = peso.value / (altura.value * altura.value);
    if (imc < 18.5) {
        result.innerHTML = 'Abaixo do Peso';
        result.style.color = 'yellow';
        result.style.fontWeight = 'bold';
    }
    else if (imc >= 18.5 && imc < 25) {
        result.innerHTML = 'Peso Normal';
        result.style.color = 'green';
        result.style.fontWeight = 'bold';
    }
    else if (imc >= 25 && imc < 30) {
        result.innerHTML = 'Sobrepeso  -  Obesidade: I';
        result.style.color = 'yellow';
        result.style.fontWeight = 'bold';
    }
    else if (imc >= 30 && imc < 40) {
        result.innerHTML = 'Obesidade  -  Obesidade: II';
        result.style.color = 'red';
        result.style.fontWeight = 'bold';
    } else {
        result.innerHTML = 'Obesidade Grave  -  Obesidade: III'
        result.style.color = 'black';
        result.style.fontWeight = 'bold';
    }

}
