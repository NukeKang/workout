export const createWorkOutList = () => {
  const wrap = document.createElement("div");
  wrap.classList.add("workOutlistWrap");

  const container = document.createElement("div");
  container.classList.add("workOutListContainer");

  const ul = document.createElement("ul");
  ul.classList.add("workOutListGroup");

  const workOutButton = createWorkOutButtonWrap();

  wrap.appendChild(container);
  wrap.appendChild(workOutButton);
  container.appendChild(ul);

  return wrap;
};

const createWorkOutButtonWrap = () => {
  const div = document.createElement("div");
  div.classList.add("startButtonWrap");

  return div;
};
