export const createInputWorkOut = () => {
  const form = document.createElement("form");
  form.className = "inputWorkOutForm";
  document.querySelector(".workOutListContainer").appendChild(form);

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    addWorkOut(event);

    event.target["name"].value = "";
    event.target["timePerSet"].value = 30;
    event.target["set"].value = 1;
  });

  inputWorkOutName();
  inputWorkOutTimePerSet();
  inputWorkOutSet();
  saveButton();
  cancelButton();
};

const inputWorkOutName = () => {
  const label = document.createElement("label");
  const input = document.createElement("input");
  label.className = "nameLabel";
  input.id = "workOutName";

  label.setAttribute("for", "workOutName");

  input.setAttribute("required", true);
  input.setAttribute("type", "text");
  input.setAttribute("name", "name");

  document.querySelector(".inputWorkOutForm").appendChild(label);
  document.querySelector(".nameLabel").textContent = "이름";
  document.querySelector(".inputWorkOutForm").appendChild(input);
};

const inputWorkOutTimePerSet = () => {
  const label = document.createElement("label");
  const input = document.createElement("input");
  label.className = "timeLabel";
  input.id = "timePerSet";
  label.setAttribute("for", "timePerSet");

  input.setAttribute("type", "number");
  input.setAttribute("name", "timePerSet");
  input.setAttribute("value", 30);

  input.setAttribute("placeholder", "30");

  document.querySelector(".inputWorkOutForm").appendChild(input);
  document.querySelector(".inputWorkOutForm").appendChild(label);
  document.querySelector(".timeLabel").textContent = "초";
};

const inputWorkOutSet = () => {
  const label = document.createElement("label");
  const input = document.createElement("input");
  label.className = "setLabel";
  input.id = "workOutSet";

  label.setAttribute("for", "workOutSet");

  input.setAttribute("type", "number");
  input.setAttribute("value", 1);

  input.setAttribute("name", "set");

  input.setAttribute("placeholder", "1");

  document.querySelector(".inputWorkOutForm").appendChild(input);
  document.querySelector(".inputWorkOutForm").appendChild(label);
  document.querySelector(".setLabel").textContent = "세트";
};

const saveButton = () => {
  const button = document.createElement("button");
  button.className = "btn saveWorkOut";
  button.setAttribute("type", "submit");

  document.querySelector(".inputWorkOutForm").appendChild(button);
  document.querySelector(".saveWorkOut").textContent = "저장";
};

const cancelButton = () => {
  const button = document.createElement("button");
  button.className = "btn cancel";
  button.type = "button";

  document.querySelector(".inputWorkOutForm").appendChild(button);
  document.querySelector(".cancel").textContent = "취소";

  button.addEventListener("click", () => {
    const inputWorkOutForm = document.querySelector(".inputWorkOutForm");

    inputWorkOutForm.classList.remove("active");
  });
};

const addWorkOut = (event) => {
  const li = document.createElement("li");
  const checkbox = document.createElement("input");
  const span = document.createElement("span");

  li.appendChild(checkbox);

  checkbox.setAttribute("type", "checkbox");
  checkbox.setAttribute("name", "checkbox");

  document.querySelector(".workOutListGroup").appendChild(li);
  li.appendChild(span);
  span.textContent = `${event.target["name"].value} ${event.target["timePerSet"].value}초 ${event.target["set"].value}세트`;
};
