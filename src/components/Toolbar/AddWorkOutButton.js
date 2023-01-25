export const createAddWorkOutButton = () => {
  const button = document.createElement("button");
  button.className = "btn addWorkOut";

  document.querySelector(".buttonWrap").appendChild(button);

  const addWorkOutButton = document.querySelector(".addWorkOut");
  addWorkOutButton.textContent = "+ 운동 추가";

  addWorkOutButton.addEventListener("click", showInputWindow);
};

const showInputWindow = () => {
  const inputWorkOutForm = document.querySelector(".inputWorkOutForm");

  inputWorkOutForm.classList.add("active");
};
