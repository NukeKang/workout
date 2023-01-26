export const createAddWorkOutButton = () => {
  const button = document.createElement("button");
  button.classList.add("addWorkOut");
  button.textContent = "+ 운동 추가";

  button.addEventListener("click", showInputWindow);

  return button;
};

const showInputWindow = () => {
  const inputWorkOutForm = document.querySelector(".inputWorkOutForm");

  inputWorkOutForm.classList.add("active");
};
