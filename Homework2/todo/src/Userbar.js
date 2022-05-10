import React, { useState } from "react";
import Login from "./Login";
import Logout from "./Logout";
import Registration from "./Registration";

export default function UserBar({user, dispatch}) {
  
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