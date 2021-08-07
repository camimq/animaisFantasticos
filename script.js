/* início do script para navegação por tabs na lista de animais */

const tabMenu = document.querySelectorAll('.js-tabmenu li');
const tabContent = document.querySelectorAll('.js-tabcontent section');

if(tabMenu.length && tabContent.length){
  tabContent[0].classList.add('ativo')

  function activeTab(index) { // ativa o ítem da section animais, incluindo a classe ativo, de acordo com o índice indicado.
    tabContent.forEach((section) =>{
    section.classList.remove('ativo');
  });
    tabContent[index].classList.add('ativo');
  }

tabMenu.forEach((itemMenu, index) =>{ // loop que vai rodar pelo index de cada uma das imagens, com evento de clique, que irá adicionar e remover a classe ativo.
  itemMenu.addEventListener('click', () =>{
    activeTab(index);
  });
})
}

/* fim do script para navegação por tabs na lista de animais */