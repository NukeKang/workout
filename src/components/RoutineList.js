import { inputRoutineName } from "./Toolbar/InputRoutine";
let routines = [];
let id = 0;
let targetId;
let editMode = false;

export const createRoutineList = () => {
  const div = document.createElement("div");
  div.classList.add("routineList");

  const ul = document.createElement("ul");
  ul.id = "routineListGroup";

  const form = document.createElement("form");
  form.classList.add("inputRoutineForm");
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    if (editMode) {
      editRoutines(event.target["routineName"].value, targetId);
    } else {
      appendRoutines(event.target["routineName"].value);
    }

    createAllRoutines();

    event.target["routineName"].value = "";
    editMode = false;
    form.classList.remove("active");
  });

  div.appendChild(form);
  div.appendChild(ul);
  inputRoutineName(form);

  return div;
};

const setRoutines = (newRoutines) => {
  const sortedRoutines = newRoutines.sort((a, b) => {
    if (a.id < b.id) {
      return 1;
    }
    if (a.id > b.id) {
      return -1;
    }

    return 0;
  });
  routines = sortedRoutines;
};

const getAllRoutines = () => {
  return routines;
};

const appendRoutines = (name) => {
  const newId = id++;
  const newWorkOuts = getAllRoutines().concat({
    id: newId,
    checked: false,
    routineName: name,
  });

  setRoutines(newWorkOuts);
};

const createAllRoutines = () => {
  document.querySelector("#routineListGroup").innerHTML = null;

  const inputRoutineForm = document.querySelector(".inputRoutineForm");
  const allRoutines = getAllRoutines();

  allRoutines.forEach((item) => {
    const li = document.createElement("li");
    li.classList.add("routineItem");
    li.setAttribute("data-id", item.id);
    li.addEventListener("click", (event) => {
      document
        .querySelectorAll("#routineListGroup li")
        .forEach((q) => q.classList.remove("active"));
      event.currentTarget.classList.toggle("active");
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
    event.stopPropagation();

    targetId = item.id;
    document.getElementById("routineName").value = item.routineName;

    editMode = true;
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

    targetId = item.id;
    deleteRoutine();
  });

  return deleteButton;
};

const deleteRoutine = () => {
  const routines = getAllRoutines();
  const inputRoutineForm = document.querySelector(".inputRoutineForm");

  const newRoutines = routines.filter((item) => {
    if (item.id === targetId) {
      return false;
    }

    return true;
  });

  if (inputRoutineForm.classList.contains("active")) {
    inputRoutineForm.classList.remove("active");
  }

  if (confirm("정말 삭제하나요?")) {
    setRoutines(newRoutines);
    createAllRoutines();
  }
};
