//Tela inicial
//adicionando função de alterar página

let alunosCadastrados = document.getElementById('button-cadastrados')
let cadastrar = document.getElementById('button-cadastrar')

alunosCadastrados.addEventListener('click', () => {
    window.location.href = 'alunosCadastrados.html'
})

cadastrar.addEventListener('click', () => {
    window.location.href = 'cadastrarAluno.html'
})