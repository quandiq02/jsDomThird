window.onload = function(){
    slideOne();
    slideTwo();
}


const sliderOne = document.querySelector("#slider-1"),
    sliderTwo = document.querySelector("#slider-2"),
    displayValOne = document.querySelector(".range1"),
    displayValTwo = document.querySelector(".range2"),
    minGap = 0,
    sliderMaxValue = document.querySelector("#slider-1").max,
    sliderTrack = document.querySelector(".slider-track");



sliderOne.addEventListener("input", slideOne);
sliderTwo.addEventListener("input", slideTwo);

function fillColor() {
    let percent1 = (sliderOne.value / sliderMaxValue) * 100;
    let percent2 = (sliderTwo.value / sliderMaxValue) * 100;
    sliderTrack.style.background = `linear-gradient(to right, #fff ${percent1}%, #4fa095 ${percent1}%, #4fa095 ${percent2}%,#fff ${percent2}%)`;
}

function slideOne() {
    if (parseInt(sliderTwo.value) - parseInt(sliderOne.value) <= minGap) {
        sliderOne.value = parseInt(sliderTwo.value) - minGap;
    }
    displayValOne.textContent = sliderOne.value;
    fillColor();
}

function slideTwo() {
    if (parseInt(sliderTwo.value) - parseInt(sliderOne.value) <= minGap) {
        sliderTwo.value = parseInt(sliderOne.value) - minGap;
    }
    displayValTwo.textContent = sliderTwo.value;
    fillColor();
}