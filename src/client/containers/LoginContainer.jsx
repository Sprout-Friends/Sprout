import React, { useState } from 'react';

const LoginContainer = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [page, setPage] = useState('Sign Up');
  const signOrLogin = {
    'Sign Up': {
      description: 'Already have an account?',
      button: 'Log in',
      path: 'register',
    },
    'Log In': {
      description: 'Need to create an account?',
      button: 'Sign up',
      path: 'login',
    },
  };

  const emailOnChange = (e) => {
    setEmail(e.target.value);
  };

  const passwordOnChange = (e) => {
    setPassword(e.target.value);
  };

  const firstnameOnChange = (e) => {
    setFirstname(e.target.value);
  };

  const lastnameOnChange = (e) => {
    setLastname(e.target.value);
  };
  const submit = (path) => {
    // client-side validation
    if (path === 'register') {
      if (
        email.trim() === '' ||
        password.trim() === '' ||
        firstname.trim() === '' ||
        lastname.trim() === ''
      ) {
        return;
      }
      fetch(`/${path}`, {
        method: 'POST',
        body: JSON.stringify({
          email,
          password,
          first_name: firstname,
          last_name: lastname,
        }),
        headers: {
          'Content-type': 'Application/json',
        },
      })
        .then((data) => data.json())
        .then((data) => {
          setFirstname('');
          setLastname('');
          setEmail('');
          setPassword('');
          // if successfully set user in db, do something and redirect
          console.log('successfully set user!');
        })
        .catch((e) => {
          console.log(e);
        });
    } else {
      if (path === 'login') {
        if (email.trim() === '' || password.trim() === '') {
          return;
        }
        fetch(`/${path}`, {
          headers: {
            'Content-type': 'Application/json',
            email,
            password,
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
      }
    }
  };
  const switching = () => {
    if (page === 'Sign Up') setPage('Log In');
    else setPage('Sign Up');
  };

  return (
    <div className="flex-1 flex-col items-center text-center">
      <h2>{page}</h2>
      <div className="login-signup-wrapper">
        <div className="inputs">
          {page === 'Sign Up' ? (
            <div>
              <div className="input-border">
                <input
                  className="input-field"
                  id="input-firstname"
                  type="text"
                  value={firstname}
                  onChange={firstnameOnChange}
                  placeholder="Firstname"
                ></input>
              </div>
              <br></br>
              <div className="input-border">
                <input
                  className="input-field"
                  id="input-lastname"
                  type="text"
                  value={lastname}
                  onChange={lastnameOnChange}
                  placeholder="Lastname"
                ></input>
              </div>
            </div>
          ) : (
            <div></div>
          )}
          <br></br>
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
            id={signOrLogin[page].path}
            className="buttons"
            onClick={(e) => {
              submit(e.target.id);
            }}
          >
            {page}
          </button>
        </div>
      </div>
      <span className="span-wrapper">
        {signOrLogin[page].description}
        <button className="switching" type="button" onClick={switching}>
          {signOrLogin[page].button}
        </button>
      </span>
    </div>
  );
};

export default LoginContainer;
