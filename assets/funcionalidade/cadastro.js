const btnCadastrar = document.getElementById('btn-cadastrar');
const modal = document.querySelector('.modal');
const body = document.querySelector('#body');

btnCadastrar.addEventListener('click', abrirModal);
function abrirModal() {
    modal.style.display = 'flex';
    body.classList.add('modal-open');

    if(modal.classList.contains('flex')) {
        modal.removeAttribute('class');
    } else{
        modal.setAttribute('class', 'modal flex');
    }
}

const btnFecharModal = document.getElementById('btn-fechar-modal');
btnFecharModal.addEventListener('click', fecharModal);
function fecharModal() {
    body.classList.remove('modal-open');
    estiloModal();
    limparCampos();  
}
//botao cadastrar dentro do modal
//array criado para guardar os objetos, que sao os alunos cadastrados

export const alunosCadastrados = [];

const btnCadastrarModal = document.getElementById('btn-cadastrar-modal');
btnCadastrarModal.addEventListener('click', cadastrarAluno);
export function cadastrarAluno() {
    const nomeAluno = document.getElementById('nome-modal').value;
    const turmaAluno = document.getElementById('turma-modal');
    const optionTurma = turmaAluno.options[turmaAluno.selectedIndex].text;
    const situacaoAluno = document.getElementById('situacao-modal');
    const optionSituacao = situacaoAluno.options[situacaoAluno.selectedIndex].text;
    const idadeAluno = document.getElementById('idade-modal').value;
    // const nota1 = Number(document.getElementById('nota1-modal').value);
    // const nota2 = Number(document.getElementById('nota2-modal').value);
    // const nota3 = Number(document.getElementById('nota3-modal').value);
    // const media = (nota1 + nota2 + nota3) / 3;

    
    const objAluno = {
        nome: nomeAluno,
        idade: Number(idadeAluno),
        turma: optionTurma,
        // nota1: Number(nota1),
        // nota2: Number(nota2),
        // nota3: Number(nota3),
        // media: Number(media.toFixed(2)),
        situacao: optionSituacao,
        id: alunosCadastrados.length + 1
    };

    
    alunosCadastrados.push(objAluno);
    console.log(alunosCadastrados);
    
    //adicionar elemento na tela
    mostrarNaTela(nomeAluno, optionTurma, optionSituacao);

    body.classList.remove('modal-open');
    estiloModal();
    limparCampos();    
}

function limparCampos() {
    document.getElementById('nome-modal').value = '';
    document.getElementById('idade-modal').value = '';
    document.getElementById('turma-modal').value = '1ano';
    document.getElementById('situacao-modal').value = 'cursando';
}

function estiloModal() {
    modal.classList.remove('flex');
    modal.style.display = 'none';
}

function mostrarNaTela(nome, turma, situacao) {
    const tbody = document.getElementById('cadastrados-tr');
    tbody.innerText = '';

    for(let i = 0; i < alunosCadastrados.length; i++) {
        let tr = tbody.insertRow();
        tr.setAttribute('id', 'idAluno')

        let td_nome = tr.insertCell();
        let td_turma = tr.insertCell();
        let td_situacao = tr.insertCell();

        td_nome.innerText = alunosCadastrados[i].nome;

        td_turma.innerText = alunosCadastrados[i].turma;
        td_turma.classList.add('center');

        td_situacao.innerText = alunosCadastrados[i].situacao;
        td_situacao.classList.add('center');
    }
}
