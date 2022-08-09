// document.getElementById('orangediv')

var seconddiv = document.getElementById('orangediv')

// poping an alert when clicked

seconddiv.addEventListener('click', function () {
    alert('orange div is clicked')
})

// changing the element background
seconddiv.style.background = "blue" 

// console

// console.log('welcome, Daniel, this works !!!')

// console.log(document)

// alert
// alert('welcome to my first day with Javascript')

// (innerHtml)
// document.querySelector(".right-holder").innerHTML = "Supper cool!! it works"

function popsomething() {
    alert ('welcome, box 1 is clicked')
}

var rightdiv = document.querySelector('#right-holder')
console.log(rightdiv)

function changeTO_Orange() {
    rightdiv.style.background = "#ffa800"
}

function changeTo_Red() {
    rightdiv.style.background ='red'
}

function changeTo_gray() {
    rightdiv.style.background ='gray'
}