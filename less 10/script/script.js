const newS = selector => document.querySelector(selector)

newS('.btn-edit').addEventListener('click', visibilityEditBox)
newS('.btn-save').addEventListener('click', hideEditBox)
newS('.btn-style').addEventListener('click', visibilityStyleBox)
newS('.btn-text-color').addEventListener('click', visibleColorsBlock)

fontSize()
fontFamily()
colorStyle()
newS('.check-bold').addEventListener('click', fontWidthBold)
newS('.check-cursive').addEventListener('click', fontWidthCursive)




function visibilityEditBox() {
    newS('.edit-box').classList.add('show');
    newS('.style-box').classList.remove('show')
    newS('.edit-area').value = newS('.top-box').innerHTML
}

function hideEditBox() {
    newS('.edit-box').classList.remove('show');
    newS('.top-box').innerHTML = newS('.edit-area').value
}

function visibilityStyleBox() {
    newS('.style-box').classList.add('show')
    newS('.edit-box').classList.remove('show');
}

function fontSize() {
    let value = document.forms['font-box'].rad
    for (let i = 0; i < value.length; i++) {
        value[i].addEventListener('click', () => {
            newS('.top-box').style.fontSize = value[i].value
        })
    }

}

function fontFamily() {
    newS('.font-family').addEventListener('change', () => {
        newS('.top-box').style.fontFamily = event.target.value
    })
}

function colorStyle() {
    let colors=document.querySelectorAll('.color-box')
    for (let i=0;i<colors.length;i++){
        colors[i].addEventListener('click',()=>{
            newS('.top-box').style.color = colors[i].textContent
        })
       
    }
}
function visibleColorsBlock() {
    newS('.colors').classList.remove('hide');
}

function fontWidthBold(){
    if(event.target.checked){
        newS('.top-box').classList.add('bold');
    }
    else{
        newS('.top-box').classList.remove('bold');

    }
}
function fontWidthCursive(){
    if(event.target.checked){
        newS('.top-box').classList.add('cursive');
    }
    else{
        newS('.top-box').classList.remove('cursive');

    }
}

