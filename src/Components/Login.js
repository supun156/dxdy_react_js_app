import React, {useState} from 'react';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [usernameError, setUsernameError] = useState('')
  const [passwordError, setPasswordError] = useState('')

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
          console.log(result);
        })
    }
  };

  return (
    <form>
      <input
        onChange={(e) => {
          updateInput(e, setUsername, 'username')
        }}
      />
      {usernameError}
      <br/>

      <input
        onChange={(e) => {
          updateInput(e, setPassword, 'password')
        }}
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
