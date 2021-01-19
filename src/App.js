import React, { useState, useEffect } from "react";

const App = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState();
  const [credentials, setCredentials] = useState();

  // useEffect(() => {
  //   const loggedInUser = localStorage.getItem("user");
  //   if (loggedInUser) {
      
  //   }
  // }, []);

  // logout the user
  const handleLogout = () => {
    setUser(undefined);
    setUsername("");
    setPassword("");
    localStorage.clear();
  };

  // login the user
  const handleLogin = async e => {
    e.preventDefault();
    const userlogin = { username, password };
    const localUsername = localStorage.getItem("username");
    const localPassword = localStorage.getItem("password");
    if (localUsername !== username || localPassword !== password) {
      alert("Username or Pasword are incorrect, or you are not Sign Up yet")
    } else {
      setUser(userlogin);
      alert("login de " + userlogin.username);
    }

  };

  // sign up the user
  const handleSignUp = async e => {
    e.preventDefault();
    const usersignup = { username, password };
    setCredentials(usersignup);
    localStorage.setItem('username', username);
    localStorage.setItem('password', password);
    alert("You can login now with this credentials");
  };

  // if there's a user show the message below
  if (user !== undefined) {
    return (
      <div>
        {user.name} is logged in
        <button onClick={handleLogout}>logout</button>
      </div>
    );
  }

  // if there's no user, show the login form
  return (
    <div>
      <form onSubmit={handleLogin}>
        <label htmlFor="username">Username: </label>
        <input
          type="text"
          value={username}
          placeholder="enter a username"
          onChange={({ target }) => setUsername(target.value)}
        />
        <div>
          <label htmlFor="password">password: </label>
          <input
            type="password"
            value={password}
            placeholder="enter a password"
            onChange={({ target }) => setPassword(target.value)}
          />
        </div>
        <input type="submit" value="Login"/>
        <p>or</p>
        <input onClick={handleSignUp} type="submit" value="Sign Up"/>
      </form>
    </div>
  );
};

export default App;
