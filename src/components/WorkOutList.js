export const createWorkOutList = () => {
  const wrap = document.createElement("div");
  const container = document.createElement("div");
  const ul = document.createElement("ul");

  wrap.className = "workOutlistWrap";
  container.className = "workOutListContainer";
  ul.className = "workOutListGroup";

  document.querySelector(".contentsWrap").appendChild(wrap);
  document.querySelector(".workOutlistWrap").appendChild(container);
  document.querySelector(".workOutListContainer").appendChild(ul);

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
