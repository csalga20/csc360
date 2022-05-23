import React, { useContext, useState } from "react";
import Login from "./Login";
import Logout from "./Logout";
import Registration from "./Registration";
import StateContext from "./Contexts";

export default function UserBar({user, dispatch}) {
  //const user = useContext(StateContext)

  if (user) {
    return <Logout user={user} dispatch={dispatch} />;
  } else {
    return (
      <div>
        <Login dispatch={dispatch} />
        <Registration dispatch={dispatch} />
      </div>
    );
  }
}