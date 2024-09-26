const titulo = document.getElementById('exibir')

let senha = 123
let nome = 'abc' 
let message;

if (senha == 123 && nome == 'abc') {
    message = "Acesso autorizado com sucesso!"
}
else if (senha != 123 & nome == 'abc') {
    message = "Senha incorreta."
}
else if (senha == 123 & nome != 'abc') {
    message = "Nome incorreto."
}
else if (senha != 123 & nome != 'abc') {
    message = "Nome e Senha incorretos."
}

titulo.innerHTML =  message