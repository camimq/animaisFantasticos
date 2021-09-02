/* início do script para navegação por tabs na lista de animais */
function initTabNav(){

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
initTabNav();
/* fim do script para navegação por tabs na lista de animais */

/* início do script para accordion lista da FAQ */
function initAccordion(){
  const accordionList = document.querySelectorAll('[data-anime="accordion"] dt');
  const activeClass = 'ativo';

  if(accordionList.length){
    accordionList[0].classList.add(activeClass);
    accordionList[0].nextElementSibling.classList.add(activeClass);

    function activeAccordion (){
      this.classList.toggle(activeClass);
      this.nextElementSibling.classList.toggle(activeClass);
    }

    accordionList.forEach((item) => {
      item.addEventListener('click', activeAccordion);
    });
  }
}
initAccordion();
/* fim do script para accordion lista da FAQ */