
const colorBtn = document.querySelector('#color')
const placeBtn = document.querySelector('#place')
const ritualBtn = document.querySelector('#ritual')

function color () {
    alert("My favorite color is Green");
}
function place () {
    alert("My favorite place is Home");
}
function ritual () {
    alert("Make breakfast for my family on Sunday mornings");
}

colorBtn.addEventListener('click', color)
placeBtn.addEventListener('click', place)
ritualBtn.addEventListener('click', ritual)