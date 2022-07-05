import variaveis from "./variaveis.mjs";

variaveis.btnCadastrar.addEventListener('click', abrirModal);
function abrirModal() {
    variaveis.modal.style.display = 'flex';
    variaveis.body.classList.add('modal-open');

    if(variaveis.modal.classList.contains('flex')) {
        variaveis.modal.removeAttribute('class');
    } else{
        variaveis.modal.setAttribute('class', 'modal flex');
    }
}

variaveis.btnFecharModal.addEventListener('click', fecharModal);
function fecharModal() {
    variaveis.body.classList.remove('modal-open');
    limparCampos();  
    estiloModal();
}

const alunosCadastrados = []

variaveis.btnCadastrarModal.addEventListener('click', cadastrarAluno);
function cadastrarAluno() {
    
    const objAluno = {
        nome: variaveis.nomeAluno.toUpperCase(),
        idade: Number(variaveis.idadeAluno),
        turma: variaveis.optionTurma,
        nota1: Number(variaveis.nota1),
        nota2: Number(variaveis.nota2),
        nota3: Number(variaveis.nota3),
        media: Number(variaveis.media.toFixed(2)),
        situacao: variaveis.optionSituacao,
        id: alunosCadastrados.length + 1
    };

    alunosCadastrados.push(objAluno);
    console.log(alunosCadastrados);
    
    variaveis.aluno.innerHTML = `
        <td class="start">${variaveis.nomeAluno}</td>
        <td class="center">${variaveis.optionTurma}</td>
        <td class="center">${variaveis.optionSituacao}</td>
        <td class="center">
            <button class="editar-aluno" id="btn-edt"><img src="assets/images/editar.png" alt="editar aluno"></button>
            <button class="deletar-aluno" id="btn-del"><img src="assets/images/botao-de-deletar.png" alt="deletar aluno"></button>
        </td>
    `

    document.getElementById('cadastrados-tr').appendChild(variaveis.aluno);
    variaveis.body.classList.remove('modal-open');

    estiloModal();
    limparCampos();    
}

function estiloModal() {
    variaveis.modal.classList.remove('flex');
    variaveis.modal.style.display = 'none';
}

function limparCampos() {
    document.getElementById('nome-modal').value = '';
    document.getElementById('turma-modal').value = '1ano';
    document.getElementById('situacao-modal').value = 'cursando';
}