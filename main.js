let button1 = document.querySelector('.button1');
let text = document.querySelector('.text');
let button2 = document.querySelector('.button2');
let style = document.querySelector('.style');
let screen = document.querySelector('.screen');
let screen1 = document.querySelector('.screen1')
let radio = document.getElementsByName('fontSize');
let fontFamily = document.getElementsByName('choose');
let colorText = document.querySelector('.colorText');
let colorBacground = document.querySelector('.colorBacground');
let colorWraper = document.querySelector('.colorWraper');
let colorWraper1 = document.querySelector('.colorWraper1')
let color1 = document.querySelectorAll('.box');
let box1 = document.querySelectorAll('.box1');
let buttonText1 = document.querySelector('.buttonText1');
let textarea = document.querySelector('.textarea');

buttonText1.addEventListener('click', () => {
    screen.innerHTML = textarea.value;
    text.style.display = 'none';
});

button1.addEventListener('mousedown', () => {
    colorWraper.style.display = 'none';
    style.style.display = 'none';
    text.style.display = 'block';
});
button2.addEventListener('mousedown', () => {
    text.style.display = 'none';
    style.style.display = 'block';
});

radio.forEach(function (elem) {
    elem.addEventListener('click', () => {
        screen.style.fontSize = elem.value;
    })
});

fontFamily.forEach(function (elem) {
    elem.addEventListener('click', () => {
        screen.style.fontFamily = elem.value;
    })
});

colorText.addEventListener('click', () => {
    colorWraper.style.display = 'block';
    for (const elem of color1) {
        elem.addEventListener('click', () => {
            let thisClass = getComputedStyle(elem).backgroundColor;
            screen.style.color = thisClass;
            colorWraper.style.display = 'none';
        });
    }
});

colorBacground.addEventListener('mousedown', () => {
    colorWraper1.style.display = 'block';
    for (const elem of box1) {
        elem.addEventListener('click', () => {
            let thisClass = getComputedStyle(elem).backgroundColor;
            screen.style.background = thisClass;
            colorWraper1.style.display = 'none';
        });
    }
});

let bold = document.querySelector('.bold');
let cursive = document.querySelector('.cursive');
bold.addEventListener('click', function (event) {
    if (this.checked) {
        screen.style.fontWeight = 'bold';
    } else {
        screen.style.fontWeight = 'normal';
    }
});

cursive.addEventListener('click', function (event) {
    if (this.checked) {
        screen.style.fontStyle = 'italic';
    } else {
        screen.style.fontStyle = 'normal';
    }
});

let buttonText = document.querySelector('.buttonText');
let buttonWraper = document.querySelector('.wrap');
let screen2 = document.querySelector('.screen2');

buttonText.addEventListener('click', () => {
    screen.style.display = 'none';
    screen1.style.display = 'none';
    buttonWraper.style.display = 'none';
    screen2.style.display = 'block';
});

let table = document.querySelector('.table');
let list = document.querySelector('.list');
let formWrapper = document.querySelector('.formWrapper');
let listWraper = document.querySelector('.listWraper');

table.addEventListener('click', () => {
    listWraper.style.display = 'none'
    formWrapper.style.display = 'block'
});

let CreateTable = document.querySelector('.CreateTable');
let countTr = document.querySelector('.countTr');
let countTd = document.querySelector('.countTd');
let widthTd = document.querySelector('.widthTD');
console.log(widthTd);
let heightTd = document.querySelector('.heightTD');
let WidthBorder = document.querySelector('.WidthBorder');
let typeBorder = document.querySelector('.typeBorder');
let colorBorder = document.querySelector('.colorBorder');

CreateTable.addEventListener('click', function () {
    textarea.value += '<table> ';
    textarea.Value += '<tbody> ';
    for (let i = 0; i < countTr.value; i++) {
        textarea.value += '<tr>';
        for (let i = 0; i < countTd.value; i++) {
            textarea.value += '<td style ="';
            textarea.value += 'width:' + widthTD + 'px;' + ' ' + 'height:' + heightTd.value + 'px;';
            textarea.value += 'border:' + WidthBorder.value + 'px' + ' ' + typeBorder.value + ' ' + colorBorder.value + '">';
            textarea.value += 'TD';
            textarea.value += '</td>';
        }
        textarea.value += '</tr>';
    }
    countTd.value = '';
    countTr.value = '';
    widthTd.value = '';
    heightTd.value = '';
    WidthBorder.value = '';
    textarea.value += '</tbody> ';
    textarea.value += '</table>';
    screen.style.display = 'block';
    screen1.style.display = 'block';
    buttonWraper.style.display = "block";
    screen2.style.display = 'none';

});

let CreateList = document.querySelector('.CreateList');
let marks = document.querySelector('.marks');


list.addEventListener('click', () => {
    formWrapper.style.display = 'none';
    listWraper.style.display = 'block';
});

let countLi = document.querySelector('.countLi');

CreateList.addEventListener('click', () => {
    textarea.value += '<ol>';
    for (let i = 0; i < countLi.value; i++) {
        textarea.value += '<li type = "' + marks.value + '">' + 'item' + '</li>';
    }
    textarea.value += '</ol>';
    screen.style.display = 'block';
    screen1.style.display = 'block';
    screen2.style.display = 'none';
    buttonWraper.style.display = "block";
    countLi.value = '';
})