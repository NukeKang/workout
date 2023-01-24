export const createAddWorkOutButton = () => {
  const button = document.createElement("button");
  button.className = "btn addWorkOut";

  document.querySelector(".buttonWrap").appendChild(button);

  const addWorkOutButton = document.querySelector(".addWorkOut");
  addWorkOutButton.textContent = "+ 운동 추가";

  addWorkOutButton.addEventListener("click", showInputWindow);
};

const showInputWindow = () => {
  const div = document.createElement("div");
  div.className = "inputWorkOutContainer";
  document.querySelector(".workOutList").appendChild(div);
  inputWorkOutName();
  inputWorkTimePerSet();
};

const inputWorkOutName = () => {
  const input = document.createElement("input");
  input.setAttribute("type", "text");
  document.querySelector(".inputWorkOutContainer").appendChild(input);
};

const inputWorkTimePerSet = () => {
  const input = document.createElement("input");
  input.setAttribute("type", "number");
  document.querySelector(".inputWorkOutContainer").appendChild(input);
};
