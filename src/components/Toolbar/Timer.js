import { totalWorkOutTime } from "./InputWorkOut";

const toolbar = document.querySelector(".toolbar");
const div = document.createElement("div");

// let workOutTime = totalWorkOutTime.get();

const createTimer = () => {};

// export const updateTimer = () => {
//   const minutes = Math.floor((workOutTime % (1000 * 60 * 60)) / (1000 * 60));
//   const seconds = Math.floor((workOutTime % (1000 * 60)) / 1000);

//   document.querySelector(
//     ".toolbar"
//   ).innerHTML = `<h1>${minutes}:${seconds}</h1>`;
// };

export const timer = () => {
  let workOutTime = totalWorkOutTime.get();

  setInterval(() => {
    let minutes = parseInt(totalWorkOutTime.get() / 60, 10);
    let seconds = parseInt(totalWorkOutTime.get() % 60, 10);

    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    document.querySelector(
      ".toolbar"
    ).innerHTML = `<h1>${minutes}:${seconds}</h1>`;

    workOutTime--;
    if (workOutTime < 0) {
      clearInterval(timer);
    }
  }, 1000);
};
