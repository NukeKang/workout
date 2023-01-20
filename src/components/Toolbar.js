export const createToolbar = () => {
  const div = document.createElement("div");

  div.className = "toolbar";
  document.body.appendChild(div);

  createAddRoutineButton();
  createAddWorkOutButton();
};

const createAddRoutineButton = () => {
  const button = document.createElement("button");
  button.className = "btn addRoutine";
  document.querySelector(".toolbar").appendChild(button);
  document.querySelector(".addRoutine").textContent = "새 운동 루틴 +";
};

const createAddWorkOutButton = () => {
  const button = document.createElement("button");
  button.className = "btn addWorkOut";
  document.querySelector(".toolbar").appendChild(button);
  document.querySelector(".addWorkOut").textContent = "+ 운동 추가";
};

const createDeleteWokrOutButton = () => {};
