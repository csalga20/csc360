import React, { useState } from "react";
import Login from "./Login";
import Logout from "./Logout";
import Registration from "./Registration";

export default function UserBar({user, setUser}) {
  
  if (user) {
    return <Logout user={user} setUser={setUser} />;
  } else {
    return (
      <>
        <Login setUser={setUser} />
        <Registration setUser={setUser} />
      </>
    );
  }
}