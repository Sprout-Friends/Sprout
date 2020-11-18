import React, { useState } from 'react';
import Dashboard from './DashboardContainer.jsx';

const LoginContainer = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [page, setPage] = useState('Sign Up');
  const [loggedIn, setLoggedIn] = useState(false);
  let currPg;

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
      fetch(`/users/${path}`, {
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
          // data {_id, email, first_name, last_name}
          if (data.email) {
            alert('Sign up successful!');
            setPage('Log In');
          }
        })
        .catch((e) => {
          alert('Sign up unsuccessful! Try again!');
          console.log(e);
        });
    } else {
      if (path === 'login') {
        if (email.trim() === '' || password.trim() === '') {
          return;
        }
        fetch(`/users/${path}`, {
          headers: {
            'Content-type': 'Application/json',
            email,
            password,
          },
        })
          .then((res) => res.json())
          .then((data) => {
            setEmail('');
            setPassword('');
            // data is {_id, email, first_name, last_name}
            if (data.email) {
              setLoggedIn(true);
            }
          })
          .catch((e) => {
            alert('Log in unsuccessful! Try again!');
            console.log(e);
          });
      }
    }
  };
  const switching = () => {
    if (page === 'Sign Up') setPage('Log In');
    else setPage('Sign Up');
  };

  if (!loggedIn) {
    currPg = (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full">
          <h1 className="my-8 text-center text-3xl leading-9 font-extrabold text-gray-900">
            {page}
          </h1>
          <div className="rounded-md shadow-sm">
            <div className="inputs">
              {page === 'Sign Up' ? (
                <div>
                  <div className="input-border">
                    <input
                      className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5"
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
                      className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5"
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
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5"
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
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5"
                  id="input-password"
                  type="password"
                  value={password}
                  onChange={passwordOnChange}
                  placeholder="Password"
                ></input>
              </div>
              <br></br>
            </div>
          </div>
          <div className="buttonDiv">
            <button
              type="submit"
              className="group my-3 relative w-full flex justify-center py-2 px-4 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out"
              id={signOrLogin[page].path}
              onClick={(e) => {
                submit(e.target.id);
              }}
            >
              {page}
            </button>
          </div>
        </div>
        <div className="flex flex-row text-sm leading-5 text-gray-700">
          <span>
            {signOrLogin[page].description}
            <button
              className="my-4 mx-2 focus:outline-none text-green-600 hover:text-green-800 font-medium"
              type="button"
              onClick={switching}
            >
              {signOrLogin[page].button}
            </button>
          </span>
        </div>
      </div>
    );
  } else {
    currPg = <Dashboard />;
  }
  return <div>{currPg}</div>;
};

export default LoginContainer;
