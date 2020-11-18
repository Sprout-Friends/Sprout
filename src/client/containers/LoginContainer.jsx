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
        fetch(`/users/${path}`, {
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
    <div class="min-h-screen flex flex-col items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div class="max-w-md w-full">
        <h1 class="my-8 text-center text-3xl leading-9 font-extrabold text-gray-900">
          {page}
        </h1>
        <div class="rounded-md shadow-sm">
          <div className="inputs">
            {page === 'Sign Up' ? (
              <div>
                <div className="input-border">
                  <input
                    class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5"
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
                    class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5"
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
                class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5"
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
                class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5"
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
            class="group my-3 relative w-full flex justify-center py-2 px-4 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out"
            id={signOrLogin[page].path}
            onClick={(e) => {
              submit(e.target.id);
            }}
          >
            {page}
          </button>
        </div>
      </div>
      <div class="flex flex-row text-sm leading-5 text-gray-700">
        <span class="">
          {signOrLogin[page].description}
          <button
            class="my-4 mx-2 focus:outline-none text-green-600 hover:text-green-800 font-medium"
            type="button"
            onClick={switching}
          >
            {signOrLogin[page].button}
          </button>
        </span>
      </div>
    </div>
  );
};

export default LoginContainer;
