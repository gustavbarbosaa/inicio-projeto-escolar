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
//botao cadastrar dentro do modal
//array criado para guardar os objetos, que sao os alunos cadastrados
const btnFecharModal = document.getElementById('btn-fechar-modal');
const btnCadastrarModal = document.getElementById('btn-cadastrar-modal');
const alunosCadastrados = []

btnFecharModal.addEventListener('click', fecharModal);
btnCadastrarModal.addEventListener('click', cadastrarAluno);
function cadastrarAluno() {
    const nomeAluno = document.getElementById('nome-modal').value;
    const turmaAluno = document.getElementById('turma-modal');
    const optionTurma = turmaAluno.options[turmaAluno.selectedIndex].text;
    const situacaoAluno = document.getElementById('situacao-modal');
    const optionSituacao = situacaoAluno.options[situacaoAluno.selectedIndex].text;
    const idadeAluno = document.getElementById('idade-modal').value;
    const nota1 = Number(document.getElementById('nota1-modal').value);
    const nota2 = Number(document.getElementById('nota2-modal').value);
    const nota3 = Number(document.getElementById('nota3-modal').value);
    const media = (nota1 + nota2 + nota3) / 3;
    
    const objAluno = {
        nome: nomeAluno.toUpperCase(),
        idade: Number(idadeAluno),
        turma: optionTurma,
        nota1: Number(nota1),
        nota2: Number(nota2),
        nota3: Number(nota3),
        media: Number(media.toFixed(2)),
        situacao: optionSituacao,
        id: alunosCadastrados.length + 1
    };
    alunosCadastrados.push(objAluno);

    //adicionar elemento na tela
    const aluno = document.createElement('tr');
    console.log(alunosCadastrados);
    
    aluno.innerHTML = `
        <td class="start">${nomeAluno}</td>
        <td class="center">${optionTurma}</td>
        <td class="center">${optionSituacao}</td>
        <td class="center">
            <button class="editar-aluno" id="btn-edt"><img src="assets/images/editar.png" alt="editar aluno"></button>
            <button class="deletar-aluno" id="btn-del"><img src="assets/images/botao-de-deletar.png" alt="deletar aluno"></button>
        </td>
    `
    document.getElementById('cadastrados-tr').appendChild(aluno);
    body.classList.remove('modal-open');

    estiloModal();
    limparCampos();    
}

function fecharModal() {
    body.classList.remove('modal-open');
    estiloModal();
    limparCampos();  
}

function limparCampos() {
    document.getElementById('nome-modal').value = '';
    document.getElementById('turma-modal').value = '1ano';
    document.getElementById('situacao-modal').value = 'cursando';
}

function estiloModal() {
    modal.classList.remove('flex');
    modal.style.display = 'none';
}