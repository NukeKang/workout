export const createInputWorkOut = () => {
  const form = createForm();

  inputWorkOutName(form);
  inputWorkOutTimePerSet(form);
  inputWorkOutSet(form);
  saveButton(form);
  cancelButton(form);
};

const createForm = () => {
  const form = document.createElement("form");
  form.classList.add("inputWorkOutForm");
  document.querySelector(".workOutListContainer").appendChild(form);

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    addWorkOut(event);

    event.target["name"].value = "";
    event.target["timePerSet"].value = 30;
    event.target["set"].value = 1;
  });

  return form;
};

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

    inputWorkOutForm.classList.remove("active");
  });

  form.appendChild(button);
};

const addWorkOut = (event) => {
  const li = document.createElement("li");

  const checkbox = document.createElement("input");
  checkbox.setAttribute("type", "checkbox");
  checkbox.setAttribute("name", "checkbox");

  const span = document.createElement("span");
  const workOutName = event.target["name"].value;
  const timePerSet = event.target["timePerSet"].value;
  const set = event.target["set"].value;
  span.textContent = `${workOutName} ${timePerSet}초 ${set}세트`;

  li.appendChild(checkbox);
  li.appendChild(span);
  document.querySelector(".workOutListGroup").appendChild(li);
};
