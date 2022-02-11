const nome = document.getElementById('nome')
const idade = document.getElementById('idade')
const linguagem =document.getElementById('linguagem')
const res = document.getElementById('res')
function register(){
    if(nome.value == 0 || idade.value == 0 || linguagem.value == 0){
        res.innerHTML = '<h2>Erro! Preencha todas os valores a cima.</h2>'
    }else{
        res.innerHTML = ''
        res.innerHTML +=`<p>Olá <strong>${nome.value}</strong>!</p>`
        res.innerHTML +=`<p>Você tem <strong>${idade.value} </strong>anos.</p>`
        res.innerHTML +=`<p>E quer estudar <strong>${linguagem.value}</strong></p>`
    }
}