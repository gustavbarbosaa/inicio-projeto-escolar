const btnCadastrar = document.getElementById('btn-cadastrar')
const modal = document.querySelector('.modal')

function abrirModal() {
    modal.style.display = 'flex'
    if(modal.classList.contains('flex') === true) {
        modal.removeAttribute('class')
    } else{
        modal.setAttribute('class', 'modal flex')
    }
}
btnCadastrar.addEventListener('click', abrirModal)
