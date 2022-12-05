let redLight = document.querySelector('.red-light'),
    yellowLight = document.querySelector('.yellow-light'),
    greenLight = document.querySelector('.green-light'),
    redInput = document.querySelector('#redTime'),
    yellowInput = document.querySelector('#yellowTime'),
    greenInput = document.querySelector('#greenTime'),
    btn = document.querySelector('.btn'),
    interval;



btn.addEventListener('click', (e) => {
    
    if (redInput.value > 0 && yellowInput.value > 0 && greenInput.value > 0) {

        let rlDuration = redInput.value * 1000;
        let ylDuration = yellowInput.value * 1000;
        let glDuration = greenInput.value * 1000;
        redLight.style.background = "#B81D13"
        redLight.textContent = redInput.value;
        clearInterval(interval);
        interval = setInterval(() => {
            if (redLight.textContent > 1) {
                --redLight.textContent;
            } else {
                redLight.textContent = ""
            }
        }, 1000)
        setTimeout(() => {
            redLight.style.background = "#fff"
            yellowLight.style.background = "#EFB700"

            yellowLight.textContent = yellowInput.value;
            clearInterval(interval);
            interval = setInterval(() => {
                if (yellowLight.textContent > 1) {
                    --yellowLight.textContent;
                } else {
                    yellowLight.textContent = ""
                }
            }, 1000)

            setTimeout(() => {
                yellowLight.style.background = "#fff"
                greenLight.style.background = "#008450"

                greenLight.textContent = greenInput.value;
                clearInterval(interval);
                interval = setInterval(() => {
                    if (greenLight.textContent > 1) {
                        --greenLight.textContent;
                    } else {
                        greenLight.textContent = ""
                    }
                }, 1000)

                setTimeout(() => {
                    greenLight.style.background = "#fff"
                }, glDuration);
            }, ylDuration);
        }, rlDuration);
    } else {
        alert('Числа не могут быть отрицательными или пустыми!')
    }
});