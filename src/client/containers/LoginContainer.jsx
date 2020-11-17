import React, { useState } from 'react';

const LoginContainer = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const emailOnChange = (e) => {
    setEmail(e.target.value);
  };

  const passwordOnChange = (e) => {
    setPassword(e.target.value);
  };

  const submit = (path) => {
    // client-side validation
    if (email.trim() === '' || password.trim() === '') {
      return;
    }
    console.log(email, password);
    fetch(`/${path}`, {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: {
        'Content-type': 'Application/json',
      },
    })
      .then((data) => data.json())
      .then((data) => {
        setEmail('');
        setPassword('');
        // if successfully set user in db, do something
        console.log('successfully set user!');
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <div className="signup">
      <h2>Sign Up</h2>
      <div className="login-signup-wrapper">
        <div className="inputs">
          <div className="input-border">
            <input
              className="input-field"
              id="input-email"
              type="text"
              value={email}
              onChange={emailOnChange}
              placeholder="Email"
            ></input>
          </div>
          <br></br>
          <div className="input-border">
            <input
              className="input-field"
              id="input-password"
              type="password"
              value={password}
              onChange={passwordOnChange}
              placeholder="Password"
            ></input>
          </div>
          <br></br>
        </div>
        <div className="buttonDiv">
          <button
            type="submit"
            id="register"
            className="buttons"
            onClick={(e) => {
              submit(e.target.id);
            }}
          >
            Sign Up
          </button>
        </div>
      </div>
      <span className="logging">
        Already have an account?{' '}
        <button class="switching" type="button">
          Log in
        </button>
      </span>
    </div>
  );
};

export default LoginContainer;
