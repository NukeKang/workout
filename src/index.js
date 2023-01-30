import _ from "lodash";
import { createContentsWrap } from "./components/Contents";
import { createDivider, createHeader } from "./components/Header";
import { createToolbar } from "./components/Toolbar";

import { createInputWorkOut } from "./components/Toolbar/InputWorkOut";

import "./styles/main.scss";

createHeader();
createDivider();
createToolbar();
createContentsWrap();
createInputWorkOut();
