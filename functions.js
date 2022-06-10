function calcularEquacao(){
    var a = parseFloat(document.querySelector('#a').value);
    var b = parseFloat(document.querySelector('#b').value);
    var c = parseFloat(document.querySelector('#c').value);
    var delta = (b*b) - (4*a*c);
    if(delta >= 0){
        var x1 = (-b + Math.sqrt(delta))/(2*a);
        var x2 = (-b - Math.sqrt(delta))/(2*a);
        var rx1 = x1.toFixed(2);
        var rx2 = x2.toFixed(2);
        document.querySelector('#resultado').innerHTML = '<p>X1 = ' + rx1 + '</p><p>X2 = ' + rx2 + '</p>';
    }
    else{
        document.querySelector('#resultado').innerHTML = '<p>Delta negativo, impossível concluir o cálculo</p>';
    }
}

function calcularVetor(){
    var moduloA = parseFloat(document.querySelector('#moduloA').value);
    var moduloB = parseFloat(document.querySelector('#moduloB').value);
    var cosseno = parseFloat(document.querySelector('#cosseno').value);
    var resultado = Math.sqrt(((moduloA*moduloA)+(moduloB*moduloB))+(2*moduloA*moduloB*Math.cos(cosseno)));
    document.querySelector('#resultadoVetor').innerHTML = '<p>Resultado = ' + resultado.toFixed(2) + ' U.M.' + '</p>';
}

