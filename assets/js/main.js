// import vemBootstrap from './modules/botstrapimport.js';
// import * as animacao from './modules/animation.js';
// import * as carouselClick from './modules/carousel-change.js';
import * as config from './modules/swiper__props.js'; //Configs do Swiper
import Dom from './modules/constructors.js'; //selecionar elementos
import menu from './modules/menu.js'; //js do menu
import lineClamp from './modules/line-clamp.js'; //line Clamp
import * as darkMode from './modules/dark-mode.js'; //line Clamp
import linkDentroLink from './modules/a-dentro-a.js'; //link dentor de link
import progressBar from './modules/progress-bar.js'; //progress bar
import firefox from './modules/firefox-check.js'; //progress bar
import Swiper from 'https://unpkg.com/swiper/swiper-bundle.esm.browser.min.js'

menu();
darkMode.darkMode();
darkMode.escondeIcon()
firefox();

// ★ PAGES ★ 
const pageHome = new Dom().el("#page__home")
const pageAbout = new Dom().el("#page__about")
const pageBoards = new Dom().el("#page__boards")
const pageBoardsDescription = new Dom().el("#page__boards-description")
const pageMembers = new Dom().el("#page__members")
const pageEvents = new Dom().el("#page__events")
const pageEventsDescription = new Dom().el("#page__events-description")
const publications = new Dom().el("#page__publications")
const publicationsSingle = new Dom().el("#page__publications-single")
const contato = new Dom().el("#page__contato")

if (pageHome) { // ★ HOME  
    new Dom().bodyClass("body__home")
    const swiperIntro = new Swiper(".intro__swipper", config.props2)

} else if (pageAbout) { //★ About  
    new Dom().bodyClass("body__about")

} else if (pageBoards) { //★ Boards  
    new Dom().bodyClass("body__boards")

} else if (pageBoardsDescription) { //★ Boards Description  
    new Dom().bodyClass("body__boards-description")
    const swiperIntro = new Swiper(".swiper-container", config.props3)
    lineClamp()

} else if (pageMembers) { //★ Members 
    new Dom().bodyClass("body__members")
    linkDentroLink()

} else if (pageEvents) { //★ Events 
    new Dom().bodyClass("body__events")

} else if (pageEventsDescription) { //★ Events Description 
    new Dom().bodyClass("body__events-description")

} else if (publications) { //★ Publications 
    new Dom().bodyClass("body__publications")

} else if (publicationsSingle) { //★ Publications Single
    new Dom().bodyClass("body__publications-single")
    const quebra = window.matchMedia('(min-width: 540px)').matches
    if (!quebra)
        progressBar()

} else if (contato) { //★ Contato
    new Dom().bodyClass("body__contato")
    new Swiper(".contato__swipper", config.propsContato)

}

