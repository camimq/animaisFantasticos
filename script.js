/* início do script para navegação por tabs na lista de animais */
function initTabNav(){

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
}
initTabNav();
/* fim do script para navegação por tabs na lista de animais */

/* início do script para accordion lista da FAQ */
function initAccordion(){
  const accordionList = document.querySelectorAll('.js-accordion dt');
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

/* início do script para scroll suave */
function initScrollSuave(){
  const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]');

  function scrollToSection(event){
    event.preventDefault();
    const href = event.currentTarget.getAttribute('href');
    const section = document.querySelector(href);
    section.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }

  linksInternos.forEach((link) => {
    link.addEventListener('click', scrollToSection);
  })
}
initScrollSuave();
/* fim do script para scroll suave */