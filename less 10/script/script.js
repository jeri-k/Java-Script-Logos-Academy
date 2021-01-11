const newS = (selector) => document.querySelector(selector);



// Кнопка редагувати

newS(".btn-edit").addEventListener("click", () => {
    newS(".edit-box").classList.add("show");
    newS(".style-box").classList.remove("show");
    newS(".edit-area").value = newS(".top-box").innerHTML;
    newS(".btn-edit").classList.remove("shadow");
    newS(".btn-style").classList.add("shadow");
})
// Кнопка зберегти

newS(".btn-save").addEventListener("click", () => {
    newS(".edit-box").classList.remove("show");
    newS(".top-box").innerHTML = newS(".edit-area").value;
    newS(".btn-edit").classList.add("shadow");
})

newS(".btn-style").addEventListener("click", () => {
    newS(".style-box").classList.add("show");
    newS(".edit-box").classList.remove("show");
    newS(".btn-style").classList.remove("shadow");
    newS(".btn-edit").classList.add("shadow");
})

// Кнопка очистки

newS(".btn-clear").addEventListener("click", () => {
    newS(".edit-area").value = "";
})


// Розмір тексту
function fontSize() {
    let value = document.forms["font-box"].rad;
    for (let i = 0; i < value.length; i++) {
        value[i].addEventListener("click", () => {
            newS(".top-box").style.fontSize = value[i].value;
        });
    }
}
fontSize();



// Щрифти 
function fontFamily() {
    newS(".font-family").addEventListener("change", () => {
        newS(".top-box").style.fontFamily = event.target.value;
    });
}
fontFamily();



// Заливка палитри 

function backgroundColorBorder() {
    for (let i = 0; i < newS(".colors").children.length; i++) {
        let color = newS(".colors").children[i].dataset.color;
        newS(".colors").children[i].style.backgroundColor = color;
    }
    for (let i = 0; i < newS(".bg-colors").children.length; i++) {
        let color = newS(".colors").children[i].dataset.color;
        newS(".bg-colors").children[i].style.backgroundColor = color;
    }
}
backgroundColorBorder();


// Задання коляру тексту та заливку блоку стягуючи значення з data-color 

newS(".btn_bg_color").addEventListener("click", (e) => {
    newS(".colors").classList.toggle("hide");
});

newS(".colors").addEventListener("click", (e) => {
    let eventDataColor = event.target.dataset.color;
    newS(".top-box").style.backgroundColor = eventDataColor;
    newS(".colors").classList.add("hide");
});
newS(".btn-text-color").addEventListener("click", (e) => {
    newS(".bg-colors").classList.toggle("hide");
});

newS(".bg-colors").addEventListener("click", (e) => {
    let eventDataColor = event.target.dataset.color;
    newS(".top-box").style.color = eventDataColor;
    newS(".bg-colors").classList.add("hide");
});

// Жирний текст

newS(".check-bold").addEventListener("click", () => {
    if (event.target.checked) {
        newS(".top-box").classList.add("bold");
    } else {
        newS(".top-box").classList.remove("bold");
    }
})

// Курсивний текст

newS(".check-cursive").addEventListener("click", () => {
    if (event.target.checked) {
        newS(".top-box").classList.add("cursive");
    } else {
        newS(".top-box").classList.remove("cursive");
    }
})

// Кнопка Add

newS(".btn-add").addEventListener("click", (e) => {
    newS(".first").classList.remove("show");
    newS(".second").classList.add("show");
});

// Кліки по radio

newS("#check-1").addEventListener("click", () => {
    newS(".create-list").classList.add("hide");
    newS(".create-table").classList.remove("hide");
});

newS("#check-2").addEventListener("click", () => {
    newS(".create-list").classList.remove("hide");
    newS(".create-table").classList.add("hide");
});

// Функція яка задає значення для list

const list = document.forms["form-list"];
newS(".btn-create-list").addEventListener("click", () => {
    const countLi = list.count.value;
    const typeLi = list.type.value;
    newS(
        ".edit-area"
    ).value += `<ul style="list-style-type:${typeLi};margin-left: 30px">`;
    for (let i = 0; i < countLi; i++) {
        newS(".edit-area").value += `<li> item ${i + 1} </li>`;
    }
    newS(".edit-area").value += "</ul>";
    newS(".first").classList.add("show");
    newS(".second").classList.remove("show");
    if (newS("#check-2").checked || newS("#check-1").checked) {
        newS(".create-list").classList.add("hide");
        newS(".create-table").classList.add("hide");
        newS("#check-1").checked = false;
        newS("#check-2").checked = false;
    }
    list.count.value = ''
    list.type.value = ''
    newS(".create-list").classList.add("hide");
    newS("#check-2").checked = false;



});



// Функція яка задає значення для table

const table = document.forms["form-table"];
newS(".btn-create-table").addEventListener("click", () => {
    const countTr = table.count_tr.value;
    const countTd = table.count_td.value;
    const widthTd = table.width_of_td.value;
    const heightTd = table.height_of_td.value;
    const widthBorder = table.width_of_border.value;
    const typeBorder = table.type_of_border.value;
    const colorBorder = table.color_of_border.value;
    newS(".edit-area").value += `<table style="border-collapse: collapse;">`;
    for (let i = 0; i < countTr; i++) {
        newS(".edit-area").value += `<tr>`;
        for (let j = 0; j < countTd; j++) {
            newS(
                ".edit-area"
            ).value += `<td style="width:${widthTd}px;height:${heightTd}px;border-width:${widthBorder}px;border-style:${typeBorder};border-color:${colorBorder};text-align: center;">${"TD"}`;
        }
        newS(".edit-area").value += `</td>`;
    }
    newS(".edit-area").value += `</table>`;
    newS(".first").classList.add("show");
    newS(".second").classList.remove("show");
    table.count_tr.value = '';
    table.count_td.value = '';
    table.width_of_td.value = '';
    table.height_of_td.value = '';
    table.width_of_border.value = '';
    table.type_of_border.value = '';
    table.color_of_border.value = '';
    newS("#check-1").checked = false;
    newS(".create-table").classList.add("hide");


});