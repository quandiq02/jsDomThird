// window.onload = function () {
//     showAnimClass();
// }

let range = document.querySelector("#slider-1");
let anim1 = document.querySelector(".emoticon-1")
let anim2 = document.querySelector(".emoticon-2")
let anim3 = document.querySelector(".emoticon-3")
let anim4 = document.querySelector(".emoticon-4")
let anim5 = document.querySelector(".emoticon-5")

function showAnimClass() {
    if (range.value == "1") {
        anim1.classList.add('anim-1');
    } else if (range.value == "2") {
        anim2.classList.add('anim-2');
    } else if (range.value == "3") {
        anim3.classList.add('anim-3');
    } else if (range.value == "4") {
        anim4.classList.add('anim-4');
    } else if (range.value == "5") {
        anim5.classList.add('anim-5');
    }
}
range.addEventListener('input', showAnimClass);