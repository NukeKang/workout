import { inputRoutineName } from "./Toolbar/InputRoutine";
import { createAllWorkOuts } from "./Toolbar/InputWorkOut";

let routines = [];
let id = 0;

const handleEditMode = () => {
  let editMode = false;

  return {
    get: () => {
      return;
    },
    set: (boolean) => {
      //키워드 예약어
      editMode = boolean;
    },
  };
};

export const editMode = handleEditMode();

const targetRoutine = () => {
  let targetRoutineId = 1;
  return {
    get: () => {
      return targetRoutineId;
    },
    set: (newRoutineId) => {
      targetRoutineId = newRoutineId;
    },
  };
};

export const newTargetRoutineId = targetRoutine();

export const createRoutineList = () => {
  // create -> paint, wrapper
  const div = document.createElement("div");
  div.classList.add("routineList");

  const ul = document.createElement("ul");
  ul.id = "routineListGroup";

  const form = document.createElement("form");
  form.classList.add("inputRoutineForm");
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    if (editMode.get()) {
      // isEditMode, 변수명 짓기 좀더 확실하게
      // 2번 이상 쓰는 것들은 변수로 빼버리기 event.target["routineName"].value
      editRoutines(event.target["routineName"].value, newTargetRoutineId.get());
    } else {
      appendRoutines(event.target["routineName"].value);
    }

    createAllRoutines();

    event.target["routineName"].value = "";
    editMode.set(false);
    form.classList.remove("active");
  });

  div.appendChild(form);
  div.appendChild(ul);
  inputRoutineName(form);

  return div;
};

const setRoutines = (newRoutines) => {
  const sortedRoutines = newRoutines.sort((a, b) => b.id - a.id);
  routines = sortedRoutines;
};

export const getAllRoutines = () => {
  return routines;
};

const appendRoutines = (name) => {
  const newId = id++;
  const newWorkOuts = getAllRoutines().concat({
    id: newId,
    routineName: name,
  });
  // id로 찾는 것이 더 명확(부채), 한번 찾아놓은것은 따로 관리하는 방법도 고민해보기.
  const inputWorkOutForm = document.querySelector(".inputWorkOutForm");

  setRoutines(newWorkOuts);
  // 의존성 문제, body부터 찾아들어가게됨. DI 의존성 문제에 대해서 고민. component에 대한 고민부터. why
  document
    .querySelector("body > div.toolbar > div > button.addWorkOut")
    .setAttribute("disabled", true);
  document
    .querySelector("body > div.toolbar > div > button.deleteWorkOut")
    .setAttribute("disabled", true);

  if (inputWorkOutForm.classList.contains("active")) {
    inputWorkOutForm.classList.remove("active");
  }
  newTargetRoutineId.set(newId);
  createAllWorkOuts();
};

const createAllRoutines = () => {
  document.querySelector("#routineListGroup").innerHTML = null;

  const allRoutines = getAllRoutines();

  allRoutines.forEach((item) => {
    const li = document.createElement("li");
    li.classList.add("routineItem");
    li.addEventListener("click", (event) => {
      document
        .querySelectorAll("#routineListGroup li")
        .forEach((q) => q.classList.remove("active"));
      event.currentTarget.classList.toggle("active");
      newTargetRoutineId.set(item.id);

      document.querySelector(".workOutStartButton").removeAttribute("disabled");
      document
        .querySelector("body > div.toolbar > div > button.addWorkOut")
        .removeAttribute("disabled");
      document
        .querySelector("body > div.toolbar > div > button.deleteWorkOut")
        .removeAttribute("disabled");

      createAllWorkOuts();
    });

    const span = document.createElement("span");
    span.textContent = item.routineName;

    const editButton = createEditButton(item);
    const deleteButton = createDeletebutton(item);

    li.appendChild(span);
    li.appendChild(editButton);
    li.appendChild(deleteButton);

    document.querySelector("#routineListGroup").appendChild(li);
  });
};

const createEditButton = (item) => {
  const inputRoutineForm = document.querySelector(".inputRoutineForm");
  const editButton = document.createElement("button");
  editButton.textContent = "✏️";
  editButton.addEventListener("click", (event) => {
    event.stopPropagation(); // dlqps

    newTargetRoutineId.set(item.id);
    document.getElementById("routineName").value = item.routineName;

    editMode.set(true);
    inputRoutineForm.classList.add("active");
  });

  return editButton;
};

const editRoutines = (name, routineId) => {
  const routines = getAllRoutines();
  const newRoutines = routines.map((item) =>
    item.id === routineId
      ? {
          ...item,
          routineName: name,
        }
      : item
  );

  setRoutines(newRoutines);
};

const createDeletebutton = (item) => {
  const deleteButton = document.createElement("button");
  deleteButton.textContent = "🗑️";

  deleteButton.addEventListener("click", (event) => {
    event.stopPropagation();

    newTargetRoutineId.set(item.id);

    deleteRoutine();
  });

  return deleteButton;
};

const deleteRoutine = () => {
  const routines = getAllRoutines();
  const inputRoutineForm = document.querySelector(".inputRoutineForm");
  // 함수 열지 않고
  const newRoutines = routines.filter(
    (item) => item.id !== newTargetRoutineId.get()
  );

  if (inputRoutineForm.classList.contains("active")) {
    inputRoutineForm.classList.remove("active");
  }

  if (confirm("정말 삭제하나요?")) {
    setRoutines(newRoutines);
    createAllRoutines();
  }
};
