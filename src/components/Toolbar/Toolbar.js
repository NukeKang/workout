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

  const ele = createTotalWorkOutTime();
  div.appendChild(ele);
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

  button.addEventListener("click", deleteWorkOut);
};

const createTotalWorkOutTime = () => {
  const span = document.createElement("span");
  span.className = "totalWorkOutTime";
  span.textContent = "전체 시간: 0초";

  return span;

  // document.querySelector(".toolbar").appendChild(span);
};

const deleteWorkOut = () => {
  const removeCheckBoxes = document.getElementsByName("checkbox");

  for (let i = 0; i < removeCheckBoxes.length; i++) {
    if (removeCheckBoxes[i].checked) {
      removeCheckBoxes[i].parentElement.remove();
    }
  }
};
