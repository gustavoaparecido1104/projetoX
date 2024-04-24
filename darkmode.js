let trilho = document.getElementById('trilho')
let body = document.querySelector ('body')

trilho.addEventListener('click', ()=>{
    trilho.classList.toggle('dark')
    body.classList.toggle('dark')
})

document.addEventListener('DOMContentLoaded', function() {
    let trilho = document.getElementById('trilho');
    let body = document.body;

    // Verificar e aplicar o modo escuro salvo
    let modoEscuroAtivo = localStorage.getItem('modoEscuroAtivo');
    if (modoEscuroAtivo === 'true') {
        trilho.classList.add('dark');
        body.classList.add('dark');
    }

    // Adicionar evento de clique ao botão de alternância de modo
    trilho.addEventListener('click', () => {
        // Alternar a classe 'dark' no botão e no body
        trilho.classList.toggle('dark');
        body.classList.toggle('dark');
        
        // Salvar o estado do modo escuro no armazenamento local
        localStorage.setItem('modoEscuroAtivo', body.classList.contains('dark'));
    });
});
