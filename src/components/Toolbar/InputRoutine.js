import { editMode } from "../RoutineList";

export const inputRoutineName = (form) => {
  const input = document.createElement("input");

  input.id = "routineName";
  input.setAttribute("autocomplete", "off");
  input.setAttribute("required", true);
  input.setAttribute("type", "text");
  input.setAttribute("name", "routineName");

  input.addEventListener("keydown", (event) => {
    if (event.defaultPrevented) {
      return;
    }

    const key = event.key || event.keyCode;

    if (key === "Escape" || key === "Esc" || key === 27) {
      editMode.set(false);
      document.querySelector("#routineName").value = "";
      form.classList.remove("active");
    }
  });

  form.appendChild(input);
};
