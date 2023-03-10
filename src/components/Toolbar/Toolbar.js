import { createAddRoutineButton } from "./AddRoutineButton";
import { createAddWorkOutButton } from "./AddWorkOutButton";
import { createAllWorkOuts, getAllWorkOuts, setWorkOuts } from "./InputWorkOut";

export const createToolbar = () => {
  const div = document.createElement("div");
  div.classList.add("toolbar");

  const buttonWrap = createButtonWrap();
  div.appendChild(buttonWrap);

  const ele = createTotalWorkOutTime();
  div.appendChild(ele);

  document.body.appendChild(div);
};

const createButtonWrap = () => {
  const buttonWrap = document.createElement("div");
  buttonWrap.classList.add("buttonWrap");

  const addRoutineButton = createAddRoutineButton();
  const AddWorkOutButton = createAddWorkOutButton();
  const deleteWorkOutButton = createDeleteWokrOutButton();

  buttonWrap.appendChild(addRoutineButton);
  buttonWrap.appendChild(AddWorkOutButton);
  buttonWrap.appendChild(deleteWorkOutButton);

  return buttonWrap;
};

const createDeleteWokrOutButton = () => {
  const button = document.createElement("button");
  button.classList.add("deleteWorkOut");
  button.textContent = "삭제";
  button.setAttribute("disabled", true);

  button.addEventListener("click", deleteWorkOut);

  return button;
};

const createTotalWorkOutTime = () => {
  const span = document.createElement("span");

  span.className = "totalWorkOutTime";

  return span;
};

const deleteWorkOut = () => {
  const workOuts = getAllWorkOuts();
  const newWorkOuts = workOuts.filter((item) => {
    if (item.checked) {
      return false;
    }

    return true;
  });
  setWorkOuts(newWorkOuts);
  createAllWorkOuts();
};
