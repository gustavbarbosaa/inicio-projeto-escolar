//variaveis criadas para pegar o botao cadastrar e abrir o modal
const btnCadastrar = document.getElementById('btn-cadastrar')
const modal = document.querySelector('.modal')

btnCadastrar.addEventListener('click', abrirModal)
function abrirModal() {
    modal.style.display = 'flex'
    if(modal.classList.contains('flex') === true) {
        modal.removeAttribute('class')
    } else{
        modal.setAttribute('class', 'modal flex')
    }
}

//botao cadastrar dentro do modal
//array criado para guardar os objetos, que sao os alunos cadastrados
const btnModal = document.getElementById('btn-modal')
const alunosCadastrados = []

btnModal.addEventListener('click', cadastrarAluno)
function cadastrarAluno() {
    const nomeAluno = document.getElementById('nome-modal').value
    const turmaAluno = document.getElementById('turma-modal')
    const optionTurma = turmaAluno.options[turmaAluno.selectedIndex].text
    const situacaoAluno = document.getElementById('situacao-modal')
    const optionSituacao = situacaoAluno.options[situacaoAluno.selectedIndex].text
    
    const objAluno = {
        nome: nomeAluno,
        turma: optionTurma,
        situacao: optionSituacao,
        id: alunosCadastrados.length + 1
    }
    
    const aluno = document.createElement('label')
    aluno.classList.add('alunosCadastrados')
    alunosCadastrados.push(objAluno)
    console.log(alunosCadastrados)
    
    aluno.innerHTML = `
        <div>
            <p>${nomeAluno}</p>
            <p>${optionTurma}</p>
            <p>${optionSituacao}</p>
        </div>
        <div>
            <button>editar</button>
            <button>excluir</button>
        </div>
    `
    document.getElementById('cadastrados').appendChild(aluno)

    modal.classList.remove('flex')
    modal.style.display = 'none'

    limparCampos();    
}

function limparCampos() {
    document.getElementById('nome-modal').value = ''
    document.getElementById('turma-modal').value = '1ano'
    document.getElementById('situacao-modal').value = 'cursando'
}
