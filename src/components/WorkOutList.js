export const createWorkOutList = () => {
  const wrap = document.createElement("div");
  const div = document.createElement("div");

  wrap.className = "workOutlistWrap";
  div.className = "workOutList";
  document.querySelector(".contentsWrap").appendChild(wrap);
  document.querySelector(".workOutlistWrap").appendChild(div);

  workOutStartButton();
};

const workOutStartButton = () => {
  const div = document.createElement("div");
  const button = document.createElement("button");

  div.className = "startButtonWrap";

  document.querySelector(".workOutlistWrap").appendChild(div);

  button.className = "btn workOutStart";
  document.querySelector(".startButtonWrap").appendChild(button);
  document.querySelector(".workOutStart").textContent = "운동 시작";
};
