// timer


const deadline = 'December 2022 31 23:59'


function getTime(endtime) {
    const t = Date.parse(endtime) - Date.parse(new Date()),
      days = Math.round(t / (1000 * 60 * 60 * 24)),
      hours = Math.round((t / (1000 * 60 * 60)) % 24),
      minutes = Math.round((t / 1000 / 60) % 60),
      seconds = Math.round((t / 1000) % 60);

    return {
        t,
        days,
        hours,
        minutes,
        seconds
    }
}

function setTime(selector, endtime) {
    const timer = document.querySelector(selector),
        days = timer.querySelector('#days'),
        hours = timer.querySelector('#hours'),
        minutes = timer.querySelector('#minutes'),
        seconds = timer.querySelector('#seconds'),
        updateInt = setInterval(updateTime, 1000)


    function updateTime() {
        const t = getTime(endtime)

        days.innerHTML = t.days
        hours.innerHTML = t.hours
        minutes.innerHTML = t.minutes
        seconds.innerHTML = t.seconds

        if(t.t <= 0) {
            clearInterval(updateInt)
        }
    }

}

setTime('.timer',deadline)



