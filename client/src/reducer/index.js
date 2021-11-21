import { combineReducers } from "redux";
import home from "./home";
import addStain from "./add_stain";

import instalationPending from "./instalation_pending";
import login from "./login";
import filters from "./filters";
import viewTask from "./view_task";
import updateTask from "./update_task";

const rootReducer = combineReducers({
  home,
  addStain,
  instalationPending,
  login,
  filters,
  viewTask,
  updateTask,
});

export default rootReducer;
