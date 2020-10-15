var navbar = document.querySelector('.navbar')
var navbar__btn = document.querySelector('.navbar__mobileBtn')
var navbar__content = document.querySelector('.navbar__mobileContent')

var previousScroll = window.pageYOffset

var navbar__logo = document.querySelector('#logo')
var navbar__anchor = document.querySelector('#nav_anchor')
var navbar__key = false

var window__width = window.matchMedia("(min-width: 800px)")

var header__bg = document.querySelector('#background')

var page__path = window.location.pathname
var page__name = page__path.split("/").pop()

function change__logo(page){
    return (page == 'about.html' || page == 'index.html' || page == '') 
}

function scroll__nav() {
    var scrollAmount = window.scrollY
    var currentScroll = window.pageYOffset
    var scrollStart = 0
   
    if(change__logo(page__name)) { scrollStart = 80 } 
    
    if (scrollAmount > scrollStart) {
        navbar.classList.add('navbar__shadow')
        navbar__anchor.classList.replace('navbar--regAnchor', 'navbar--darkAnchor')
        navbar__content.classList.remove('navbar__mobileContent--open')

        if (navbar__key) {
            navbar__logo.src = 'app/assets/images/logo/svg/d-load-logo-icon.svg'
        } else {
            navbar__logo.src = 'app/assets/images/logo/svg/d-load-logo.svg'
            navbar__key = false
        }

        if (previousScroll > currentScroll) {
            navbar.style.top = '0px'
            navbar__btn.classList.remove('navbar__mobileBtn--open')
        } else {
            navbar.style.top = '-20%'
        }

        previousScroll = currentScroll;

    } else {
        navbar.style.top = '0px'
        navbar.classList.remove('navbar__shadow')

        if (navbar__key) {
            navbar__logo.src = 'app/assets/images/logo/svg/d-load-logo-icon.svg'
        } else {
            navbar__logo.src = 'app/assets/images/logo/svg/d-load-logo-white.svg'
            navbar__key = false
        }

        if (change__logo(page__name)) {
            navbar__anchor.classList.replace('navbar--darkAnchor', 'navbar--regAnchor')
            if (navbar__key != true) {
                navbar__logo.src = 'app/assets/images/logo/svg/d-load-logo-white.svg'
            }
        } else {
            navbar__anchor.classList.replace('navbar--regAnchor', 'navbar--darkAnchor')
            if (navbar__key != true) {
                navbar__logo.src = 'app/assets/images/logo/svg/d-load-logo.svg'
            }

        }

        navbar__btn.classList.remove('navbar__mobileBtn--open')
        navbar__content.classList.remove('navbar__mobileContent--open')
    }


}

function media__screen(width) {

    if (width.matches) {

        if (change__logo(page__name)) {
            navbar__logo.src = 'app/assets/images/logo/svg/d-load-logo-white.svg'
        } else {
            navbar__logo.src = 'app/assets/images/logo/svg/d-load-logo.svg'
        }

        navbar__logo.classList.remove('navbar__logo--mobile')
        navbar__content.classList.remove('navbar__mobileContent--open')
        navbar__key = false
    } else {
        navbar__logo.src = 'app/assets/images/logo/svg/d-load-logo-icon.svg'
        navbar__logo.classList.add('navbar__logo--mobile')
        navbar__btn.classList.remove('navbar__mobileBtn--open')
        navbar__key = true
    }


}


media__screen(window__width)
window__width.addListener(media__screen)
window.addEventListener('scroll', scroll__nav)

navbar__btn.addEventListener('click', () => {
    if (navbar__btn.classList.contains('navbar__mobileBtn--open')) {
        navbar__btn.classList.remove('navbar__mobileBtn--open')
        navbar__content.classList.remove('navbar__mobileContent--open')
    } else {
        navbar__btn.classList.add('navbar__mobileBtn--open')
        navbar__content.classList.add('navbar__mobileContent--open')
    }
})