let display = document.querySelector('#displayTimer');
let input = document.querySelector('#inputField');
let btn = document.querySelector('#btn');

function timer(duration) {
    let remainingTime = Number(duration) - 1;
    let sec = 60;

    const IntervalId = setInterval(() => {
        input.value = "";

        if (remainingTime <= 0 && sec === 0) {
            clearInterval(IntervalId);
            display.textContent = "Time's Up!";
            return false;
        }

        if (sec === 0) {
            sec = 59;
            remainingTime--;
            console.log(remainingTime, " : ", sec)
        } else {
            sec--;
            console.log(remainingTime, " : ", sec)
        }
        display.textContent = `${remainingTime} : ${sec}`
    }, 1000)
}

btn.addEventListener('click', () => {
    if (input.value.trim() === "") {
        alert("Please set time")
        return false;
    }
    timer(input.value)
})



