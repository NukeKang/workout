import { createRoutineList } from "./RoutineList";
import { createWorkOutList } from "./WorkOutList";

export const createContentsWrap = () => {
  const div = document.createElement("div");
  div.className = "contentsWrap";

  document.body.appendChild(div);

  createRoutineList();
  createWorkOutList();
};
