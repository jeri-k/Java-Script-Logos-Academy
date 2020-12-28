let boxCheck = document.forms['box-check']




function addNewTask() {
    event.preventDefault();
    if (document.getElementById('text').value != '') {
        let lab = document.createElement('lable')
        lab.setAttribute('class', 'newLab')
        document.getElementById('f1').append(lab)
        let inp = document.createElement('input')
        inp.setAttribute('type', 'checkbox')
        inp.setAttribute('name', 'check')
        document.querySelector('.newLab:last-child').append(inp)
        let sp = document.createElement('span')
        sp = document.getElementById('text').value
        document.querySelector('.newLab:last-child').append(sp)
        document.getElementById('text').value = ''

    } else {
        let blockVis = document.querySelector('.warning')
        let close = document.querySelector('.close')
        blockVis.style.display = 'block'
        close.addEventListener('click', () => {
            blockVis.style.display = 'none'

        })
    }
    let allLab = document.querySelectorAll('.newLab');
    for (let i = 0; i < allLab.length; i++) {
        allLab[i].addEventListener('click', (e) => {
            event.preventDefault()
            if (boxCheck.elements.length > 1) {
                allLab[i].remove()
            }
        })
    }

}
let allLab2 = document.querySelectorAll('.newLab')
for (let i = 0; i < allLab2.length; i++) {
    allLab2[i].addEventListener('click', (e) => {
        event.preventDefault()
        if (boxCheck.elements.length > 1) {
            allLab2[i].remove()
        } else {
            let blockVis1 = document.querySelector('.warning1')
            let close1 = document.querySelector('.close1')
            blockVis1.style.display = 'block'
            close1.addEventListener('click', () => {
                blockVis1.style.display = 'none'

            })
        }
    })
}