const in_password = document.querySelectorAll('#in-password')
const password = document.querySelectorAll('.field-password')

for (let a = 0; a < in_password.length; a++) {
  in_password[a][0] = 1
  in_password[a].addEventListener('click', () => {

    if (in_password[a][0] == 1) {
      password[a].setAttribute('type', 'text')
      in_password[a].classList.replace('show-pass', 'hide-pass')
      in_password[a].innerText = 'HIDE'
      in_password[a][0] = 0
    } else {
      in_password[a].classList.replace('hide-pass', 'show-pass')
      password[a].setAttribute('type', 'password')
      in_password[a].innerText = 'SHOW'
      in_password[a][0] = 1
    }

    console.log(in_password[0][0] + " " + in_password[1][0])
  })
}

let d = document,
  [inputs, buttons] = [
    d.querySelectorAll('#input'),
    d.querySelector('#btn__disable')
  ]
buttons.disabled = true

for (i = 0; i < inputs.length; i++) {
  inputs[i].addEventListener('input', () => {
    let values = []
    inputs.forEach(v => values.push(v.value))
    buttons.disabled = values.includes('')
  })
}