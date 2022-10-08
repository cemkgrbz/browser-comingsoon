
const newYear = new Date('1 January 2023');
console.log("🚀 ~ newYear", newYear)


const days = 1000 * 60 * 60 * 24
const hours = 1000 * 60 * 60
const minutes = 1000 * 60
const seconds = 1000



function countDown() {
    const now = Date.now() // ms from 1/1/1970
    const diff = newYear - now

    const daysLeft = Math.floor(diff / (days))
    const hoursLeft = Math.floor((diff % days) / hours)
    const minutesLeft = Math.floor(((diff % days) % hours) / minutes)
    const secondsLeft = Math.floor(((diff % days) % hours) % minutes / seconds)

    const remDays = (document.querySelector(".days").textContent = `${daysLeft} days`)
    const remHours = (document.querySelector(".hours").textContent = `${hoursLeft} hours`);
    const remMinutes = (document.querySelector(".minutes").textContent =
    `${minutesLeft} minutes`);
    const remSeconds = (document.querySelector(".seconds").textContent =
    `${secondsLeft} seconds`);
}

const interval = setInterval(countDown, 1000)


