import React, {useContext, useEffect, useState} from "react";
import { ThemeContext } from "./App";
export default function Login ({dispatch}) 
{
    const [username, setUsername] = useState("");
    const Theme = useContext(ThemeContext)
    function handleUsername (evt) 
    {
        setUsername(evt.target.value)
    }

    useEffect(() =>
        console.log(username), [username]
    )

    return(
        <form onSubmit = {(e) => {e.preventDefault(); dispatch({type: 'LOGIN', username})}}>
            <label style={ { color: Theme.primary} }htmlFor="login-username">Username:</label>
            <input type="text" name="login-username" value={username} onChange={handleUsername} 
            id="login-username" />
            <label htmlFor="login-password">Password:</label>
            <input type="password" name="login-password" id="login-password" />
            <input type="submit" value="Login" disabled={username.length === 0} />
        </form>
    );
}