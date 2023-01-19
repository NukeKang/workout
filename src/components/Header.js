export const createHeader = () => {
  const header = document.createElement("header");
  document.body.appendChild(header);

  const h1 = document.createElement("h1");
  h1.className = "headerText";
  document.querySelector("header").appendChild(h1);

  document.querySelector(".headerText").textContent = "매일 운동 루틴";

  return header;
};
