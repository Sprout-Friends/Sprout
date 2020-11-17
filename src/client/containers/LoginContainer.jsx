import React, { useState } from 'react';

const LoginContainer = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [page, setPage] = useState('Sign Up');

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
        // if successfully set user in db, do something and redirect
        console.log('successfully set user!');
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const switching = () => {
    if (page === 'Sign Up') setPage('Log In');
    else setPage('Sign Up');
  };

  return (
    <div className="signup">
      <h2>{page}</h2>
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
            {page}
          </button>
        </div>
      </div>
      {page === 'Sign Up' ? (
        <span className="span-wrapper">
          Already have an account?{' '}
          <button className="switching" type="button" onClick={switching}>
            Log in
          </button>
        </span>
      ) : (
        <span className="span-wrapper">
          Need to create an account?{' '}
          <button className="switching" type="button" onClick={switching}>
            Sign up
          </button>
        </span>
      )}
    </div>
  );
};

export default LoginContainer;
