import { getAllRoutines, newTargetRoutineId } from "./RoutineList";
import { getAllWorkOuts } from "./Toolbar/InputWorkOut";
import { timer, updateTimer } from "./Toolbar/Timer";

export const createWorkOutStartButton = () => {
  const button = document.createElement("button");
  button.classList.add("workOutStartButton");
  button.textContent = "운동 시작";
  button.setAttribute("disabled", true);

  button.addEventListener("click", () => {
    startRoutine();
    timer();
    document.querySelector("body > div.contentsWrap").addEventListener(
      "click",
      (event) => {
        event.stopPropagation();
      },
      true
    );
  });

  return button;
};

const startRoutine = () => {
  const filteredRoutine = getAllRoutines().filter((item) => {
    if (item.id === newTargetRoutineId.get()) {
      return true;
    }
  });
  const filteredWorkOuts = getAllWorkOuts().filter((item) => {
    if (item.routineId === newTargetRoutineId.get()) {
      return true;
    }
  });
  console.log(filteredWorkOuts);
  const selectedRoutine = filteredRoutine[0].routineName;
  const workOut = getAllWorkOuts()[0];
  let count = workOut.timePerSet;
  let set = workOut.wholeSet;

  const start = () => {
    document.querySelector(
      "body > header"
    ).innerHTML = `<h1>${selectedRoutine} ${workOut.workOutName} ${count} / ${workOut.timePerSet} ${set}세트 진행 중</h1>`;

    if (count === 0) {
      set--;

      if (set === 0) {
        document.querySelector(
          "body > header"
        ).innerHTML = `<h1>${selectedRoutine} 완료</h1>`;
        return false;
      } else {
        count = workOut.timePerSet;
      }
    } else {
      count--;
    }

    setTimeout(() => {
      start();
    }, 1000);
  };
  start();
};
