import { combineReducers } from "redux";

import home from "./home";
import addStain from "./add_stain";

import group from "./group";
import addGroup from "./add_group";
import updateGroup from "./update_group";

import login from "./login";

const rootReducer = combineReducers({
  home,
  group,
  addStain,
  addGroup,
  login,
  updateGroup,
});

export default rootReducer;
