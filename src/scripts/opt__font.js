const load__font = document.querySelectorAll('#load__font')

this.addEventListener('load', () => {
    load__font.forEach((link) => {
        if (link.getAttribute('rel') == 'preload') {

            link.setAttribute('rel', 'stylesheet')
        }
    })
})

