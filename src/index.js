import { createContentsWrap } from "./components/Contents";
import { createDivider, createHeader } from "./components/Header";
import { createToolbar } from "./components/Toolbar";
import { createInputWorkOut } from "./components/Toolbar/InputWorkOut";
import { createWorkOutStartButton } from "./components/WokrOutStartButton";

import "./styles/main.scss";

createHeader();
createDivider();
createToolbar();
createContentsWrap();
createInputWorkOut();

const workOutStartButton = createWorkOutStartButton();
document.body.appendChild(workOutStartButton);
