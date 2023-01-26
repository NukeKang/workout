import { createRoutineList } from "./RoutineList";
import { createWorkOutList } from "./WorkOutList";

export const createContentsWrap = () => {
  const div = document.createElement("div");
  div.classList.add("contentsWrap");

  const routineList = createRoutineList();
  const workOutList = createWorkOutList();

  div.appendChild(routineList);
  div.appendChild(workOutList);

  document.body.appendChild(div);
};
