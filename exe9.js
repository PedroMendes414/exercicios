chefe()

function chefe(){
    exe7()
}

function exe7(){
    var soma = 0
    var numero = Number(prompt("Informe um numero"))
    do{
        conta++
        soma = soma + numero
        numero = Number(prompt("Informe outro numero. Digite numero negativo para encerrar"))
    }
    while(numero >= 0)

    console.log(`A média dos numeros informados é ${soma/conta}`)
}