import { newTargetRoutineId } from "../RoutineList";

let editMode = false;
let workOuts = [
  {
    routineId: 1,
    id: 1,
    checked: false,
    workOutName: "벤치프레스",
    timePerSet: "2",
    wholeSet: "2",
  },
];
let id = 0;
let targetId;

const handleTotalWorkOutTime = () => {
  let totalWorkOutTime = "";

  return {
    get: () => {
      return totalWorkOutTime;
    },
    set: (newTotalWorkOutTime) => {
      totalWorkOutTime = newTotalWorkOutTime;
    },
  };
};

export const totalWorkOutTime = handleTotalWorkOutTime();

export const createInputWorkOut = () => {
  const form = createForm();

  inputWorkOutName(form);
  inputWorkOutTimePerSet(form);
  inputWorkOutSet(form);
  saveButton(form);
  cancelButton(form);
};

const editWorkOuts = (name, time, set, workOutId) => {
  const workOuts = getAllWorkOuts();
  const newWorkOuts = workOuts.map((item) =>
    item.id === workOutId
      ? {
          ...item,
          workOutName: name,
          timePerSet: time,
          wholeSet: set,
        }
      : item
  );

  setWorkOuts(newWorkOuts);
};
const createForm = () => {
  const form = document.createElement("form");
  form.classList.add("inputWorkOutForm");
  document.querySelector(".workOutListContainer").appendChild(form);

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    if (editMode) {
      editWorkOuts(
        event.target["name"].value,
        event.target["timePerSet"].value,
        event.target["set"].value,
        targetId
      );
    } else {
      appendWorkOuts(
        event.target["name"].value,
        event.target["timePerSet"].value,
        event.target["set"].value
      );
    }

    createAllWorkOuts();

    event.target["name"].value = "";
    event.target["timePerSet"].value = 30;
    event.target["set"].value = 1;
    editMode = false;
    form.classList.remove("active");
  });

  return form;
};
// setTimeout(() => {
//   createAllWorkOuts();
// }, 500);

const inputWorkOutName = (form) => {
  const label = document.createElement("label");
  label.classList.add("nameLabel");
  label.setAttribute("for", "workOutName");
  label.textContent = "이름";

  const input = document.createElement("input");
  input.id = "workOutName";
  input.setAttribute("required", true);
  input.setAttribute("type", "text");
  input.setAttribute("name", "name");

  form.appendChild(label);
  form.appendChild(input);
};

const inputWorkOutTimePerSet = (form) => {
  const label = document.createElement("label");
  label.classList.add("timeLabel");
  label.setAttribute("for", "timePerSet");
  label.textContent = "초";

  const input = document.createElement("input");
  input.id = "timePerSet";
  input.setAttribute("type", "number");
  input.setAttribute("name", "timePerSet");
  input.setAttribute("value", 30);
  input.setAttribute("placeholder", "30");

  form.appendChild(label);
  form.appendChild(input);
};

const inputWorkOutSet = (form) => {
  const label = document.createElement("label");
  label.classList.add("setLabel");
  label.setAttribute("for", "workOutSet");
  label.textContent = "세트";

  const input = document.createElement("input");
  input.id = "workOutSet";
  input.setAttribute("type", "number");
  input.setAttribute("value", 1);
  input.setAttribute("name", "set");
  input.setAttribute("placeholder", "1");

  form.appendChild(label);
  form.appendChild(input);
};

const saveButton = (form) => {
  const button = document.createElement("button");
  button.classList.add("saveWorkOutButton");
  button.setAttribute("type", "submit");
  button.textContent = "저장";

  form.appendChild(button);
};

const cancelButton = (form) => {
  const button = document.createElement("button");
  button.classList.add("cancelButton");
  button.type = "button";
  button.textContent = "취소";
  button.addEventListener("click", () => {
    const inputWorkOutForm = document.querySelector(".inputWorkOutForm");
    document.getElementById("workOutName").value = "";
    document.getElementById("timePerSet").value = 30;
    document.getElementById("workOutSet").value = 1;
    inputWorkOutForm.classList.remove("active");
  });

  form.appendChild(button);
};

export const setWorkOuts = (newWorkOuts) => {
  workOuts = newWorkOuts;
};

export const getAllWorkOuts = () => {
  return workOuts;
};

const appendWorkOuts = (name, time, set) => {
  const newId = id++;
  const newWorkOuts = getAllWorkOuts().concat({
    routineId: newTargetRoutineId.get(),
    id: newId,
    checked: false,
    workOutName: name,
    timePerSet: time,
    wholeSet: set,
  });

  setWorkOuts(newWorkOuts);
};
// ms => 년 월 일 시 분 초로 변환 시키는 함수 만들기.
function msConvertToDate(ms) {
  let second;
  let minute;
  let hour;
  let day;
  let month;
  let year;

  second = Math.floor((ms / 1000) % 60);
  minute = Math.floor((ms / 1000 / 60) % 60);
  hour = Math.floor((ms / 1000 / 60 / 60) % 24);
  day = Math.floor((ms / 1000 / 60 / 60 / 24) % 30);
  month = Math.floor((ms / 1000 / 60 / 60 / 24 / 30) % 12);
  year = Math.floor(ms / 1000 / 60 / 60 / 24 / 30 / 12);

  return {
    second,
    minute,
    hour,
    day,
    month,
    year,
  };
}

const convertSecToTimeString = (sec) => {
  const minutes = parseInt((sec % 3600) / 60);
  const seconds = sec % 60;

  return `${minutes}분 ${seconds}초`;
};

export const createAllWorkOuts = () => {
  document.querySelector(".workOutListGroup").innerHTML = null;
  const inputWorkOutForm = document.querySelector(".inputWorkOutForm");

  const filteredAllWorkOuts = getAllWorkOuts().filter((item) => {
    if (item.routineId === newTargetRoutineId.get()) {
      return true;
    }

    return false;
  });

  totalWorkOutTime.set(
    filteredAllWorkOuts.reduce(
      (acc, cur) => acc + Number(cur.timePerSet * cur.wholeSet),
      0
    )
  );

  document.querySelector(
    "body > div.toolbar > span"
  ).innerHTML = `전체시간 ${convertSecToTimeString(totalWorkOutTime.get())}`;

  filteredAllWorkOuts.forEach((item) => {
    const li = document.createElement("li");
    li.classList.add("workoutItem");

    const checkbox = document.createElement("input");
    checkbox.setAttribute("type", "checkbox");
    checkbox.setAttribute("name", "checkbox");
    // checkbox.checked = true;
    checkbox.addEventListener("click", () => {
      if (item.checked) {
        item.checked = false;
      } else {
        item.checked = true;
      }

      // if (isExistCheckedBoxes()) {
      //   document
      //     .querySelector(".workOutStartButton")
      //     .removeAttribute("disabled");
      // } else {
      //   document
      //     .querySelector(".workOutStartButton")
      //     .setAttribute("disabled", true);
      // }
    });

    const span = document.createElement("span");
    span.textContent = `${item.workOutName} ${item.timePerSet}초 ${item.wholeSet}세트`;

    const button = document.createElement("button");
    button.textContent = "✏️";
    button.addEventListener("click", () => {
      targetId = item.id;
      document.getElementById("workOutName").value = item.workOutName;
      document.getElementById("timePerSet").value = item.timePerSet;
      document.getElementById("workOutSet").value = item.wholeSet;

      editMode = true;
      inputWorkOutForm.classList.add("active");
    });

    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(button);
    document.querySelector(".workOutListGroup").appendChild(li);
  });
};

// const isExistCheckedBoxes = () => {
//   const checkboxes = document.getElementsByName("checkbox");
//   let isTrue = [...checkboxes].some(isChecked);

//   if (isTrue) return true;

//   return false;
// };

// const isChecked = (item) => {
//   return item.checked;
// };
