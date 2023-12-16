let pilotname = prompt("Qual seu nome, piloto?")

let velocity = 0

let newVelocity = prompt("Qual velocidade você gostaria de acelerar?")

let confirmVelocity = confirm("Estamos acelerando para " + newVelocity + "km/s")

if(confirmVelocity) {
    velocity = newVelocity
}

if(velocity <= 0) {
    alert("A nave estpa parada. Considere partir e aumentar a velocidade.")
} else if(velocity < 40) {
    alert("Você está abaixo da velocidade permitida. Vamos aumentar para 80?")

} else if(velocity < 80) {
    alert("Você melhorou!")

} else if(velocity > 100) {
    alert("Velocidade alta, considere diminuir.")
} else {
        alert("Velocidade perigosa, controle automatico ativado.")
}


