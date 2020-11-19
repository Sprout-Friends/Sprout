import React, { useState, useContext } from 'react';
import { SessionContext } from '../contexts/sessionContext';

const LoginContainer = ({ setIsLoggedIn }) => {
  const { setCurrentUser } = useContext(SessionContext);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [renderSignUpPage, setRenderSignUpPage] = useState(true);

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
    } else if (path === 'login') {
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
          setCurrentUser(data);
          if (data.email) {
            setIsLoggedIn(true);
          }
        })
        .catch((e) => {
          alert('Log in unsuccessful! Try again!');
          console.log(e);
        });
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full">
        <h1 className="my-8 text-center text-3xl leading-9 font-extrabold text-gray-900">
          {renderSignUpPage ? 'Sign Up' : 'Log In'}
        </h1>
        <div className="rounded-md shadow-sm">
          <div className="inputs">
            {renderSignUpPage && (
              <>
                <div className="input-border">
                  <input
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5"
                    id="input-firstname"
                    type="text"
                    value={firstname}
                    onChange={firstnameOnChange}
                    placeholder="Firstname"
                  />
                </div>
                <br />
                <div className="input-border">
                  <input
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5"
                    id="input-lastname"
                    type="text"
                    value={lastname}
                    onChange={lastnameOnChange}
                    placeholder="Lastname"
                  />
                </div>
              </>
            )}
            <br />
            <div className="input-border">
              <input
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5"
                id="input-email"
                type="text"
                value={email}
                onChange={emailOnChange}
                placeholder="Email"
              />
            </div>
            <br />
            <div className="input-border">
              <input
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5"
                id="input-password"
                type="password"
                value={password}
                onChange={passwordOnChange}
                placeholder="Password"
              />
            </div>
            <br />
          </div>
        </div>
        <div className="buttonDiv">
          <button
            type="submit"
            className="group my-3 relative w-full flex justify-center py-2 px-4 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out"
            id={renderSignUpPage ? 'register' : 'login'}
            onClick={(e) => {
              submit(e.target.id);
            }}
          >
            {renderSignUpPage ? 'Sign Up' : 'Log In'}
          </button>
        </div>
      </div>
      <div className="flex flex-row text-sm leading-5 text-gray-700">
        <span>
          {renderSignUpPage
            ? 'Already have an account?'
            : 'Need to create an account?'}
          <button
            className="my-4 mx-2 focus:outline-none text-green-600 hover:text-green-800 font-medium"
            type="button"
            onClick={() => setRenderSignUpPage(!renderSignUpPage)}
          >
            {renderSignUpPage ? 'Log In' : 'Sign Up'}
          </button>
        </span>
      </div>
    </div>
  );
};

export default LoginContainer;
