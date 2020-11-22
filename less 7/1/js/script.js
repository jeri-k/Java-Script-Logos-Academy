const p = document.getElementsByTagName('p'),
    box = document.getElementById('top');
box1 = document.getElementById('top1')
p[0].onclick = function(e) {
    box1.style.display = 'none'
    box.style.display = 'block'
}
p[1].onclick = function(e) {
    box.style.display = 'none'
    box1.style.display = 'block'
}
let img = document.getElementsByClassName('imgEvent');
for (let i = 0; i < img.length; i++) {
    img[i].addEventListener('click', (event) => {
        let ur = img[i].src
        document.body.style.backgroundImage = 'url(' + ur + ')'
        document.body.style.backgroundSize = '100%'
    })
    console.log(img[i].src);
}
let colores = document.querySelector('#top1')
colores.addEventListener('click', (event) => {
    let colo = event.target.dataset.color
    document.body.style.background = colo
    console.log(colo)
})