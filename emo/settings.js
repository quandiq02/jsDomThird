let range = document.querySelector("#slider-1");
let animArray = [];
for (let i = 1; i <= 5; i++) {
    animArray.push(document.querySelector(".emoticon-" + i));
}
function showAnimClass() {
    for (let i = 1; i <= 5; i++) {
        if (range.value == i) {
            animArray[i - 1].classList.add('anim-' + i);
            for (let j = 1; j <= 5; j++) {
                if (animArray[j - 1].classList.contains('anim-' + j) && i != j) {
                    animArray[j - 1].classList.remove('anim-' + j);
                }
            }
        }
    }
}
range.addEventListener('input', showAnimClass);