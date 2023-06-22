function subtrai(primeiro, segundo){
    primeiro = parseInt(document.getElementById("primeiro").value)
    segundo = parseInt(document.getElementById("segundo").value)
    let result = primeiro - segundo
    document.getElementById("resultado").innerHTML = result
}
function soma(primeiro, segundo){
    primeiro = parseInt(document.getElementById("primeiro").value)
    segundo = parseInt(document.getElementById("segundo").value)
    let result = primeiro + segundo
    document.getElementById("resultado").innerHTML = result
}
function multiplica(primeiro, segundo){
    primeiro = parseInt(document.getElementById("primeiro").value)
    segundo = parseInt(document.getElementById("segundo").value)
    let result = primeiro * segundo
    document.getElementById("resultado").innerHTML = result
}
function divide(primeiro, segundo){
    primeiro = parseInt(document.getElementById("primeiro").value)
    segundo = parseInt(document.getElementById("segundo").value)
    let result = primeiro / segundo
    document.getElementById("resultado").innerHTML = result
}