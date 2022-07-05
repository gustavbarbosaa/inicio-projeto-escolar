//variaveis usadas para cadastrar aluno
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

//varias para abrir modal, fechar e cadastrar
const btnCadastrar = document.getElementById('btn-cadastrar');
const modal = document.querySelector('.modal');
const body = document.querySelector('#body');
const btnFecharModal = document.getElementById('btn-fechar-modal');
const btnCadastrarModal = document.getElementById('btn-cadastrar-modal');

//criar elemento html com o JS
const aluno = document.createElement('tr');

export default {
    nomeAluno, turmaAluno, optionTurma, situacaoAluno, optionSituacao, idadeAluno,
    nota1, nota2, nota3, media, btnCadastrar, modal, body, btnFecharModal, btnCadastrarModal,
    aluno
};