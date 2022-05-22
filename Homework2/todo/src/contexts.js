import { createContext, useReducer } from "react";
import appReducer from "./reducers";

export const StateContext = createContext(useReducer(appReducer, {user: '',todos: []}))