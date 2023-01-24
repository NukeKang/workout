import { createAddWorkOutButton } from "./AddWorkOutButton";

export const createToolbar = () => {
  const div = document.createElement("div");
  const buttonWrap = document.createElement("div");

  div.className = "toolbar";
  buttonWrap.className = "buttonWrap";
  document.body.appendChild(div);
  document.querySelector(".toolbar").appendChild(buttonWrap);

  createAddRoutineButton();
  createAddWorkOutButton();
  createDeleteWokrOutButton();
  createTotalWorkOutTime();
};

const createAddRoutineButton = () => {
  const button = document.createElement("button");
  button.className = "btn addRoutine";
  document.querySelector(".buttonWrap").appendChild(button);
  document.querySelector(".addRoutine").textContent = "새 운동 루틴 +";
};

const createDeleteWokrOutButton = () => {
  const button = document.createElement("button");
  button.className = "btn deleteWorkOut";
  document.querySelector(".buttonWrap").appendChild(button);
  document.querySelector(".deleteWorkOut").textContent = "삭제";
};

const createTotalWorkOutTime = () => {
  const span = document.createElement("span");
  span.className = "totalWorkOutTime";
  document.querySelector(".toolbar").appendChild(span);
  document.querySelector(".totalWorkOutTime").textContent =
    "전체 시간: 7분 20초";
};
