import { createContext, useReducer } from "react";
import appReducer from "./reducers";


const StateContext = createContext(
    { 
      state: {},
      dispatch: () => {}
    }
)

export default StateContext;