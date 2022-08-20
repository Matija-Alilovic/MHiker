import { configureStore } from "@reduxjs/toolkit";
import thunkMiddleware from "redux-thunk";

import authReducer from "./reducers/authReducer";
import trailReducer from "./reducers/trailReducer";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    trails: trailReducer,
  },
});
