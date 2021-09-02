export default function initTabNav(){

  const tabMenu = document.querySelectorAll('[data-tab="menu"] li');
  const tabContent = document.querySelectorAll('[data-tab="content"] section');

  if(tabMenu.length && tabContent.length){
    tabContent[0].classList.add('ativo')

    function activeTab(index) { // ativa o ítem da section animais, incluindo a classe ativo, de acordo com o índice indicado.
      tabContent.forEach((section) =>{
      section.classList.remove('ativo');
    });
      const direcao = tabContent[index].dataset.anime;
      tabContent[index].classList.add('ativo', direcao);
    }

  tabMenu.forEach((itemMenu, index) =>{ // loop que vai rodar pelo index de cada uma das imagens, com evento de clique, que irá adicionar e remover a classe ativo.
    itemMenu.addEventListener('click', () =>{
      activeTab(index);
    });
  })
  }
}