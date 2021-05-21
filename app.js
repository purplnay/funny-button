const button = document.body.querySelector('.button')
const p = document.body.querySelector('p')

p.innerHTML = twemoji.parse(p.textContent)

let clicked = false

const set = [() => {
  button.textContent = 'I am BLUE button'
  button.style.color = '#000000'
  button.style.backgroundColor = '#466fda'
  button.style.color = 'white';
}, () => {
  button.textContent = 'I am RED button';
  button.style.color = '#000000'
  button.style.backgroundColor = '#DA4646'
}, () => {
  button.textContent = 'I am GREEN button';
  button.style.opacity = 1
  button.style.color = '#000000'
  button.style.backgroundColor = '#5BE782'
}]

let index = 0

const interval = setInterval(() => {
  if (clicked) {
    return clearInterval(interval)
  }

  index++

  if (index === set.length) {
    index = 0;
  }

  set[index]();
}, 1_000)

button.addEventListener('click', () => {
  clicked = true
  button.textContent = 'Laughed? UwU'
  button.style.opacity = 1
  button.style.backgroundColor = '#E75BD9'
  button.color = '#ffffff'
  button.classList.add('done')
})
