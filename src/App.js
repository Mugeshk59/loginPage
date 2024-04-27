import React, { useState } from "react";

const App = () => {
  const [userName, setUserName] = useState("");
  const [passWord, setPassWord] = useState("");
  const [isLogged, setIsLogged] = useState(false);
  const [message, setMessage] = useState(""); // Corrected: Using state for message

  const userNameHandler = (e) => {
    setUserName(e);
  };

  const passWordHandler = (e) => {
    setPassWord(e);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (userName === "user" && passWord === "password") {
      setIsLogged(true);
    } else {
      setMessage("Invalid username or password");
    }
  };

  return (
    <div className="Container">
      <h1>Login Page</h1>
      {!isLogged && (
        <>
          <p>{message}</p>
          <form onSubmit={submitHandler}>
            <label>Username:</label>
            <input
              type="text"
              id="Username"
              value={userName}
              placeholder="username"
              onChange={(e) => userNameHandler(e.target.value)}
              required
            ></input>
            <br />
            <label>Password:</label>
            <input
              type="password"
              id="Password"
              value={passWord}
              placeholder="password"
              onChange={(e) => passWordHandler(e.target.value)}
              required
            ></input>
            <br />
            <button>Submit</button>
          </form>
        </>
      )}
      {isLogged && <p>Welcome, {userName}!</p>}
    </div>
  );
};

export default App;
