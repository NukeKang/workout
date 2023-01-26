export const createHeader = () => {
  const header = document.createElement("header");
  const h1 = document.createElement("h1");

  h1.classList.add("headerText");
  h1.textContent = "매일 운동 루틴";

  header.appendChild(h1);
  document.body.appendChild(header);
};

export const createDivider = () => {
  const div = document.createElement("div");
  div.className = "divider";
  document.body.appendChild(div);
};
