export const createAddRoutineButton = () => {
  const button = document.createElement("button");
  button.classList.add("addRoutineButton");
  button.textContent = "새 운동 루틴 +";
  button.addEventListener("click", showInputWindow);

  return button;
};

const showInputWindow = () => {
  const inputRoutineForm = document.querySelector(".inputRoutineForm");
  inputRoutineForm.classList.add("active");
};
