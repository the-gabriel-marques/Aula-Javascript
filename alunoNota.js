const titulo = document.getElementById('exibir')

let nota = 1
let faltas = 25

let message;

if(nota >= 7 && faltas <= 20) {
    message = "Aluno está aprovado!"
}
else 
    message = "Aluno está reprovado!"


titulo.innerHTML =  message