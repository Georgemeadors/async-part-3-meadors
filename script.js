// // Implementing an alarm ()API
// // setTimeout excutes a function with a TimeRanges

// const output = document.querySelector("#output");
// const button = document.querySelector("#set-alarm");

// function setAlarm() {
//     setTimeout(() => {
//         output.textContent = "Wake up!";

//     }, 1000);
// }
// button.addEventListener("click", setAlarm);


// Using the alarm() API
// const myName = document.querySelector("#myName");
// const delay = document.querySelector("#delay");
// const button = document.querySelector("set-alarm");
// const output = document.querySelector("#output");

// function alarm(person, delay) {
//     return new Promise((resolve) =>  {
//         if (delay < 0) {
//             throw new Error("Alarm delay must not be negative");
//         }

//         setTimeout(() => {
//             resolve(`Wake up, ${person}!`);
//         }, delay);
//     });
// }

// button.addEventListener("click", () => {
//     alarm(myName.value, delay.value)
//     .then((message) => (output.textContent =message))
//     .catch((error) => (output.textContent =`Couldn"t set alarm: ${error}`));

// })


// Using async and await with the alarm()API

