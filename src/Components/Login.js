import React, {useState} from 'react';
import { useHistory } from 'react-router-dom';

function Login() {
  const [username, setUsername] = useState('eve.holt@reqres.in');
  const [password, setPassword] = useState('cityslicka');
  const [usernameError, setUsernameError] = useState('')
  const [passwordError, setPasswordError] = useState('')

  const history = useHistory();

  const updateInput = (e, callback) => {

    callback(e.target.value);
  }

  //Clicked Login button
  const clickLogin = (e) => {
    e.preventDefault();
    setUsernameError("");
    setPasswordError("");

    //to API

    if (username === '') {
      setUsernameError("Username can't be empty");
    }

    if (password === '') {
      setPasswordError("Password can't be empty");
    }

    if (username !== "" && password !== "") {
      fetch("https://reqres.in/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({ email: username, password: password}),
      })
      .then((res) => res.json())

      .then((result) => {
        if (result.token !== "") {
          history.push("profile");
        };
      })
    }
  };

  return (
    <form>
      <input
        onChange={(e) => {
          updateInput(e, setUsername, 'username')
        }}
        value = {username}
      />
      {usernameError}
      <br/>

      <input
        onChange={(e) => {
          updateInput(e, setPassword, 'password')
        }}
        value = {password}
      />
      {passwordError}
      <br/>

      <button
        onClick={(e) => {
          clickLogin(e);
        }}>
          Login
      </button>
      <br/>
    </form>
  );
}

export default Login;
