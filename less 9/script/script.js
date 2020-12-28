window.addEventListener('scroll', addSizeH)
window.addEventListener('scroll', stopSize)
window.addEventListener('scroll', left)
window.addEventListener('scroll', addSizeF)
window.addEventListener('scroll', right)






function addSizeH() {
  if (window.scrollY >= 1 && window.scrollY <= 300) {
    document.getElementById('index-h').style.fontSize = `${window.scrollY/8+50}px`

  }

}

function stopSize() {
  if (window.scrollY >= 150 && window.scrollY <= 900) {

    document.querySelector('.line').style.width = `${window.scrollY/3+150}px`
  }

}

function left() {
  if (window.scrollY <= 500) {

    document.querySelector('.content').style.marginLeft = `${window.scrollY/7}px`
  }

}

function addSizeF() {
  if (window.scrollY >= 1250 && window.scrollY <= 1600) {
    document.getElementById('index-f').style.fontSize = `${120-window.scrollY/25}px`
  }

}

function right() {
  if (window.scrollY <= 800 && window.scrollY >= 450) {

    document.querySelector('.image').style.marginRight = `${window.scrollY/7-50}px`
  }

}
document.getElementById('index-f').addEventListener('click',(e)=>
{
  e.preventDefault()
  window.scroll({
    top:0,
    behavior: 'smooth'
  })
})

document.getElementById('index-h').addEventListener('click',(e)=>
{
  e.preventDefault()
  window.scroll({
    top:800,
    behavior: 'smooth'
  })
})
