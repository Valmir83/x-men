/*
Objetivos
1. Quando passar o mouse sobre o personagem na lista, temos que adicionar a borda azul de seleção na imagem pequena do personagem e mostrar a imagem, o nome e o texto grande do personagem que está selecionado.

Objetivo 1 - quando passar o mouse em cima do personagem na listagem, devemos selecioná-lo.
    Passo 1 - pegar os personagens no JS para poder verificar quando o usuário passar o mouse em cima de um deles.
    Passo 2 - adicionar a classe selecionada no personagem que o usuário passar o cursor do mouse.
    Passo 3 - verificar se já existe um personagem selecionado, se sim, devemos remover a seleção dele.

    Objetivo 2 - quando passar o mouse em cima do personagem na listagem, trocar a imagem, o nome e a descrição do personagem grande.
        Passo 1 - pegar o elemento do personagem grande pra adicionar as informações nele.
        Passo 2 - alterar a imagem do personagem grande.
        Passo 3 - alterar o nome do personagem grande.
        Passo 4 - alterar a descrição do personagem grande.
*/

/* Objetivo 1 - quando passar o mouse em cima do personagem na listagem, devemos selecioná-lo.
Passo 1 - pegar os personagens no JS para poder verificar quando o usuário passar o mouse em cima de um deles. */

const personagens = document.querySelectorAll('.personagem');

/* Passo 2 - adicionar a classe selecionada no personagem que o usuário passar o cursor do mouse. */

personagens.forEach((personagem) => { //Cria um laço percorrendo todos os LI da lista de personagens
    personagem.addEventListener('mouseenter', () => { //adiciona um evento ao passar com o mouse sobre a imagem do personagem.

        //Código para adaptação no celular
        if(window.innerWidth < 450) {
            window.scrollTo({top: 0, behavior: 'smooth'});
        }

        //Passo 3 - verificar se já existe um personagem selecionado, se sim, devemos remover a seleção dele.
        removerSelecaoDoPersonagem();
        
        //adiciona a classe SELECIONADO ao personagem escolhido.
        personagem.classList.add('selecionado'); 
        
        //Objetivo 2 - quando passar o mouse em cima do personagem na listagem, trocar a imagem, o nome e a descrição do personagem grande.

        alterarImagemPersonagemSelecionado(personagem);

        //Passo 3 - alterar o nome do personagem grande.
        alterarNomePersonagemSelecionado(personagem);

        //Passo 4 - alterar a descrição do personagem grande.
        alterarDescricaoPersonagem(personagem);
    })
})

//Passo 4 - alterar a descrição do personagem grande.
function alterarDescricaoPersonagem(personagem) {
    const descricaoPersonagem = document.getElementById('descricao-personagem');
    descricaoPersonagem.innerText = personagem.getAttribute('data-description');
}

//Passo 3 - alterar o nome do personagem grande.
function alterarNomePersonagemSelecionado(personagem) {
    const nomePersonagem = document.getElementById('nome-personagem');
    nomePersonagem.innerText = personagem.getAttribute('data-name');
}

//Objetivo 2 - quando passar o mouse em cima do personagem na listagem, trocar a imagem, o nome e a descrição do personagem grande.
function alterarImagemPersonagemSelecionado(personagem) {
    //Passo 1 - pegar o elemento do personagem grande pra adicionar as informações nele.
    const imagemPersonagemGrande = document.querySelector('.personagem-grande');
    //Passo 2 - alterar a imagem do personagem grande.
    const idPersonagem = personagem.attributes.id.value;
    //Alterando o caminho da imagem do personagem grande, usando o ID do personagem da lista como evento para alteração do caminho.
    imagemPersonagemGrande.src = `./src/imagens/card-${idPersonagem}.png`;
}

//Passo 3 - verificar se já existe um personagem selecionado, se sim, devemos remover a seleção dele.
function removerSelecaoDoPersonagem() {
    const personagemSelecionado = document.querySelector('.selecionado');
    personagemSelecionado.classList.remove('selecionado');
}
